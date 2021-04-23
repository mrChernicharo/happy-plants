import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import loadAnimation from "../assets/load.json";

interface Props {}

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
  },
});
