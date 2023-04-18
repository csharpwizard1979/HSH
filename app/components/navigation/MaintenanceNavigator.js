import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Maintence } from "../../screens";

function MaintenanceNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="MaintenanceScreen" component={Maintence} />
    </Stack.Navigator>
  );
}

export default MaintenanceNavigator;
