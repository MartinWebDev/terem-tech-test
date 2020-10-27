import styles from './FeaturedEvents.module.scss';
import classNames from 'classnames/bind';

import { API } from "../../../config/dev";
import { withEvents } from "../../../data/withEvents";
import EventsList from "../EventsList/EventsList";
import EventTile from "../EventTiles/EventTile";

const cx = classNames.bind(styles);

const FeaturedEvents = ({ eventList, loading }) => {
    return (
        <EventsList heading="Featured">
            {loading && <h3>Loading...</h3>}
            <div className={cx("wrapper")}>
                {!loading && eventList.map((el, idx) => <EventTile key={idx} eventData={el} wide={false} />)}
            </div>
        </EventsList>
    );
};

export default withEvents(FeaturedEvents, API.events.featured);
