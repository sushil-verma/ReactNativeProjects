import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/splash';
import HomeScreen from './src/homeScreen';
import { navigationRef } from './src/navigationfolder/Navigation';

const myNavigator = createStackNavigator();

const NewApp=()=>{

    return(

         <NavigationContainer ref={navigationRef}>
             <myNavigator.Navigator>

             <myNavigator.Screen
             name="Splash"
             component={Splash}
             mode ="modal"
             />

            <myNavigator.Screen
            name="Home"
            component={HomeScreen}
           />
             
        </myNavigator.Navigator>

        </NavigationContainer> 
    );
};

export default NewApp;