import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CircularTab from "./src/CircularTabView/CircularTab";
import CustomSwipeModal from "./src/CustomSwipeModal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Custom Swipe Modal" component={CustomSwipeModal} />
        <Stack.Screen name="Circular Tab" component={CircularTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
