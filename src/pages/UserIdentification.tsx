import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

export default function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      {/*  */}
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>How can we{"\n"} call you?</Text>

          <Text style={styles.emoji}>🤔</Text>

          <TextInput style={styles.input} />
        </View>
      </View>
      {/*  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    // paddingBottom: 50,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 54,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  button: {},
});
