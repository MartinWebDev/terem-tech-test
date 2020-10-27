import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// NOTE: Here I would included all the logic for measuring and controlling the scrolling, but as I stated,
// this is the one component in my life that I have never managed to replicate with any success.

/*
TODO: So far, css side of things is working well enough.
- My plan is to measure each child width and set each width as a "breakpoint"
- This breakpoint array is they to be used to set the x-offset upon clicking.
- Alternative plan - Just use a library. 
  Seems to be a couple of good ones, but then there would be nothing to demonstrate,
  so prefer the idea of implementing my own, if very basic, version.
*/
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
