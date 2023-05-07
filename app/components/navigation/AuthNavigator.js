import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account, Login, Register, Welcome } from "../../screens";
import Routes from "./Routes";

function AuthNavigator(props) {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name={Routes.ACCOUNT_SCREEN} component={Account} />
      <MainStack.Screen name={Routes.WELCOME} component={Welcome} />
      <MainStack.Screen name={Routes.LOGIN} component={Login} />
      <MainStack.Screen name={Routes.REGISTER} component={Register} />
    </MainStack.Navigator>
  );
}

export default AuthNavigator;
