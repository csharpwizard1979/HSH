import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import * as Screens from "../../screens";
import CustomDrawerContent from "./CustomDrawerContent";

function HomeDrawer(props) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Screens.Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Inventory"
        component={Screens.Inventory}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cookbooks"
        component={Screens.Cookbooks}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="RecipeBox"
        component={Screens.RecipeBox}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chef-hat" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="MealPlanner"
        component={Screens.MealPlanner}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Maintenace"
        component={Screens.Maintence}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home-work" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Projects"
        component={Screens.Projects}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="arrow-projectile-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
