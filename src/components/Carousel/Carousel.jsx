import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// NOTE: Here I would included all the logic for measuring and controlling the scrolling, but as I stated,
// this is the one component in my life that I have never managed to replicate with any success.
const Carousel = ({ children }) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("prev")}></div>
            <div className={cx("children")}>{children}</div>
            <div className={cx("next")}></div>
        </div>
    );
};

export default Carousel;
