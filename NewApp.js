import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/splash';
import HomeScreen from './src/homeScreen';
import Navigation2 from './src/navigation2';
import { navigationRef } from './src/navigationfolder/Navigation';
import Gesture from './gesturefiles/Gesture';
import {  View ,StyleSheet,TouchableHighlight} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
//const myNavigator = createStackNavigator();

// const NewApp=()=>{
 
//     return(

//          <NavigationContainer ref={navigationRef}>
//              <myNavigator.Navigator>

//              <myNavigator.Screen
//              name="Splash"
//              component={Splash}
//              mode ="modal"
//              />

//             <myNavigator.Screen
//             name="Home"
//             component={HomeScreen}
//             />
             
//              <myNavigator.Screen
//              name="NavigationScreen"
//              component={Navigation2}
//             />
//         </myNavigator.Navigator>

//         </NavigationContainer> 
//     );
// };

class MultiTouch extends React.Component {
    static defaultProps={
        onPress:()=>null,
    }

    onStartShouldSetResponder=(evt)=>{
        if(evt.nativeEvent.touches.length===2){
            return true;
        }
        return false;
    }

    // onMoveShouldSetResponder=(evt)=>{
    //    return true;
    // }


    onResponderRelease=(evt)=>{
        
    //     if(evt.nativeEvent.touches.length===1)
    //      alert('Single click');
    //      else
    //      this.props.onPress();
    //    }

      alert('Double click');
    //    onResponderMove=(evt)=>{
    //     evt.dx= 2000, 
    //     evt.dy= 20;
     }

    render(){
        return(
            <View onStartShouldSetResponder={this.onStartShouldSetResponder} onResponderRelease={this.onResponderRelease}>
                {this.props.children}
            </View>
        );

    }
};

const NewApp=()=>{

    return(
         
              <View style={styles.container}>
                <MultiTouch onPress={()=>{alert('Double click')}}>
                 <View style={styles.box}></View>
               </MultiTouch>
             </View>

            // <View style={styles.container}>
            //     <TouchableHighlight onPress={()=>{alert('Double click')}}>
            //    <View style={styles.box}></View>
            //    </TouchableHighlight>
            // </View>
        
    );
};


const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    box:{
        height:200,
        width:200,
        backgroundColor:'#000fff',
    }
});
export default NewApp;