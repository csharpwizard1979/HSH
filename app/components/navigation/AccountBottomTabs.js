import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { MealPlan } from "../../screens";
import {
  AuthNavigator,
  ListNavigator,
  Routes,
  SiteStackNavigator,
} from "../navigation";
import config from "../../configs/config";

function AccountBottomTabs(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: config.colors.white,
        tabBarInactiveTintColor: config.colors.black,
        tabBarStyle: {
          backgroundColor: config.colors.primary,
        },
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={SiteStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={config.icons.home}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.MY_LISTS}
        component={ListNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={config.icons.list} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.MEAL_PLAN}
        component={MealPlan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={config.icons.menu} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.ACCOUNT}
        component={AuthNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name={config.icons.account}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AccountBottomTabs;
