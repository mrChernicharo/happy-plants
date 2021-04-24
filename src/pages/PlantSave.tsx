import React, { useEffect, useState } from "react";
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
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { useNavigation, useRoute } from "@react-navigation/core";

import { SvgFromUri } from "react-native-svg";
import { isBefore, format } from "date-fns";
import { PlantProps, savePlant } from "../libs/storage";

import waterDrop from "../assets/waterdrop.png";
import AppButton from "../components/AppButton";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { ConfirmationParams } from "./Confirmation";

interface Params {
  plant: PlantProps;
}

const PlantSave = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { plant } = route.params as Params;
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Must set some future point in time ⏰");
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDatePickerAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "All Right!",
        subtitle:
          "Save succesful! Now relax and let us remind you whenever your plants are thirsty",
        buttonTitle: "Thanks! :D",
        icon: "hug",
        nextScreen: "PlantSelect",
      } as ConfirmationParams);
    } catch {
      Alert.alert("Some unexpected error happened");
    }
  }

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

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={handleOpenDatePickerAndroid}
          >
            <Text style={styles.datePickerText}>{`Change ${format(
              selectedDateTime,
              "HH:ss"
            )}`}</Text>
          </TouchableOpacity>
        )}
        <AppButton title="Save plant" onPress={handleSave} />
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
    // paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
    // borderColor: "red",
    // borderWidth: 2,
    // borderStyle: "dashed",
  },
  controller: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: colors.shape,
    paddingBottom: getBottomSpace() + 20 || 40,
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
    bottom: 10,
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
  datePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
  },
  datePickerText: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 24,
  },
});
