import * as React from "react";
import { StyleSheet } from "react-native";
// import Slider from "@react-native-community/slider";

import { Text, View } from "../components/Themed";
import { useState } from "react";

export default function TabTwoScreen() {
  const [circleSize, setCircleSize] = useState(10);

  const Circle = ({ sizeCircle }) => {
    return <View style={sizeCircle} />;
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Circle
        sizeCircle={{
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          backgroundColor: "red",
        }}
      ></Circle>
      {/* <View>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={50}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View> */}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  circle: {
    backgroundColor: "red",
  },
});
