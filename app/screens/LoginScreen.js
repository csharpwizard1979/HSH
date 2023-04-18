import React from "react";
import { View } from "react-native";

import * as Controls from "../components/controls";
import config from "../configs/config";

function LoginScreen({ navigation }) {
  return (
    <View style={config.styles.screen}>
      <Controls.Button
        title="Login"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default LoginScreen;
