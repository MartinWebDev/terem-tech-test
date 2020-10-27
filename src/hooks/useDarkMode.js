// Side note. I like to mix .jsx and .js extensions in react.
// Reason being is that you can use .jsx as a way to identify react based files which deal with layout, such as components
// and use .js to identify files that do not. That way you instantly know that a .jsx file must do something DOM related,
// before even opening the file!
import { useState, useEffect } from 'react';

/**
 * Example of understanding of hooks and how to create a custom one.
 * In this instance, I have a system for storing the theme (dark mode on/off).
 * We will first grab the browser default as that is a nice bit of UX and accessibility if user has a preference.
 * After that, store the value so that user can change for this site if they so desire.
 */
export const useDarkMode = () => {
    const DARK_MODE_STORAGE_KEY = 'app.settings.darkmode';
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(window.localStorage.getItem(DARK_MODE_STORAGE_KEY) === 'true');

    useEffect(() => {
        // Only need to fire on first run - If theme has not yet been written, then use browser preference. 
        // User can change if desired, and value will be stored to use next time.
        let storedSetting = window.localStorage.getItem(DARK_MODE_STORAGE_KEY);
        if (!storedSetting) {
            // TODO: I should have used one of the existing media query hooks on npm here.
            // Only a bad developer re-invents the wheel when many good wheels already exist, but for the sake of this test, this line is just fine.
            storedSetting = window.matchMedia('(prefers-color-scheme: dark)').matches;
            window.localStorage.setItem(DARK_MODE_STORAGE_KEY, storedSetting);
            setIsDarkModeEnabled(storedSetting);
        }
        else {
            window.localStorage.setItem(DARK_MODE_STORAGE_KEY, isDarkModeEnabled);
        }
    }, [isDarkModeEnabled]);

    const toggleDarkMode = () => {
        const newMode = !isDarkModeEnabled;
        setIsDarkModeEnabled(newMode);
        window.localStorage.setItem(DARK_MODE_STORAGE_KEY, newMode);
    };

    return { isDarkModeEnabled, toggleDarkMode };
}
