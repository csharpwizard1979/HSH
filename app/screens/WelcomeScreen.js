import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import config from "../configs/config";
import { AppText, Button } from "../components/controls";
import { Routes } from "../components/navigation";

function WelcomeScreen({ navigation }) {
  const handleLogin = () => navigation.navigate(Routes.LOGIN);
  const handleRegister = () => navigation.navigate(Routes.REGISTER);

  return (
    <View style={[config.styles.screen, config.styles.baseContainer]}>
      <AntDesign name="home" size={60} color={config.colors.primary} />
      <AppText style={styles.text}>Home Suite Home</AppText>
      <View style={styles.btnContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Register"
          onPress={handleRegister}
          colorOveride="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    bottom: 1,
    position: "absolute",
    padding: 20,
    width: "75%",
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: config.colors.primary,
  },
});

export default WelcomeScreen;
