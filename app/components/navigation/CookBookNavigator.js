import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Cookbooks, CookbookItem, RecipeItem } from "../../screens";

function CookBookNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="CookbooksScreen" component={Cookbooks} />
      <Stack.Screen name="CookbookItem" component={CookbookItem} />
      <Stack.Screen name="RecipeItem" component={RecipeItem} />
    </Stack.Navigator>
  );
}

export default CookBookNavigator;
