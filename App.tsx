import React from 'react';
import { Platform } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

//Stack Screen
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppEntry from 'AppEntry';


const App = (): JSX.Element => {
  React.useEffect(() => {
    if (Platform.OS === "ios") {
      enableScreens(false);
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppEntry />
      </PersistGate>
    </Provider>

  );
}

export default App;
