import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import Loading from "../components/Loading";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export interface ConfirmationParams {
  title: string;
  subtitle: string;
  icon: "smile" | "hug";
  buttonTitle: string;
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😀",
};

export default function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    icon,
    buttonTitle,
    nextScreen,
  } = routes.params as ConfirmationParams;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.footer}>
        <AppButton title={buttonTitle} onPress={handleMoveOn} />
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
