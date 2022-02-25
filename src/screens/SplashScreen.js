import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, StackActions} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // Redux State
  const {isLoggedIn} = useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigation.dispatch(StackActions.replace('AuthNavigation'));
      } else {
        navigation.dispatch(StackActions.replace('MainNavigation'));
      }
    }, 2500);
  }, []);

  return (
    <View style={styles.Wrapper}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Wrapper: {
    display: 'flex',
    backgroundColor: '#E4C4A7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
