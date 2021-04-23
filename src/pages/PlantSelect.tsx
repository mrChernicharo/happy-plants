import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import EnvironmentButton from "../components/EnvironmentButton";

import Header from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import api from "../services/api";
import PlantCardPrimary from "../components/PlantCardPrimary";

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeatEvery: string;
  };
}

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);

  async function fetchEnvs() {
    const { data } = await api.get("plants_environments");
    // console.log(data);
    setEnvironments([{ key: "all", title: "All" }, ...data]);
  }
  async function fetchPlants() {
    const { data } = await api.get("plants");
    // console.log(data);
    setPlants(data);
  }

  useEffect(() => {
    fetchEnvs();
    fetchPlants();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>What environment </Text>
        <Text style={styles.subtitle}>makes your plant happy?</Text>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.envslist}
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton key={item.key} title={item.title} />
          )}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary key={item.name} data={item} />
          )}
        />
      </View>
    </View>
  );
};

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  envslist: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plantslist: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
