import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Inventory } from "../../screens";

function InventoryNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="InventoryScreen" component={Inventory} />
    </Stack.Navigator>
  );
}

export default InventoryNavigator;
