import React from "react";

import AppText from "../AppText";
import config from "../../configs/config";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={config.styles.errorText}>{error}</AppText>;
}

export default ErrorMessage;
