import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/mytheme.min.css";
import App from './components/App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <App />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
