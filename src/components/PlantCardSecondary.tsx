import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantPropsSecondary extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleDelete: () => void;
}

const PlantCardSecondary = ({ data, ...rest }: PlantPropsSecondary) => {
  function handleDelete() {}

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.deleteButton} onPress={handleDelete}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />

        <Text style={styles.title}>{data.name}</Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>water at</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
};

export default PlantCardSecondary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: 210,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: colors.shape,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    // paddingVertical: 16,
  },
  details: {
    flex: 1,
    alignItems: "flex-end",
    // borderColor: "red",
    // borderWidth: 2,
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  deleteButton: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 20,
    paddingLeft: 15,
  },
});
