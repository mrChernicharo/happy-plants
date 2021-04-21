import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.title}>How can we{"\n"} call you?</Text>

              <Text style={styles.emoji}>{isFilled ? "😄" : "😀"}</Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder="Your Name"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <AppButton text="confirm" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  header: {
    alignItems: "center",
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
  footer: {
    width: "100%",
    marginTop: 40,
  },
});
