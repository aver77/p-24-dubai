import { FC } from "react";

import styles from "./OffersSlide.module.scss";

interface IOffersSlide {
    title: string;
    text: string;
}
const OffersSlide: FC<IOffersSlide> = ({ title, text }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
export default OffersSlide;
