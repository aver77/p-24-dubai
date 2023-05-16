import React, { FC } from "react";
import { Button, ButtonProps } from "antd";
import shield from "assets/svg/shield.svg";
import arrow from "assets/svg/arrow.svg";
import styles from "./Button.module.scss";

type TButton = ButtonProps & {
    children: any;
    withShieldAndArrow?: boolean;
};
const ButtonComponent: FC<TButton> = ({ children, withShieldAndArrow = true, ...props }) => {
    return (
        <Button {...props}>
            {withShieldAndArrow ? (
                <div className={styles.withShieldAndArrowBtnContainer}>
                    <img src={shield} alt={"shield"} />
                    {children}
                    <img src={arrow} alt={"arrow"} />
                </div>
            ) : (
                children
            )}
        </Button>
    );
};

export default ButtonComponent;
