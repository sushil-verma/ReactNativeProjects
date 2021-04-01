import React, {Component} from 'react';
import {Button, Text,View} from 'react-native';
import {navigateToNavigation} from './navigationfolder/Navigation'


class HomeScreen extends Component {
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>Welcome To Home</Text>
              <Button title ={"Go to Navigation"} 
              onPress={()=>
                navigateToNavigation2
              }></Button>
           </View>
         );
            
        }
};

  export default HomeScreen;