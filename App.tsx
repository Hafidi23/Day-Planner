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
import SettingPage from "./screens/SettingScreen";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { Firebase_Auth, Firebase_App } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator screenOptions={{ headerShown: false }}>
      <InsideStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animation: "slide_from_bottom" }}
      />
      <InsideStack.Screen
        name="Chat"
        component={ChatPage}
        options={{ animation: "slide_from_bottom" }}
      />
      <InsideStack.Screen
        name="Goal"
        component={GoalScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <InsideStack.Screen
        name="OneMoment"
        component={OneMoment}
        options={{ animation: "slide_from_bottom" }}
      />
      <InsideStack.Screen
        name="Routine"
        component={RoutineScreen}
        options={{ animation: "slide_from_bottom" }}
      />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Firebase_Auth, (user) => {
      setUser(user);
    });

    // Pulizia del sottoscrizione
    return () => unsubscribe();
  }, []);

  // Aggiungi questa condizione per assicurarti che Firebase sia inizializzato prima di visualizzare la navigazione
  if (!Firebase_App) {
    return null; // o mostra uno spinner di caricamento, a seconda delle tue esigenze
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginAnimated} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
