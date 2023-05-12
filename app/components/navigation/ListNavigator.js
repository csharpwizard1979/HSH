import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MyLists, ProjectLists, ShoppingList, TodoList } from "../../screens";
import Routes from "./Routes";

function ListNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.MY_LISTS_SCREEN} component={MyLists} />
      <Stack.Screen name={Routes.PROJECT_LIST} component={ProjectLists} />
      <Stack.Screen name={Routes.SHOPPING_LIST} component={ShoppingList} />
      <Stack.Screen name={Routes.TODO} component={TodoList} />
    </Stack.Navigator>
  );
}

export default ListNavigator;
