import { FC } from "react";
import styles from "./Card.module.scss";
interface ICard {
    title: string;
    description: string;
    content: JSX.Element;
}
const Card: FC<ICard> = ({ title, description, content }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            {content}
        </div>
    );
};
export default Card;
