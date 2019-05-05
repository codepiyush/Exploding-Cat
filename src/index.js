import React from 'react';
import ReactDOM from "react-dom"
import App from "./app";
import {Provider} from 'react-redux';
import store from "./store/";
import './index.css';

let root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , root);