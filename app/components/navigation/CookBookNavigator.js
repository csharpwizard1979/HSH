import React from "react";
import {
  HeaderStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import {
  Cookbooks,
  CookbookDetails,
  RecipeBox,
  RecipeDetails,
  RecipeCreate,
} from "../../screens";
import colors from "../../configs/colors";

function CookBookNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerStyle: {
          backgroundColor: colors.light,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="CookbooksScreen"
        component={Cookbooks}
        options={{
          title: "My Cookbooks",
        }}
      />
      <Stack.Screen
        name="CookbookDetails"
        component={CookbookDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeBox"
        component={RecipeBox}
        options={{
          title: "My Recipe Box",
        }}
      />
      <Stack.Screen
        name="RecipeCreate"
        component={RecipeCreate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}

export default CookBookNavigator;
