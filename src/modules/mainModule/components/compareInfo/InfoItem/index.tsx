import { FC } from "react";

import styles from "./InfoItem.module.scss";

interface IInfoItem {
    title: string;
    description: string;
}
const InfoItem: FC<IInfoItem> = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

export default InfoItem;
