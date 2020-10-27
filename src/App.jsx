import styles from './App.scss';
import classNames from 'classnames/bind';

import { useDarkMode } from "./hooks/useDarkMode";
import EventsPanel from "./components/Events/EventsPanel/EventsPanel";

const cx = classNames.bind(styles);

const App = () => {
  const { isDarkModeEnabled, toggleDarkMode } = useDarkMode();

  return (
    <div id="AppRoot" className={cx({ "dark-mode": isDarkModeEnabled })}>
      {/*
        NOTE: Couldn't think quickly of a better way to position this toggle button.
        I really like the idea of having this button in the top right of the main display.
        But semantically it doesn't belong here since it has nothing to do with events.
      */}
      <EventsPanel>
        <button onClick={toggleDarkMode}>{isDarkModeEnabled ? "Light" : "Dark"}</button>
      </EventsPanel>
    </div>
  );
}

export default App;
