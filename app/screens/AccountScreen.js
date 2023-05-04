import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import config from "../configs/config";
import { AppText, Icon } from "../components/controls";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Routes } from "../components/navigation";

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
        <AppText style={styles.title}>My Account</AppText>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.notify}>
          <Icon name={config.icons.notifications} library="MI" />
          <AppText style={styles.text}>Notifications</AppText>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(Routes.WELCOME)}
          >
            <Icon name="logout" />
          </TouchableWithoutFeedback>
          <AppText style={styles.text}>Log Out</AppText>
        </View>
      </View>
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
  footer: {
    backgroundColor: config.colors.light,
  },
  footerRow: {
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  icon: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  notify: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    marginLeft: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
  },
});

export default AccountScreen;
