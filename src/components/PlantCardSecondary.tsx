import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface PlantProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
};

export default PlantCardSecondary;

const styles = StyleSheet.create({
  container: {},
  text: {},
});
