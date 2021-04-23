import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import userImg from "../assets/avatar.jpeg";
import fonts from "../styles/fonts";

interface Props {}

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello</Text>
        <Text style={styles.username}>String7</Text>
      </View>

      <Image style={styles.image} source={userImg}></Image>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row", // column por padrão
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
});
