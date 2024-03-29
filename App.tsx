import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


//Stack Screen
import RootStack from 'stacks/Root.stack';
import { enableScreens } from 'react-native-screens';
import useTheme from 'utils/hooks/useTheme';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/lib/integration/react';


const App = (): JSX.Element => {
  React.useEffect(() => {
    if (Platform.OS === "ios") {
      enableScreens(false);
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>

  );
}

export default App;
