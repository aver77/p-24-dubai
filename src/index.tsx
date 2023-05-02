import React from "react";
import ReactDOM from "react-dom/client";
import App from "app";

import WithIntl from "shared/hocs/WithIntl";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <WithIntl>
            <App />
        </WithIntl>
    </React.StrictMode>
);
