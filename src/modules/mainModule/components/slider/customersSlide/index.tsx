import { FC } from "react";

import styles from "./CustomersSlide.module.scss";

interface ICustomersSlide {
    title: string;
    text: string;
}
const CustomersSlide: FC<ICustomersSlide> = ({ title, text }) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
export default CustomersSlide;
