import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ShoppingHome } from "../../screens";
import Routes from "./Routes";

function ShoppingNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.SHOPPING_HOME} component={ShoppingHome} />
    </Stack.Navigator>
  );
}

export default ShoppingNavigator;
