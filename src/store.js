import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducer';

export const history = createBrowserHistory();

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

const composedEnhancers = compose(
    composeWithDevTools(applyMiddleware(...middleware)),
    ...enhancers
)


export const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
);