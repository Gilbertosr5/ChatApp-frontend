import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Conversation from "./src/screens/Conversation";
import Home from "./src/screens/Home";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#FFFFFF",
        }}
      >
        <Stack.Screen
          name="ChatApp"
          component={Home}
          options={{
            title: "ChatApp",
            headerStyle: {
              backgroundColor: "#1E1E1E",
            },
            headerTitleStyle: {
              flex: 1,
              textAlign: "center",
              color: "white",
              marginTop: 20,
              fontSize: 27,
            },
            headerTitleContainerStyle: {
              width: "100%",
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={{
            headerStyle: {
              backgroundColor: "#1E1E1E",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 27,
            },
            headerTitleContainerStyle: {
              width: "100%",
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
    </NavigationContainer>
  );
}
