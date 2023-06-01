import Input from "shared/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./Inputs.module.scss";
import searchIcons from "assets/svg/loop.svg";
import { IContact } from "../../interface";
import { useIntl } from "react-intl";

const Inputs = ({ property, data, setData }: { property: string; data: any; setData: any }) => {
    const intl = useIntl();
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
                placeholder={intl.formatMessage({ id: "firstName" })}
            />
            <Input
                value={inputValues.lastName || ""}
                onChange={handleSetValue("lastName")}
                prefix={inputPrefix}
                placeholder={intl.formatMessage({ id: "lastName" })}
            />
            <Input
                value={inputValues.email || ""}
                onChange={handleSetValue("email")}
                prefix={inputPrefix}
                placeholder={intl.formatMessage({ id: "emailAddress" })}
            />
            <Input
                value={inputValues.mobile || ""}
                onChange={handleSetValue("mobile")}
                prefix={inputPrefix}
                placeholder={intl.formatMessage({ id: "mobileNumber" })}
            />
            <Input
                value={inputValues.dateOfBirth || ""}
                onChange={handleSetValue("dateOfBirth")}
                prefix={inputPrefix}
                placeholder={intl.formatMessage({ id: "dateOfBirth" })}
            />
            <Input
                value={inputValues.nationality || ""}
                onChange={handleSetValue("nationality")}
                prefix={inputPrefix}
                placeholder={intl.formatMessage({ id: "nationality" })}
            />
        </div>
    );
};
export default Inputs;
