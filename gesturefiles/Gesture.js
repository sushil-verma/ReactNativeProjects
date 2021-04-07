import React, {Component} from 'react';
import {Button, Text,View,StyleSheet} from 'react-native';

class Gesture extends Component {
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.box}></View>
           </View>
         );
            
        }
}



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
export default Gesture;