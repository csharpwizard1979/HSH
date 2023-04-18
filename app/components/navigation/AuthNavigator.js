import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Register, Welcome } from "../../screens";
import SiteStackNavigator from "./SiteStackNavigator";

function AuthNavigator(props) {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Welcome" component={Welcome} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />
    </MainStack.Navigator>
  );
}

export default AuthNavigator;
