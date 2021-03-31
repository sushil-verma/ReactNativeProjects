import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {navigate} from './Root';


class Splash extends Component{

  componentDidMount(){
    setTimeout(navigate,4000,this);
  }

    render(){

        return(

            <View>
            <Text>Splash Screen</Text>
            </View>
        );
    }
}

export default Splash;