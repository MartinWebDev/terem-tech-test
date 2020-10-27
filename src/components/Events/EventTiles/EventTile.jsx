import styles from './EventTile.module.scss';
import classNames from 'classnames/bind';

import locationIcon from "./icons8-marker-50.png";

const cx = classNames.bind(styles);

// I tried to include a base component style system as described by the airbnb team at react-conf,
// I really like that approach to component design, however they use some additional libraries to achieve it,
// which they neglect to include in their talk. As I couldn't identify them and had not enough time to try and implement my own system
// I had to skip that idea. Would be happy to discuss the idea from said talk as I think it is a great approach to reusable component design
// and would be perfect for the use case such as these tiles.

// Instead of the above, I had to result to a "width" parameter here which I do not like! But time...
const EventTile = ({ eventData: data, wide = false }) => {
    return (
        <div className={cx("wrapper", { wide })}>
            <div className={cx("tile")}>
                <img src={data.img} alt={data.title} />
                <div className={cx("data")}>
                    <span className={cx("title")}>{data.title}</span>
                    <span className={cx("location")}><img src={locationIcon} alt="Location" />{data.location}</span>
                </div>
            </div>
        </div>
    );
};

export default EventTile;
