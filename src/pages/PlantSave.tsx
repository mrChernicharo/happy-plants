import React from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useRoute } from "@react-navigation/core";

import { SvgFromUri } from "react-native-svg";
import waterDrop from "../assets/waterdrop.png";
import AppButton from "../components/AppButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { PlantProps } from "./PlantSelect";

interface Params {
  plant: PlantProps;
}

const PlantSave = () => {
  const route = useRoute();
  const { plant } = route.params as Params;
  console.log(plant);

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} width={150} height={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image style={styles.tipImg} source={waterDrop}></Image>
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.alertLabel}>
          Choose the best time to be remembered
        </Text>

        <AppButton title="Save plant" onPress={() => {}} />
      </View>
    </View>
  );
};

export default PlantSave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  controller: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.shape,
    paddingBottom: getBottomSpace() || 20,
    // borderColor: "red",
    // borderWidth: 2,
    // borderStyle: "dashed",
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    borderRadius: 20,
    padding: 20,
    position: "relative",
    bottom: 60,
  },
  tipImg: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
});
