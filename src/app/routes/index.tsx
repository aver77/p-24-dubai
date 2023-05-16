import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "pages/Main";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
export default RoutesComponent;
