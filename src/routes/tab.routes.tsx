import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import PlantSelect from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import MyPlants from "../pages/MyPlants";
import PlantSave from "../pages/PlantSave";

const AppTab = createBottomTabNavigator();

interface Props {}

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveBackgroundColor: colors.body_dark,
        inactiveTintColor: colors.gray,
        labelPosition: "beside-icon",
        style: { marginTop: 4, height: 80 },
      }}
    >
      <AppTab.Screen
        name="New Plant"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="My Plants"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
