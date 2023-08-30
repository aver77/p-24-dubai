import { FC } from "react";

import styles from "./CompaniesSlide.module.scss";

interface ICompaniesSlide {
    src: string;
    alt: string;
}
const CompaniesSlide: FC<ICompaniesSlide> = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <img src={src} alt={alt} />
        </div>
    );
};
export default CompaniesSlide;
