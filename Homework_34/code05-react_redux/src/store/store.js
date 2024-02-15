import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import todosReducer from './todos/reducer';
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
