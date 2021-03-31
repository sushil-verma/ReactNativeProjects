import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splash';
import HomeScreen from './homeScreen';
import Navigation2 from './navigation2';

const stack = createStackNavigator();
function Stack(){
    
return(

    <stack.Navigator>
      
    <stack.Screen
      name="Splash"
      component={Splash}
      mode ="modal"
     />

     <stack.Screen
      name="Home"
      component={HomeScreen}
      />

     <stack.Screen
      name="Navigation"
      component={Navigation2}
      />

 </stack.Navigator>
 
 );
}

export default Stack;