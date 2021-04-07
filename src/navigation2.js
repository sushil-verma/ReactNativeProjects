import React,{Component} from 'react';
import { Text, View } from 'react-native';



class Navigation2 extends Component{
  render(){
    return (
      <View>
        <Text>Navigation Screen.</Text>
      </View>
      );
  }
};
  
export default Navigation2;
 


  
  
  // const ProfileScreen = ({ navigation,route}) => {
  //     return(
  //         <View>

  //         <Button
  //         title="Go to profileDetails"
  //         onPress={() =>
  //         navigate('ProfileDetail')
  //         }>
  //         </Button>
  //         <Text>"Hello " {route.params.name}{route.params.id}</Text>
  //         </View>
  //     );

  // };
  

  // const ProfileDetail = ({ navigation}) => {
  //   return(
  //       <View>

  //       <Button
  //       title="Go to Home"
  //       onPress={() =>
  //       navigation.navigate('Home',{age:'22'})
  //       }>
  //       </Button>
  //       <Text>"Profile Details"</Text>
  //       </View>
  //   );
  // };
