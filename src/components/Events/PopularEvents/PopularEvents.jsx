import styles from './PopularEvents.module.scss';
import classNames from 'classnames/bind';

import { API } from "../../../config/dev";
import { withEvents } from "../../../data/withEvents";
import EventsList from "../EventsList/EventsList";
import EventTile from "../EventTiles/EventTile";
import Carousel from "../../Carousel/Carousel";

const cx = classNames.bind(styles);

// TODO: The only issue with this is the lack of caching of images.
// Cannot solve with memo in this function, though can probably memo inside the individual cards, but lacked time to experiment
const PopularEvents = ({ eventList, loading, filterText = "" }) => {
    const filterFunc = (item) => {
        // Always early exit functions
        if (filterText.trim().length === 0) return true;

        return item.title.includes(filterText.trim());
    }

    const events = eventList.filter(filterFunc);

    return (
        <EventsList heading="Popular around you">
            {loading && <h3>Loading...</h3>}
            <div className={cx("wrapper")}>
                <Carousel>
                    {!loading && events.length === 0 && <h4>No events found to match search text.</h4>}
                    {!loading && events.map((el, idx) => <EventTile key={idx} eventData={el} wide={true} />)}
                </Carousel>
            </div>
        </EventsList>
    );
};

export default withEvents(PopularEvents, API.events.nearby);
