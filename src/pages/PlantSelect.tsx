import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../styles/colors";

interface Props {}

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <Text>Select plant</Text>
    </View>
  );
};

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
