import 'react-native-gesture-handler';
import * as React from 'react';
import { Animated, View ,StyleSheet,PanResponder} from 'react-native';

class PanResponderFile extends React.Component {
    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {

            this.pan.setOffset({
                x: this.pan.x._value,
                y: this.pan.y._value
              });
        },
        onPanResponderMove: Animated.event([
            null,
            { dx: this.pan.x, dy: this.pan.y }

        ]),
       
        onPanResponderRelease: () => {
            this.pan.flattenOffset();
        }
      });

    render(){
        return(
            <View style={styles.container}>
                <Animated.View  style={{transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]}} {...this.panResponder.panHandlers}>
                
                  <View style={styles.box} />

                </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
    },
    box: {
      height: 150,
      width: 150,
      backgroundColor: "blue",
      borderRadius: 5
    }
  });

  export default PanResponderFile;