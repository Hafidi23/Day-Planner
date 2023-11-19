import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TabNavigator from "./src/navigators/BottomTabNavigator";
import ChatPage from "./screens/ChatPage";
import IntroductionScreen from "./screens/IntroductionScreen";
import GoalScreen from "./screens/GoalScreen";
import OneMoment from "./screens/OneMoment";
import RoutineScreen from "./screens/RoutineScreen";
import LoginAnimated from "./screens/LoginAnimated";
import SettingPage from "./screens/SettingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginAnimated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
