import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  CookbookNavigator,
  InventoryNavigator,
  MaintenanceNavigator,
  MealPlannerNavigator,
  ProjectNavigator,
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
      <SiteStack.Screen name={Routes.MAIN} component={Home} />
      <SiteStack.Screen name={Routes.COOKBOOKS} component={CookbookNavigator} />
      <SiteStack.Screen
        name={Routes.INVENTORY}
        component={InventoryNavigator}
      />
      <SiteStack.Screen
        name={Routes.MAINTENANCE}
        component={MaintenanceNavigator}
      />
      <SiteStack.Screen
        name={Routes.MEAL_PLANNER}
        component={MealPlannerNavigator}
      />
      <SiteStack.Screen name={Routes.PROJECTS} component={ProjectNavigator} />
    </SiteStack.Navigator>
  );
}

export default SiteStackNavigator;
