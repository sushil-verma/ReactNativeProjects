import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,Text,View} from 'react-native'

// This js file contains 3 components with navigation and value.

const Navigation2= () => {
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

        <Stack.Screen
         name="ProfileDetail" 
         component={ProfileDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation,route}) => {
    return (
        <View>
       <Button
        title="Go to profile "
        onPress={() => 
          navigation.navigate('Profile',{name:'sushil',id:'22'})
        }
        />
       
       </View>
    
    );
  };
  
  
  const ProfileScreen = ({ navigation,route}) => {
      return(
          <View>

          <Button
          title="Go to profileDetails"
          onPress={() =>
          navigation.navigate('ProfileDetail')
          }>
          </Button>
          <Text>"Hello " {route.params.name}{route.params.id}</Text>
          </View>
      );

  };
  

  const ProfileDetail = ({ navigation}) => {
    return(
        <View>

        <Button
        title="Go to Home"
        onPress={() =>
        navigation.navigate('Home',{age:'22'})
        }>
        </Button>
        <Text>"Profile Details"</Text>
        </View>
    );
  };
  
export default Navigation2;