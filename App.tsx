import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TabNavigator from "./src/navigators/TabNavigator";
import ChatPage from "./screens/ChatPage";
import IntroductionScreen from "./screens/IntroductionScreen";
import GoalScreen from "./screens/GoalScreen";
import OneMoment from "./screens/OneMoment";
import RoutineScreen from "./screens/RoutineScreen";
import SignupPage from "./screens/SignupPage";
import LoginPage from "./screens/LoginPage";
import LoginAnimated from "./screens/LoginAnimated";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginAnim"
          component={LoginAnimated}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Goal"
          component={GoalScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="OneMoment"
          component={OneMoment}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Routine"
          component={RoutineScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
