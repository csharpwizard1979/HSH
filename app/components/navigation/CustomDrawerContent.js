import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => props.navigation.navigate("Home")}
        icon={({ color, size }) => (
          <MaterialIcons name="help-outline" color={color} size={size} />
        )}
      />
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
