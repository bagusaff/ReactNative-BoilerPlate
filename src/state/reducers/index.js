import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducer List
import UserReducer from './User.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'user',
    //Add more whitelist reducer
  ],
};

const reducer = combineReducers({
  user: UserReducer,
  //Add more reducer here
});

export default persistReducer(persistConfig, reducer);
