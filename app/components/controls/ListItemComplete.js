import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import config from "../../configs/config";

function ListItemComplete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcons
          name={config.icons.addCheck}
          size={35}
          color={config.colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.success,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemComplete;
