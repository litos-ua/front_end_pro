import React from 'react';
import ReactDOM from "react-dom/client";
import {AppWrapper} from "./AppWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <Provider store={store}>
        <AppWrapper />
    // </Provider>,
);
