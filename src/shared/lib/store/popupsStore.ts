import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
export interface IPopupsStore {
    burgerOpened: boolean;
    pickerOpened: boolean;
    successModalOpened: boolean;
    setBurgerOpened: (v: boolean) => void;
    setPickerOpened: (v: boolean) => void;
    setSuccessModalOpened: (v: boolean) => void;
}

const usePopupsStore = create<IPopupsStore>()(
    devtools(
        immer((set, get) => ({
            burgerOpened: false,
            pickerOpened: false,
            successModalOpened: false,
            setBurgerOpened: (v: boolean) => {
                set({ burgerOpened: v });
            },
            setPickerOpened: (v: boolean) => {
                set({ pickerOpened: v });
            },
            setSuccessModalOpened: (v: boolean) => {
                set({ successModalOpened: v });
            }
        }))
    )
);

export default usePopupsStore;
