import { CAR, HOME, LIFE, PETS } from "../../contants";
import CarPicker from "./carPicker";
import { FC } from "react";

interface IPickers {
    contentName: typeof CAR | typeof LIFE | typeof HOME | typeof PETS;
    setOpened: (v: boolean) => void;
}
const Pickers: FC<IPickers> = ({ contentName, setOpened }) => {
    switch (contentName) {
        case CAR: {
            return <CarPicker setOpened={setOpened} />;
        }
        case LIFE: {
            return null;
        }
        case HOME: {
            return null;
        }
        case PETS: {
            return null;
        }
        default: {
            return null;
        }
    }
};
export default Pickers;
