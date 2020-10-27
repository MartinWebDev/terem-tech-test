import { useState } from "react";

import styles from './EventsPanel.module.scss';
import classNames from 'classnames/bind';

import PopularEvents from "../PopularEvents/PopularEvents";
import FeaturedEvents from "../FeaturedEvents/FeaturedEvents";
import Searchbox from "../../Form/Textbox";
// import { debounce } from "../../../utils/debounce";

const cx = classNames.bind(styles);

const EventsPanel = ({ children }) => {
    const [filterText, setFilterText] = useState("");
    // TODO: Fix debounce. Wanted to include a debounce, even though it is filtering client side, rapid typing would result in rapid re-rendering.
    // While not that noticable, the effect still exists, so would be better to reduce it where possible.
    // const updateFilter = debounce(setFilterText, 500);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("search")}>
                <Searchbox
                    id="filter"
                    name="filter"
                    initValue={""}
                    // TODO: Do the debounce inside textbox component else typing would be delayed
                    onChange={(value) => {
                        setFilterText(value)
                    }}
                    placeholder="Search for..."
                />
            </div>
            <div className={cx("additionalChildren")}>{children}</div>
            <div className={cx("events")}>
                <PopularEvents filterText={filterText} />
                <FeaturedEvents />
            </div>
        </div>
    );
};

export default EventsPanel;
