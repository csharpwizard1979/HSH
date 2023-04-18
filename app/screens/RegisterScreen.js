import React from "react";
import { View } from "react-native";

import * as Controls from "../components/controls";
import config from "../configs/config";

function RegisterScreen({ navigation }) {
  return (
    <View style={config.styles.screen}>
      <Controls.Button
        title="Register"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default RegisterScreen;
