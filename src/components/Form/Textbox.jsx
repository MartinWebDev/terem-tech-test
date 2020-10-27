import { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import styles from "./Textbox.scss";

const cx = classNames.bind(styles);

// NOTE: Should also include things like onblur, etc. And remember to noop all defaults to avoid errors
const Textbox = ({ id, name, initValue, onChange, placeholder = "", hasError }) => {
    const [innerValue, setInnerValue] = useState(initValue);

    useEffect(() => {
        onChange(innerValue);
    }, [innerValue, onChange]);

    return (
        <input
            id={id}
            name={name}
            type="text"
            value={innerValue}
            onChange={(event) => {
                setInnerValue(event.target.value);
            }}
            placeholder={placeholder}
            className={cx("textbox", { "error": hasError })}
        />
    );
};

export default Textbox;
