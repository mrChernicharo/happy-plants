import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, Alert } from "react-native";
import { formatDistance } from "date-fns";

import Header from "../components/Header";
import waterDrop from "../assets/waterdrop.png";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import {
  PlantProps,
  loadPlants,
  StoragePlantProps,
  removeStoredPlant,
} from "../libs/storage";

import PlantCardSecondary from "../components/PlantCardSecondary";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {}

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextToWater, setNextToWater] = useState<string>();

  async function loadStoredData() {
    const storedPlants = await loadPlants();

    const nextTime = formatDistance(
      new Date(storedPlants[0].dateTimeNotification).getTime(),
      new Date().getTime()
    );

    setNextToWater(
      `Don't forget to water ${storedPlants[0].name} in ${nextTime} hours`
    );
    setMyPlants(storedPlants);
    setLoading(false);
  }

  function handleDelete(plant: PlantProps) {
    Alert.alert("Delete", `Do you realy want to remove ${plant.name}?`, [
      { text: "No 🙏🏽", style: "cancel" },
      {
        text: "yes 👍🏽",
        onPress: async () => {
          try {
            await removeStoredPlant(plant.id);

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (err) {
            Alert.alert("Ops...Couldn't delete");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    loadStoredData();
  }, []);

  if (loading) return <Loading />;
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImg} />
        <Text style={styles.spotlightText}>{nextToWater}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Next to water</Text>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleDelete(item);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyPlants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
  },
  spotlightImg: { width: 60, height: 60 },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    // textAlign: "justify",
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
});
