import { FC, ReactNode, useState } from "react";

import styles from "./NewsSlide.module.scss";
import Button from "shared/ui/button";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

interface INewsSlide {
    title: string;

    secondTitle?: string;
    text: string;

    secondText?: string | ReactNode;

    extraText?: string;
    secondExtraText?: string;
    btnText?: string;
}
const NewsSlide: FC<INewsSlide> = ({
    title,
    text,
    secondTitle,
    secondText,
    extraText,
    secondExtraText,
    btnText
}) => {
    const currentBtnText = btnText ? (
        btnText
    ) : (
        <div>
            <span style={{ marginRight: "12px" }}>
                <FormattedMessage id={"learnMore"} />
            </span>
            <span>{`>`}</span>
        </div>
    );

    const [showFirstExtraInfo, setShowFirstExtraInfo] = useState(false);
    const [showSecondExtraInfo, setShowSecondExtraInfo] = useState(false);

    const onShowFirstExtraInfo = () => setShowFirstExtraInfo(!showFirstExtraInfo);
    const onShowSecondExtraInfo = () => setShowSecondExtraInfo(!showSecondExtraInfo);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.title}>{title}</p>
                <p
                    className={cx(
                        styles.extraInfo,
                        showFirstExtraInfo ? styles.extraInfoShow : styles.extraInfoHide
                    )}
                >
                    {extraText}
                </p>
                <p className={styles.text}>{text}</p>
                <Button
                    onClick={onShowFirstExtraInfo}
                    className={cx(styles.btn, showFirstExtraInfo ? styles.btnShow : styles.btnHide)}
                    withShieldAndArrow={false}
                >
                    {currentBtnText}
                </Button>
            </div>
            {secondTitle && (
                <div className={styles.item}>
                    <p className={styles.title}>{secondTitle}</p>
                    <p
                        className={cx(
                            styles.extraInfo,
                            showSecondExtraInfo ? styles.extraInfoShow : styles.extraInfoHide
                        )}
                    >
                        {secondExtraText}
                    </p>
                    <p className={styles.text}>{secondText}</p>
                    <Button
                        onClick={onShowSecondExtraInfo}
                        className={cx(
                            styles.btn,
                            showSecondExtraInfo ? styles.btnShow : styles.btnHide
                        )}
                        withShieldAndArrow={false}
                    >
                        {currentBtnText}
                    </Button>
                </div>
            )}
        </div>
    );
};
export default NewsSlide;
