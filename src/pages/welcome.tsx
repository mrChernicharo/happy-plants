import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";

export default function Welcome() {
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Keeping your {"\n"} plants happy{"\n"} couldn't be easier
        </Text>

        <Image style={styles.image} source={wateringImg} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Never forget water your plants again!{"\n"}We're here to remind you
          whenever you need.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather style={styles.buttonIcon} name="chevron-right" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding não funciona no SafeAreaView
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    width: 292,
    height: Dimensions.get("window").width * 0.8,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 24,
    color: "#fff",
  },
});

// SafeAreaView é uma View que repeita as reentrâncias no topo do iPhone
