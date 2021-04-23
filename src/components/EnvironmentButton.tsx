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
  const [isActive, setIsActive] = useState<boolean>(active);

  function handlePress() {
    setIsActive(!isActive);
  }

  return (
    <RectButton
      style={[styles.container, isActive && styles.containerActive]}
      onPress={handlePress}
      {...rest}
    >
      <Text style={[styles.text, isActive && styles.textActive]}>{title}</Text>
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
    marginHorizontal: 6,
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
