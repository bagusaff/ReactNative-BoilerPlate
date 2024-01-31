import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Storage,
} from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

import theme from './slices/theme';
import { useDispatch } from 'react-redux';
import authSlice from './slices/auth/authSlice';

const storage = new MMKV();
export const reduxStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    whitelist: ['theme', 'auth'],
};
const authPersistConfig = {
    key: 'auth',
    storage: reduxStorage
}

const reducers = combineReducers({
    theme,
    // Redux Slice
    auth: persistReducer(authPersistConfig, authSlice)
});


const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([]);

        // if (__DEV__ && !process.env.JEST_WORKER_ID) {
        //     const createDebugger = require('redux-flipper').default;
        //     middlewares.push(createDebugger());
        // }

        return middlewares;
    },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

type ThunkDispatch<S, A extends Action> = {
    (action: A): A
    <R>(asyncAction: ThunkAction<R, S, A>): R
}
type ThunkAction<R, S, A extends Action> = (dispatch: ThunkDispatch<S, A>, getState: () => S) => R
export type Dispatch<CustomActionTypes extends Action> = ThunkDispatch<RootState, CustomActionTypes>
export type GetState = () => RootState

export const useAppDispatch = () => useDispatch<AppDispatch>()


export { store, persistor };
