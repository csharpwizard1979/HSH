import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Projects } from "../../screens";

function ProjectNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ProjectsScreen" component={Projects} />
    </Stack.Navigator>
  );
}

export default ProjectNavigator;
