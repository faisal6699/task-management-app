import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';

//redux import
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {loginReducer} from "./store/reducers/loginReducer";
import {getAllUSerReducer} from "./store/reducers/getAllUserReducer";
import {getAllMemberReducer} from "./store/reducers/getAllMemberReducer";
import {getAllTaskReducer} from "./store/reducers/getAllTaskReducer";
import {addNewTaskReducer} from "./store/reducers/addNewTaskReducer";
import {addNewMemberReducer} from "./store/reducers/addNewMemberReducer";
import {deleteTaskReducer} from "./store/reducers/deleteTaskReducer";
import {deleteMemberReducer} from "./store/reducers/deleteMemberReducer";
import {updateTaskReducer} from "./store/reducers/updateTaskReducer";
import {updateMemberReducer} from "./store/reducers/updateMemberReducer";

//bootstrap import
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById('root'));


//redux initiate
const logger = createLogger();
const reducerCombined = combineReducers({
    loginReducer,
    getAllUSerReducer,
    getAllMemberReducer,
    getAllTaskReducer,
    addNewTaskReducer,
    addNewMemberReducer,
    deleteTaskReducer,
    deleteMemberReducer,
    updateTaskReducer,
    updateMemberReducer
});
const store = createStore(
    reducerCombined,
    applyMiddleware(thunkMiddleware, logger)
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
