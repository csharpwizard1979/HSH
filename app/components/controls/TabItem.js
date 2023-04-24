import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import config from "../../configs/config";

function TabItem({ children, isActive, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.detailsContainer}>
          <AppText>{children}</AppText>
          {isActive && <View style={styles.status} />}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    width: "100%",
  },
  status: {
    alignSelf: "center",
    backgroundColor: config.colors.primary,
    marginTop: 5,
    height: 4,
    width: "100%",
  },
});

export default TabItem;
