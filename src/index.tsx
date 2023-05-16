import React from "react";
import ReactDOM from "react-dom/client";
import App from "app";
import { BrowserRouter } from "react-router-dom";

import WithIntl from "shared/hocs/WithIntl";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WithIntl>
                <App />
            </WithIntl>
        </BrowserRouter>
    </React.StrictMode>
);
