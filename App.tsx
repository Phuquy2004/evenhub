/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { use, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SplashScreen } from './src/screnns';
import MainNavigator from './src/navigators/MainNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }
    , 1500); 
    return () => clearTimeout(timeout);
  }, [])
 return (
  <>
  <StatusBar
    barStyle="dark-content"
    backgroundColor="transparent"
    translucent
    />
    {
      !isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
          {/* <MainNavigator /> */}
        </NavigationContainer>
      ) 
    }
  </>
);


};
export default App;
