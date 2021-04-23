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

import { SvgFromUri } from "react-native-svg";
import waterDrop from "../assets/waterdrop.png";
import AppButton from "../components/AppButton";
import colors from "../styles/colors";

interface Props {}

const PlantSave = () => {
  return (
    <>
      <View style={styles.container}>
        <SvgFromUri uri={""} width={150} height={150} />
        <Text style={styles.plantName}>Plant Name</Text>
        <Text style={styles.plantAbout}>
          Plant Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem quisquam similique asperiores id atque! Voluptates,
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image style={styles.tipImg} source={waterDrop}></Image>
          <Text style={styles.tipText}>
            Plant Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem quisquam similique asperiores id atque! Voluptates,
          </Text>
        </View>
        <Text style={styles.alertLabel}>
          Choose the best time to be remembered
        </Text>

        <AppButton title="Save plant" onPress={() => {}} />
      </View>
    </>
  );
};

export default PlantSave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.shape,
  },
  plantName: {},
  plantAbout: {},
  controller: {},
  tipContainer: {},
  tipImg: {},
  tipText: {},
  alertLabel: {},
});
