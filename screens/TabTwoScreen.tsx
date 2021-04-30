import * as React from "react";
import { StyleSheet } from "react-native";
import Circle from "react-colorful-circle";

import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  // const [currentColor, setstate] = useState(initialState)
  const Circle = () => {
    return <View style={styles.circle} />;
  };
  return (
    <View>
      <Circle></Circle>
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
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
});
