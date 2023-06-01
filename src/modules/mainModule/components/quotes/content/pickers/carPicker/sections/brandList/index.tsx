import { carBrand } from "../../defaultData";
import { IAggregatedData } from "../../interface";
import { ChangeEvent, FC, useEffect, useState } from "react";
import searchIcon from "assets/svg/loop.svg";

import styles from "./BrandList.module.scss";
import Item from "./Item";
import cx from "classnames";
import Input from "shared/ui/input";
import { useIntl } from "react-intl";

interface IBrandList {
    mappedData: carBrand[];
    data: IAggregatedData;
    setData: (v: IAggregatedData) => void;
}
const BrandList: FC<IBrandList> = ({ mappedData, data, setData }) => {
    const intl = useIntl();
    const [selectedBrand, setSelectedBrand] = useState(data.carName);

    const [searchValue, setSearchValue] = useState("");
    const [clonedMappedData, setClonedMappedData] = useState(mappedData);

    useEffect(() => {
        setData({
            ...data,
            carName: selectedBrand
        });
    }, [selectedBrand]);

    useEffect(() => {
        setClonedMappedData(
            mappedData.filter((el) => el.toLowerCase().includes(searchValue.toLowerCase()))
        );
    }, [searchValue]);

    const handleClick = (brandName: carBrand) => () => {
        setSelectedBrand(brandName);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <Input
                value={searchValue}
                onChange={handleSearchChange}
                prefix={<img src={searchIcon} alt={"loop"} />}
                placeholder={intl.formatMessage({ id: "findBrand" })}
            />
            <div className={styles.content}>
                {clonedMappedData.map((el, index) => (
                    <div
                        onClick={handleClick(el)}
                        className={cx(
                            styles.brandContainer,
                            selectedBrand === el && styles.selected
                        )}
                        key={index}
                    >
                        <Item brandName={el} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default BrandList;
