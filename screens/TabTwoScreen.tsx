import * as React from "react";
import { StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import Slider from "@react-native-community/slider";

import { Text, View  } from "../components/Themed";
import { useState } from "react";

export default function TabTwoScreen() {
  const [circleSize, setCircleSize] = useState(200);

  const Circle = ({ sizeCircle }) => {
    return <View style={sizeCircle} />;
  };

  const handlePressBig = () => console.log("Bigger Pressed");
  const handlePressSmall = () => console.log("Smaller Pressed");
  
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
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
    <View >
      <Slider
          style={styles.Slider}
          value={200}
          minimumValue={200}
          maximumValue={500}  
          minimumTrackTintColor="grey"
          maximumTrackTintColor="grey"
          onValueChange={value => setCircleSize(value)}
        />
      </View>

      <View style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}><Circle
        sizeCircle={{
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          backgroundColor: "red",
        }}
      ></Circle></View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",

  },
  circle: {
    backgroundColor: "red",
  },

  tinyLogo: {
    width: 60,
    height: 60,
  },
  Slider: {
    width: 300,
    height: 50,
    backgroundColor: "black",
    

  },
});
