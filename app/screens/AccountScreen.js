import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import config from "../configs/config";

function AccountScreen({ navigation, route }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <View style={styles.circle}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={80}
              color={config.colors.white}
            />
          </View>
        </View>
        <Text>My Account</Text>
      </View>
      <View style={styles.detailsContainer}></View>
      <View style={styles.footer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignContent: "center",
    borderRadius: 60,
    backgroundColor: config.colors.white,
    height: 120,
    justifyContent: "center",
    marginBottom: 10,
    width: 120,
  },
  circle: {
    alignSelf: "center",
    backgroundColor: config.colors.black,
    borderRadius: 55,
    height: 110,
    width: 110,
  },
  container: {
    alignItems: "center",
    backgroundColor: config.colors.primary,
    height: 200,
    justifyContent: "center",
    width: "100%",
  },
  detailsContainer: {
    backgroundColor: config.colors.light,
    flex: 1,
    padding: 20,
  },
  footer: {},
  icon: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default AccountScreen;
