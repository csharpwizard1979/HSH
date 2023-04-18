import React from "react";
import { Text } from "react-native";

import styles from "../../configs/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.baseText, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
