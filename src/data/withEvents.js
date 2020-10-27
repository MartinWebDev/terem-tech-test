import { useState, useEffect } from "react";

export const withEvents = (WrappedComponent, apiEndpoint) => {
    return (props) => {
        const [loading, setLoading] = useState(true);
        const [data, setData] = useState([]);

        useEffect(() => {
            // Async effects must be written this way. This also makes it easy to refetch, say with pagiantion, etc
            async function getData() {
                const response = await fetch(apiEndpoint, {});
                const results = await response.json();
                setData(results.data);
                setLoading(false);
            }

            getData();
        }, []);

        // Should also add error state.
        // Also there are many other ways to achieve this result, but I needed some way to include at least one HOC for demo purposes.
        // Let's chat to discuss :)
        // Erorr state would be useful as I accidentally left an infinite loop in and hit the quota limit. Sorry :P
        return <WrappedComponent eventList={data} loading={loading} {...props} />;
    };
};
