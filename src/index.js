import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";

ReactDOM.render(
    <BrowserRouter>
        <HomePage/>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
