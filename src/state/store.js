import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

//Custom File
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
