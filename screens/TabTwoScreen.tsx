import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import Slider from "@react-native-community/slider";

import Colors from "../constants/Colors";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";

const ScreenWidth = Dimensions.get("window").width;
const CircleMax = (ScreenWidth / 2) * 1.5;

export default function TabTwoScreen() {
  const [circleSize, setCircleSize] = useState(CircleMax * 0.2);

  const CircleCss = ({ sizeCircle }) => {
    return <View style={sizeCircle} />;
  };

  const convertSingleCode = (colorCode) => {
    let hexCode = colorCode.toString(16);

    return hexCode.length == 1 ? "0" + hexCode : hexCode;
  };
  const rgbToHex = (red, green, blue) => {
    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      alert("Incorrect RGB Color Code!!!");
      return;
    } else {
      return (
        "#" +
        convertSingleCode(red) +
        convertSingleCode(green) +
        convertSingleCode(blue)
      );
    }
  };
  const handlePressBig = () => console.log("Bigger Pressed");
  const handlePressSmall = () => console.log("Smaller Pressed");

  var Color1 = rgbToHex(50, 0, 120);
  var Color2 = rgbToHex(200, 100, 80);
  var Color3 = rgbToHex(100, 20, 10);

  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <Svg height="100%" width={ScreenWidth}>
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              rx={circleSize * 0.7}
              ry={circleSize * 0.7}
              fx="1000"
              fy="1000"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor={Color1} stopOpacity="1" />
              <Stop offset="0.5" stopColor={Color2} stopOpacity="1" />
              <Stop offset="1" stopColor={Color3} stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Circle cx="50%" cy="50%" r={circleSize} fill="url(#grad)" />
        </Svg>
      </View>

      <View style={styles.slider}>
        <Slider
          style={{ width: "80%" }}
          value={20}
          minimumValue={CircleMax * 0.2}
          maximumValue={CircleMax}
          minimumTrackTintColor="grey"
          maximumTrackTintColor="grey"
          onValueChange={(value) => setCircleSize(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  circle: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});
