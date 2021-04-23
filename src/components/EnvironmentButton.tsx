import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvBtnProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton = ({ title, active = false, ...rest }: EnvBtnProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      {title}
    </RectButton>
  );
};

export default EnvironmentButton;

const styles = StyleSheet.create({
  container: {},
  text: {},
});
