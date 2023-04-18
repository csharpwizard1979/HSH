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

function SiteStackNavigator(props) {
  const SiteStack = createStackNavigator();
  return (
    <SiteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SiteStack.Screen name="Main" component={Home} />
      <SiteStack.Screen name="Cookbooks" component={CookbookNavigator} />
      <SiteStack.Screen name="Inventory" component={InventoryNavigator} />
      <SiteStack.Screen name="Maintenace" component={MaintenanceNavigator} />
      <SiteStack.Screen name="MealPlanner" component={MealPlannerNavigator} />
      <SiteStack.Screen name="Projects" component={ProjectNavigator} />
      <SiteStack.Screen name="ShoppingList" component={ShoppingNavigator} />
    </SiteStack.Navigator>
  );
}

export default SiteStackNavigator;
