import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, AccountNavigator } from "./app/components/navigation";
import AppTheme from "./app/components/navigation/AppTheme";

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <AccountNavigator />
    </NavigationContainer>
  );
}
