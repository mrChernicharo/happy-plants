import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

export default function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😉</Text>
        <Text style={styles.title}>Great!</Text>

        <Text style={styles.subtitle}>
          Now let us begin taking care of your babies.
        </Text>
      </View>

      <View style={styles.footer}>
        <AppButton title="Let's go" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 17,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 75,
  },
});
