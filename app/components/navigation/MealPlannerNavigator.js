import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MealPlanner, MealPlan } from "../../screens";
import Routes from "./Routes";

function MealPlannerNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MEAL_PLANNER_SCREEN} component={MealPlanner} />
    </Stack.Navigator>
  );
}

export default MealPlannerNavigator;
