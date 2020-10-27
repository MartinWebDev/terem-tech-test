import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Carousel = ({ children }) => {
    return (
        <div className={cx("wrapper")}>{children}</div>
    );
};

export default Carousel;
