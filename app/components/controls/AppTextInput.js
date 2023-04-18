import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import config from "../../configs/config";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[config.styles.pickerContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={config.styles.pickerIcon}
        />
      )}
      <TextInput
        placeholderTextColor={config.colors.medium}
        style={config.styles.baseText}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;
