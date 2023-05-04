import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Maintence } from "../../screens";
import Routes from "./Routes";

function MaintenanceNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MAINTENANCE} component={Maintence} />
    </Stack.Navigator>
  );
}

export default MaintenanceNavigator;
