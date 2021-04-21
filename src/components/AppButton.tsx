import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import fonts from "../styles/fonts";
import colors from "../styles/colors";

interface ButtonProps {
  text: string;
}

const AppButton = ({ text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.4}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
