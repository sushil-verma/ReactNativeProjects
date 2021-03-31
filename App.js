// import 'react-native-gesture-handler';
// import * as React from 'react';
// import navigationRef from './src/rootNavigation';
// import Splash from './src/splash';
// import HomeScreen from './src/homeScreen';
// import Navigation2 from './src/navigation2';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {View,Text} from 'react-native';


// const Stack = createStackNavigator();


// const App = () => {
  
//   return (
 
//       <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator>
      
//       <Stack.Screen
//         name="Splash"
//         component={Splash}
//         mode ="modal"
        
//         />

//        <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         />

//        <Stack.Screen
//         name="Navigation"
//         component={Navigation2}
//         />

//    </Stack.Navigator>
//    </NavigationContainer>
//      );
// };

// export default App;
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef,isReadyRef} from './Hello.js';
import {navigateToHome} from './Hello.js';

//const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}


class Splash extends React.Component{

  componentDidMount(){
    setTimeout(navigateToHome,5010,this);
  }

    render(){

        return(

            <View>
            <Button
            title="Go To Home ,please wait.....fffffff"
            />
            </View>
        );
    }
}
function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigate('Settings', { userName: 'Lucy' })}
      />
    </View>
  );
}

function Settings({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello {route.params.userName}</Text>
      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
}

const RootStack = createStackNavigator();

export default function App() {

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);
  return (
    <NavigationContainer 
    ref={navigationRef} 
    onReady={() => {
    
      isReadyRef.current=true;
    }}>
      <RootStack.Navigator>
       <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}



