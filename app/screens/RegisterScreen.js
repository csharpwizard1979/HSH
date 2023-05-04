import React from "react";
import { View } from "react-native";

import * as Controls from "../components/controls";
import config from "../configs/config";
import { Routes } from "../components/navigation";

function RegisterScreen({ navigation }) {
  return (
    <View style={config.styles.screen}>
      <Controls.Button
        title="Register"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
    </View>
  );
}

export default RegisterScreen;
