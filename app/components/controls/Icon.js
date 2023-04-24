import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import config from "../../configs/config";

function Icon({
  name,
  size = 40,
  backgroundColor = config.colors.primary,
  iconColor = config.colors.white,
  library = "MCI",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {library === "MI" ? (
        <MaterialIcons name={name} color={iconColor} size={size * 0.5} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          size={size * 0.5}
          color={iconColor}
        />
      )}
    </View>
  );
}

export default Icon;
