import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, AccountNavigator } from "./app/components/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
}
