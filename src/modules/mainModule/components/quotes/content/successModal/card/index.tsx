import styles from "./Card.module.scss";
import { FC } from "react";

interface ICard {
    view: React.ReactNode;
    title: string;
}
const Card: FC<ICard> = ({ view, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.view}>{view}</div>
            <p className={styles.text}>{title}</p>
        </div>
    );
};
export default Card;
