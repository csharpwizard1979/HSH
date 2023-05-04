import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import config from "../../configs/config";

function ListItemAction({ background, icon, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: background }]}>
        {icon.library === "MI" ? (
          <MaterialIcons
            name={icon.name}
            size={35}
            color={config.colors.white}
          />
        ) : (
          <MaterialCommunityIcons
            name={icon.name}
            size={35}
            color={config.colors.white}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemAction;
