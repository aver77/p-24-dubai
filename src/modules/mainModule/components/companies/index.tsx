import { FC } from "react";
import sukoon from "assets/icons/main/companies/sukoonGray.png";
import orient from "assets/icons/main/companies/orientGray.png";
import fidelity from "assets/icons/main/companies/fidelityGray.png";

import styles from "./Companies.module.scss";

const Companies: FC = () => {
    return (
        <div className={styles.container}>
            <img src={sukoon} alt={"sukoon"} />
            <img src={orient} alt={"orient"} />
            <img src={fidelity} alt={"fidelity"} />
        </div>
    );
};
export default Companies;
