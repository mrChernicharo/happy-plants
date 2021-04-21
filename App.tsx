import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Welcome from "./src/pages/welcome";
import UserIdentification from "./src/pages/UserIdentification";
import Confirmation from "./src/pages/Confirmation";

import Routes from "./src/routes"; // /index omitido

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
  // return <Welcome />;
  // return <UserIdentification />;
  // return <Confirmation />;
}
