import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { MealPlan } from "../../screens";
import {
  AuthNavigator,
  ListNavigator,
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
        name="Home"
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
        name="My Lists"
        component={ListNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={config.icons.list} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Meal Plan"
        component={MealPlan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={config.icons.menu} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
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
