import React, { CSSProperties, FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./Title.module.scss";

interface ITitle {
    children: ReactNode;

    style?: CSSProperties;
    className?: string;
    centered?: boolean;
    fontWeight?: number | string;
}
const Title: FC<ITitle> = ({
    fontWeight = 700,
    centered = true,
    children,
    className,
    style = {}
}) => {
    return (
        <div
            style={{ fontWeight, ...style }}
            className={cx(styles.text, centered && styles.centered, className)}
        >
            {children}
        </div>
    );
};
export default Title;
