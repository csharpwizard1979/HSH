import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  CookbookNavigator,
  InventoryNavigator,
  MaintenanceNavigator,
  MealPlannerNavigator,
  ProjectNavigator,
  ShoppingNavigator,
} from "../navigation";

import { Home } from "../../screens";
import Routes from "./Routes";

function SiteStackNavigator(props) {
  const SiteStack = createStackNavigator();
  return (
    <SiteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SiteStack.Screen name={Routes.HOME_SCREEN} component={Home} />
      <SiteStack.Screen
        name={Routes.COOKBOOKS_SCREEN}
        component={CookbookNavigator}
      />
      <SiteStack.Screen
        name={Routes.INVENTORY_SCREEN}
        component={InventoryNavigator}
      />
      <SiteStack.Screen
        name={Routes.MAINTENANCE_SCREEN}
        component={MaintenanceNavigator}
      />
      <SiteStack.Screen
        name={Routes.MEAL_PLANNER_SCREEN}
        component={MealPlannerNavigator}
      />
      <SiteStack.Screen
        name={Routes.PROJECTS_SCREEN}
        component={ProjectNavigator}
      />
      <SiteStack.Screen
        name={Routes.SHOPPING_HOME_SCREEN}
        component={ShoppingNavigator}
      />
    </SiteStack.Navigator>
  );
}

export default SiteStackNavigator;
