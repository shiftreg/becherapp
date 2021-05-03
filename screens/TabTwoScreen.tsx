import * as React from "react";
import { useState } from "react";
import { StyleSheet, Image, Button, TouchableOpacity, View, Dimensions} from "react-native";


import Slider from "@react-native-community/slider";
import { Text,   } from "../components/Themed";
import Colors from "../constants/Colors";


export default function TabTwoScreen() {
  const [circleSize, setCircleSize] = useState(200);

  const Circle = ({ sizeCircle }) => {
    return <View style={sizeCircle} />;
  };
  const CircleMax = Dimensions.get("window").width*1.5;

  const handlePressBig = () => console.log("Bigger Pressed");
  const handlePressSmall = () => console.log("Smaller Pressed");
  
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    > 

    


      {/* <View style={styles.Zoom}>
      <TouchableOpacity onPress={handlePressBig}>
      <Image  style = {{ 
        width: 50,
        height: 50}} source={require('../assets/images/circle_plus.png')} />

      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressSmall}>
      <Image  style = {{ 
        width: 50,
        height: 50}} source={require('../assets/images/circle_minus.png')} />

      </TouchableOpacity> */}


    <View style={styles.circle}>
      <Circle
        sizeCircle={{
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          backgroundColor: "red",
        }}
      ></Circle>
    </View>

    <View style={styles.container} >
      <Slider
          style={{width: "80%"}}
          value={200}
          minimumValue={200}
          maximumValue={CircleMax} 
          minimumTrackTintColor="grey"
          maximumTrackTintColor="grey"
          onValueChange={value => setCircleSize(value)}
        />
    </View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    backgroundColor: Colors.black,
    justifyContent: "center"
  },
  circle: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },

});
