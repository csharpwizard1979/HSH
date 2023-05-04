import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Projects } from "../../screens";
import Routes from "./Routes";

function ProjectNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PROJECTS} component={Projects} />
    </Stack.Navigator>
  );
}

export default ProjectNavigator;
