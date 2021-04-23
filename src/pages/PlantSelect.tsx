import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import EnvironmentButton from "../components/EnvironmentButton";

import Header from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import api from "../services/api";
import PlantCardPrimary from "../components/PlantCardPrimary";
import Loading from "../components/Loading";

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
  const [isLoading, setIsLoading] = useState(true);
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);
  const [envSelected, setEnvSelected] = useState("all");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  function handleEnvSelected(key: string) {
    setEnvSelected(key);
    if (key === "all") {
      setfilteredPlants(plants);
    } else {
      const filtered = plants.filter((plant) =>
        plant.environments.find((env) => env === key)
      );
      setfilteredPlants(filtered);
    }
  }

  async function fetchEnvs() {
    const { data } = await api.get(
      "plants_environments?_sort=title&_order=asc"
    );
    setEnvironments([{ key: "all", title: "All" }, ...data]);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=${7}`
    );

    if (!data) return setIsLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setfilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setfilteredPlants(data);
    }

    setIsLoading(false);
    setLoadMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  useEffect(() => {
    fetchEnvs();
    fetchPlants();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
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
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === envSelected}
              onPress={() => handleEnvSelected(item.key)}
            />
          )}
        />
      </View>
      <View style={styles.plantslist}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.plantContentContainer}
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
    marginLeft: 42,
    marginVertical: 32,
  },
  plantslist: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  plantContentContainer: {},
});
