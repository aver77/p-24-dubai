import { InputProps, Input } from "antd";
import { FC } from "react";

import styles from "./Input.module.scss";
import cx from "classnames";

type TInput = InputProps;
const InputComponent: FC<TInput> = ({ ...props }) => {
    return <Input {...props} className={cx(styles.input, props.className)} />;
};

export default InputComponent;
