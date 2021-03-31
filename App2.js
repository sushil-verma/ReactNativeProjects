import 'react-native-gesture-handler';
import * as React from 'react';
import {navigationRef} from './src/Root';


import {View,Text} from 'react-native';
import Stack from './src/Stack';
import { NavigationContainer } from '@react-navigation/native';




const App2 = () => {
  
  return (
 
      <NavigationContainer ref={navigationRef}>
      <Stack></Stack>
      </NavigationContainer>
     );
};

export default App2;