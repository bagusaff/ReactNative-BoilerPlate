import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from 'state';

import RootStackScreen from './src/stacks/Root.stack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
