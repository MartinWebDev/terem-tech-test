import { Fragment } from "react";

import styles from './EventsList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EventsList = ({ heading, children }) => {
    return (
        <Fragment>
            <h2 className={cx("eventsHeader")}>{heading}</h2>
            {children}
        </Fragment>
    );
};

export default EventsList;
