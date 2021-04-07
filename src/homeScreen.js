import React, {Component} from 'react';
import {Button, Text,View} from 'react-native';
import {navigateToNext} from './navigationfolder/Navigation'


class HomeScreen extends Component {
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>Welcome To Home</Text>
              <Button title ={"Go to Navigation"} 
              onPress={()=>
                navigateToNext('NavigationScreen')
              }></Button>
           </View>
         );
            
        }
};

  export default HomeScreen;