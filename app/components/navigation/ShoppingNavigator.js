import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ShoppingList } from "../../screens";

function ShoppingNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ShoppingListScreen" component={ShoppingList} />
    </Stack.Navigator>
  );
}

export default ShoppingNavigator;
