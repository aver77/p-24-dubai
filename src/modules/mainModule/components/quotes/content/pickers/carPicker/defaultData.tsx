import lexus from "assets/icons/main/carBrands/lexus.png";
import audi from "assets/icons/main/carBrands/audi.png";
import bmw from "assets/icons/main/carBrands/bmw.png";
import chevrolet from "assets/icons/main/carBrands/chevrolet.png";
import mersedes from "assets/icons/main/carBrands/mersedes.png";
import volvo from "assets/icons/main/carBrands/volvo.png";
import alfaRomeo from "assets/icons/main/carBrands/alfaRomeo.png";
import { IAggregatedData } from "./interface";
import BrandList from "./sections/brandList";
import List from "./sections/list";
import Slider from "./sections/slider";
import Inputs from "./sections/inputs";

// progress
export const PROGRESS_VALUE = 13;

// default structures
const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 100 }, (_, i) => currentYear - i + "");
export const cities = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Umm Al Quwain",
    "Ras Al Kaimah",
    "Al Awdah",
    "Al Fahlayn",
    "Al Fara"
];

export const insuranceClaims = [
    "No claims in the past year",
    "No claims for 2 years",
    "No claims for 3 years",
    "No claims for 4 years",
    "No claims for 5 years",
    "I claimed last year"
];

export const uaeLicenceLong = [
    "Less than 6 month",
    "Less than 1 year",
    "1 year",
    "2 years",
    "3 years",
    "4 years"
];

export enum carKeys {
    CAR_KEY = 1,
    MODEL_KEY,
    MANUFACTURER_KEY,
    CITY_KEY,
    VALUE_KEY,
    INSURANCE_CLAIMS_KEY,
    UAE_LICENSE_KEY,
    FILL_INFO_KEY
}

export enum carBrand {
    LEXUS = "LEXUS",
    BMW = "BMW",
    ALFA_ROMEO = "ALFA ROMEO",
    AUDI = "AUDI",
    CHEVROLET = "CHEVROLET",
    MERCEDES = "MERCEDES",
    VOLVO = "VOLVO"
}

export const getModelByCarBrand = (brand: carBrand) => {
    return [
        "GX-series",
        "EX-series",
        "ES-Series",
        "SC-Series",
        "LS-Series",
        "NX-Series",
        "RC-Series",
        "CT 200H",
        "ES 350",
        "ES 250"
    ];
};

export const getImgByCarBrand = (brand: carBrand) => {
    switch (brand) {
        case carBrand.ALFA_ROMEO: {
            return alfaRomeo;
        }
        case carBrand.AUDI: {
            return audi;
        }
        case carBrand.BMW: {
            return bmw;
        }
        case carBrand.CHEVROLET: {
            return chevrolet;
        }
        case carBrand.VOLVO: {
            return volvo;
        }
        case carBrand.LEXUS: {
            return lexus;
        }
        case carBrand.MERCEDES: {
            return mersedes;
        }
        default: {
            return undefined;
        }
    }
};

export const getTitleIdByKey = (key: carKeys) => {
    switch (key) {
        case carKeys.CAR_KEY: {
            return "letsStartBrand";
        }
        case carKeys.MODEL_KEY: {
            return "whatModel";
        }
        case carKeys.MANUFACTURER_KEY: {
            return "manufacturerYear";
        }
        case carKeys.CITY_KEY: {
            return "whereRegister";
        }
        case carKeys.VALUE_KEY: {
            return "whatIsValue";
        }
        case carKeys.INSURANCE_CLAIMS_KEY: {
            return "anyInsuranceClaims";
        }
        case carKeys.UAE_LICENSE_KEY: {
            return "uaeLicenceLong";
        }
        case carKeys.FILL_INFO_KEY: {
            return "fillTheInfo";
        }
        default: {
            return "";
        }
    }
};

export const carBrands = [
    carBrand.LEXUS,
    carBrand.BMW,
    carBrand.AUDI,
    carBrand.VOLVO,
    carBrand.CHEVROLET,
    carBrand.MERCEDES,
    carBrand.ALFA_ROMEO
];
export const checkIsDisabled = (key: carKeys, currentData: IAggregatedData) => {
    switch (key) {
        case carKeys.CAR_KEY: {
            return !currentData.carName;
        }
        case carKeys.MODEL_KEY: {
            return !currentData.carModel;
        }
        case carKeys.MANUFACTURER_KEY: {
            return !currentData.manufacturerYear;
        }
        case carKeys.CITY_KEY: {
            return !currentData.city;
        }
        case carKeys.VALUE_KEY: {
            return !currentData.value;
        }
        case carKeys.INSURANCE_CLAIMS_KEY: {
            return !currentData.insuranceClaims;
        }
        case carKeys.UAE_LICENSE_KEY: {
            return !currentData.uaeLicence;
        }
        case carKeys.FILL_INFO_KEY: {
            return !Object.values(currentData.contactInfo || {}).every(
                (el) => el !== null && el !== undefined && el !== ""
            );
        }
        default: {
            return true;
        }
    }
};

export const getContentByKey = (
    key: carKeys,
    aggregatedData: IAggregatedData,
    setAggregatedData: (v: IAggregatedData) => void
) => {
    switch (key) {
        case carKeys.CAR_KEY: {
            return (
                <BrandList
                    mappedData={carBrands}
                    data={aggregatedData}
                    setData={setAggregatedData}
                />
            );
        }
        case carKeys.MODEL_KEY: {
            const mappedData = getModelByCarBrand(aggregatedData.carName!);
            return (
                <List
                    property={"carModel"}
                    mappedData={mappedData}
                    data={aggregatedData}
                    setData={setAggregatedData}
                    withCarName={true}
                    searchPlaceholderId={"findModel"}
                />
            );
        }
        case carKeys.MANUFACTURER_KEY: {
            return (
                <List
                    property={"manufacturerYear"}
                    mappedData={years}
                    data={aggregatedData}
                    setData={setAggregatedData}
                    withCarName={true}
                    searchPlaceholderId={"findYear"}
                />
            );
        }
        case carKeys.CITY_KEY: {
            return (
                <List
                    property={"city"}
                    mappedData={cities}
                    data={aggregatedData}
                    setData={setAggregatedData}
                    withCarName={true}
                    searchPlaceholderId={"whereRegisterPH"}
                />
            );
        }
        case carKeys.VALUE_KEY: {
            return <Slider property={"value"} data={aggregatedData} setData={setAggregatedData} />;
        }
        case carKeys.INSURANCE_CLAIMS_KEY: {
            return (
                <List
                    property={"insuranceClaims"}
                    mappedData={insuranceClaims}
                    data={aggregatedData}
                    setData={setAggregatedData}
                />
            );
        }
        case carKeys.UAE_LICENSE_KEY: {
            return (
                <List
                    property={"uaeLicence"}
                    mappedData={uaeLicenceLong}
                    data={aggregatedData}
                    setData={setAggregatedData}
                />
            );
        }
        case carKeys.FILL_INFO_KEY: {
            return (
                <Inputs
                    property={"contactInfo"}
                    data={aggregatedData}
                    setData={setAggregatedData}
                />
            );
        }
        default: {
            return null;
        }
    }
};
