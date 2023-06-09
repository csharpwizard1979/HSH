import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Inventory } from "../../screens";
import Routes from "./Routes";

function InventoryNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.INVENTORY} component={Inventory} />
    </Stack.Navigator>
  );
}

export default InventoryNavigator;
