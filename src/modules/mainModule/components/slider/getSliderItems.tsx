import {SlideKeyEnum} from "shared/constants/slideKeys";
import OffersSlide from "./offersSlide";
import React from "react";
import {IntlShape} from "react-intl";
import CustomersSlide from "./customersSlide";
import NewsSlide from "./newsSlide";
import CompaniesSlide from "./companiesSlide";

import methadGray from "assets/icons/main/companies/methadGray.png";
import adamjeeGray from "assets/icons/main/companies/adamjeeGray.png";
import takafulGray from "assets/icons/main/companies/takafulGray.png";
import sukoonGray from "assets/icons/main/companies/sukoonGray.png";
import orientGray from "assets/icons/main/companies/orientGray.png";
import tokioMarineGray from "assets/icons/main/companies/tokioMarineGray.png";
import fidelityGray from "assets/icons/main/companies/fidelityGray.png";
import rakInsuranceGray from "assets/icons/main/companies/rakInsuranceGray.png";

export const getSliderItems = (intl: IntlShape, key: SlideKeyEnum) => {
    switch (key) {
        case SlideKeyEnum.OFFERS: {
            return [
                <OffersSlide
                    key={"1"}
                    title={intl.formatMessage({ id: "trustExpertise" })}
                    text={intl.formatMessage({ id: "trustExpertiseDesc" })}
                />,
                <OffersSlide
                    key={"2"}
                    title={intl.formatMessage({ id: "customerApproach" })}
                    text={intl.formatMessage({ id: "customerApproachDesc" })}
                />,
                <OffersSlide
                    key={"3"}
                    title={intl.formatMessage({ id: "empoweringKnowledge" })}
                    text={intl.formatMessage({ id: "empoweringKnowledgeDesc" })}
                />
            ];
        }
        case SlideKeyEnum.CUSTOMERS: {
            return [
                <CustomersSlide
                    key={"1"}
                    title={intl.formatMessage({ id: "firstCustomerName" })}
                    text={intl.formatMessage({ id: "firstCustomerText" })}
                />,
                <CustomersSlide
                    key={"2"}
                    title={intl.formatMessage({ id: "secondCustomerName" })}
                    text={intl.formatMessage({ id: "secondCustomerText" })}
                />,
                <CustomersSlide
                    key={"3"}
                    title={intl.formatMessage({ id: "thirdCustomerName" })}
                    text={intl.formatMessage({ id: "thirdCustomerText" })}
                />,
                <CustomersSlide
                    key={"4"}
                    title={intl.formatMessage({ id: "fourthCustomerName" })}
                    text={intl.formatMessage({ id: "fourthCustomerText" })}
                />
            ];
        }
        case SlideKeyEnum.COMPANIES: {
            return [
                <CompaniesSlide key={"1"} src={methadGray} alt={"methad"}/>,
                <CompaniesSlide key={"2"} src={adamjeeGray} alt={"adamjee"}/>,
                <CompaniesSlide key={"3"} src={takafulGray} alt={"takaful"}/>,
                <CompaniesSlide key={"4"} src={sukoonGray} alt={"sukoon"}/>,
                <CompaniesSlide key={"5"} src={orientGray} alt={"orient"}/>,
                <CompaniesSlide key={"6"} src={tokioMarineGray} alt={"tokioMarine"}/>,
                <CompaniesSlide key={"7"} src={fidelityGray} alt={"fidelity"}/>,
                <CompaniesSlide key={"8"} src={rakInsuranceGray} alt={"rakInsuranceGray"}/>,
            ];
        }
        case SlideKeyEnum.NEWS: {
            return new Array(4)
                .fill(undefined)
                .map((el, index) => {
                    const increasedIndex = index + 1;

                    const titleId = increasedIndex + "newTitle";
                    const textId = increasedIndex + "newText";
                    const extraTextId = increasedIndex + "newExtraText";

                    const secondTitleId = increasedIndex + "new2Title";
                    const secondTextId = increasedIndex + "new2Text";
                    const secondExtraTextId = increasedIndex + "new2ExtraText";

                    return (
                        <NewsSlide
                            key={index}
                            title={intl.formatMessage({id: titleId})}
                            text={intl.formatMessage({id: textId})}
                            extraText={intl.formatMessage({id: extraTextId})}
                            secondTitle={intl.formatMessage({id: secondTitleId})}
                            secondText={intl.formatMessage({id: secondTextId})}
                            secondExtraText={intl.formatMessage({id: secondExtraTextId})}
                        />
                    )
                });
        }

        default: {
            return [];
        }
    }
};
