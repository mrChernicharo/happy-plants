import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>What environment </Text>
      <Text style={styles.subtitle}>makes your plant happy?</Text>
      {/* <Text>Select plant</Text> */}
    </View>
  );
};

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
});
