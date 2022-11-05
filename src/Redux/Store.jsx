import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { CarsReducer } from './Reducers/CarsReducer';
import { AlertsReducer } from './Reducers/AlertsReducer';

const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({
    CarsReducer,
    AlertsReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;