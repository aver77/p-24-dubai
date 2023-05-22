import { FC } from "react";
import styles from "./CarPicker.module.scss";

interface ICarPicker {
    setOpened: (v: boolean) => void;
}
const CarPicker: FC<ICarPicker> = ({ setOpened }) => {
    return <div className={styles.container}>hi</div>;
};
export default CarPicker;
