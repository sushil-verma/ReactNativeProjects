import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,Text} from 'react-native'




const MyComponent= () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
         name="Profile" 
         component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
    );
  };
  
  
  const ProfileScreen = ({ navigation}) => {
    return <Text>This is profile Screen.</Text>;
  };
  
export default MyComponent;