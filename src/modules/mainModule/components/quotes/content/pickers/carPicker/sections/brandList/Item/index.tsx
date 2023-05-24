import { FC } from "react";
import { carBrand, getImgByCarBrand } from "../../../defaultData";

import styles from "./Item.module.scss";
import { IAggregatedData } from "../../../interface";
interface IItem {
    brandName: carBrand;
}
const Item: FC<IItem> = ({ brandName }) => {
    const imageSrc = getImgByCarBrand(brandName);

    return (
        <>
            <img src={imageSrc} alt={"brand img"} />
            <span className={styles.name}>{brandName}</span>
        </>
    );
};
export default Item;
