import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import {createStore} from 'redux';

import { Provider } from 'react-redux';

import todoListReducer from './components/store/reducer';


const store = createStore(todoListReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <App />
    </Provider>
);

