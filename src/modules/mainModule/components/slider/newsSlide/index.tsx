import { FC, ReactNode } from "react";

import styles from "./NewsSlide.module.scss";
import Button from "shared/ui/button";

interface INewsSlide {
    title: string;

    secondTitle: string;
    text: string;

    secondText: string | ReactNode;
    btnText?: string;
}
const NewsSlide: FC<INewsSlide> = ({ title, text, secondTitle, secondText, btnText }) => {
    const currentBtnText = btnText ? (
        btnText
    ) : (
        <div>
            <span style={{ marginRight: "12px" }}>Learn more</span>
            <span>{`>`}</span>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
                <Button className={styles.btn} withShieldAndArrow={false}>
                    {currentBtnText}
                </Button>
            </div>
            <div className={styles.item}>
                <p className={styles.title}>{secondTitle}</p>
                <p className={styles.text}>{secondText}</p>
                <Button className={styles.btn} withShieldAndArrow={false}>
                    {currentBtnText}
                </Button>
            </div>
        </div>
    );
};
export default NewsSlide;
