import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MealPlanner } from "../../screens";

function MealPlannerNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="MealPlannerScreen" component={MealPlanner} />
    </Stack.Navigator>
  );
}

export default MealPlannerNavigator;
