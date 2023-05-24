import { carBrand } from "./defaultData";

export interface ICarPicker {
    setOpened: (v: boolean) => void;
}

export interface IContact {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    dateOfBirth?: string;
    nationality?: string;
}
export interface IAggregatedData {
    carName?: carBrand;
    carModel?: string;
    manufacturerYear?: string;

    city?: string;
    value?: string;
    insuranceClaims?: string;
    uaeLicence?: string;
    contactInfo?: IContact;
}
