import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Cookbooks, CookbookItem, RecipeBox, RecipeItem } from "../../screens";

function CookBookNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="CookbooksScreen" component={Cookbooks} />
      <Stack.Screen
        name="CookbookItem"
        component={CookbookItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RecipeBox" component={RecipeBox} />
      <Stack.Screen name="RecipeItem" component={RecipeItem} />
    </Stack.Navigator>
  );
}

export default CookBookNavigator;
