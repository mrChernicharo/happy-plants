import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

interface Props {}

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
