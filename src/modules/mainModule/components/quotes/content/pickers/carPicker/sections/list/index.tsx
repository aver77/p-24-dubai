import { IAggregatedData } from "../../interface";
import { ChangeEvent, FC, useEffect, useState } from "react";

import styles from "./List.module.scss";
import cx from "classnames";
import Input from "shared/ui/input";
import { useIntl } from "react-intl";
interface IList {
    property: string;
    mappedData: string[];
    data: IAggregatedData;
    setData: (v: IAggregatedData) => void;

    withCarName?: boolean;
    searchPlaceholderId?: string;
}
const List: FC<IList> = ({
    property,
    mappedData,
    data,
    setData,
    withCarName,
    searchPlaceholderId
}) => {
    const intl = useIntl();

    const [selectedListItem, setSelectedListItem] = useState<string>();
    const [clonedMappedData, setClonedMappedData] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState("");

    // initial values
    useEffect(() => {
        setSelectedListItem((data as Record<string, any>)[property]);
        setClonedMappedData(mappedData);
        setSearchValue("");
    }, [mappedData]);

    useEffect(() => {
        setData({
            ...data,
            [property]: selectedListItem
        });
    }, [selectedListItem]);

    useEffect(() => {
        setClonedMappedData(
            mappedData.filter((el) => el.toLowerCase().includes(searchValue.toLowerCase()))
        );
    }, [searchValue]);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleClick = (listItemName: string) => () => {
        setSelectedListItem(listItemName);
    };

    return (
        <>
            {searchPlaceholderId && (
                <Input
                    value={searchValue}
                    onChange={handleChangeSearch}
                    placeholder={intl.formatMessage({ id: searchPlaceholderId })}
                />
            )}
            <div className={styles.content}>
                {clonedMappedData.map((el, index) => (
                    <div
                        onClick={handleClick(el)}
                        key={index}
                        className={cx(styles.item, selectedListItem === el && styles.selected)}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </>
    );
};
export default List;
