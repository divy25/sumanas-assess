import { createStore, applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import {rootred} from "./redux/login/reducer"
 
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootred, enhancer);

