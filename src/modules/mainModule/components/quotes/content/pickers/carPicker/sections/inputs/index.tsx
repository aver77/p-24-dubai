import Input from "shared/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./Inputs.module.scss";
import searchIcons from "assets/svg/loop.svg";
import { IContact } from "../../interface";

const Inputs = ({ property, data, setData }: { property: string; data: any; setData: any }) => {
    const [inputValues, setInputValues] = useState<IContact>(data[property]);

    const inputPrefix = <img src={searchIcons} alt={"loop"} />;
    const handleSetValue = (_property: string) => (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [_property]: e.target.value
        });
    };

    useEffect(() => {
        setData({
            ...data,
            [property]: inputValues
        });
    }, [inputValues]);

    return (
        <div className={styles.container}>
            <Input
                value={inputValues.firstName || ""}
                onChange={handleSetValue("firstName")}
                prefix={inputPrefix}
                placeholder={"First Name"}
            />
            <Input
                value={inputValues.lastName || ""}
                onChange={handleSetValue("lastName")}
                prefix={inputPrefix}
                placeholder={"Last Name"}
            />
            <Input
                value={inputValues.email || ""}
                onChange={handleSetValue("email")}
                prefix={inputPrefix}
                placeholder={"Email Address"}
            />
            <Input
                value={inputValues.mobile || ""}
                onChange={handleSetValue("mobile")}
                prefix={inputPrefix}
                placeholder={"Mobile Number"}
            />
            <Input
                value={inputValues.dateOfBirth || ""}
                onChange={handleSetValue("dateOfBirth")}
                prefix={inputPrefix}
                placeholder={"Date of birth "}
            />
            <Input
                value={inputValues.nationality || ""}
                onChange={handleSetValue("nationality")}
                prefix={inputPrefix}
                placeholder={"Nationality"}
            />
        </div>
    );
};
export default Inputs;
