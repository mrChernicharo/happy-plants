import React, { useState } from "react";

import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvBtnProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton = ({ title, active = false, ...rest }: EnvBtnProps) => {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
};

export default EnvironmentButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    justifyContent: "center",
    alignItems: "center",
    width: 76,
    height: 40,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.text,
    color: colors.green_dark,
  },
});
