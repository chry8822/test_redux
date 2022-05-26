import React from "react";
import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(rootReducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

// ReactDOM.render is no longer supported in React 18
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);