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
      <Stack.Screen name="Recipebox" component={RecipeBox} />
      <Stack.Screen name="Recipeitem" component={RecipeItem} />
    </Stack.Navigator>
  );
}

export default CookBookNavigator;
