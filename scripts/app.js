import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routers/Routes';
import './styles/stylesheet.scss';
import createStore from "./store/configureStore";
import * as actions from './actions';
import { Provider } from 'react-redux';

const store = createStore();

store.subscribe(()=> {
    console.log(store.getState());
});

const expense1 = store.dispatch(actions.addExpense({
    description: "Movie Bill",
    comments: "Amount spent on Avengers: Infinity War + Food + Travel",
    amount: 1000,
}));
const expense2 = store.dispatch(actions.addExpense({
    description: "Current Bill",
    comments: "Power consumption charges for month January and February",
    amount: 2000,
}));

const element = (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

ReactDOM.render(element, document.getElementById("app"));