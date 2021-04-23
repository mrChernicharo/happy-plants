import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import EnvironmentButton from "../components/EnvironmentButton";

import Header from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>What environment </Text>
        <Text style={styles.subtitle}>makes your plant happy?</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => <EnvironmentButton title="Cozinha" />}
      />
    </View>
  );
};

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
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
  list: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
