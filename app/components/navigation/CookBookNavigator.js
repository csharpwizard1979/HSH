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
import Routes from "./Routes";
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
        name={Routes.COOKBOOKS_SCREEN}
        component={Cookbooks}
        options={{
          title: "My Cookbooks",
        }}
      />
      <Stack.Screen
        name={Routes.COOKBOOK_DETAILS}
        component={CookbookDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.RECIPE_BOX}
        component={RecipeBox}
        options={{
          title: "My Recipe Box",
        }}
      />
      <Stack.Screen
        name={Routes.RECIPE_CREATE}
        component={RecipeCreate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.RECIPE_DETAILS}
        component={RecipeDetails}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}

export default CookBookNavigator;
