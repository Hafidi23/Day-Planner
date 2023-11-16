import React, { useState } from "react";
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { useNavigation } from "@react-navigation/native";
import ChatPage from "./ChatPage";
import background from "../assets/background-1.jpg"

export default function HomeScreen() {
  const [todos, setTodos] = useState({
    morning: [
      { text: "buy coffee", key: "1" },
      // ... altri TodoItem della mattina
    ],
    afternoon: [
      { text: "create an app", key: "2" },
      // ... altri TodoItem del pomeriggio
    ],
    evening: [
      { text: "play on the switch", key: "3" },
      // ... altri TodoItem della sera
    ],
  });
  const navigation = useNavigation();
  


  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return {
        morning: prevTodos.morning.filter((todo) => todo.key !== key),
        afternoon: prevTodos.afternoon.filter((todo) => todo.key !== key),
        evening: prevTodos.evening.filter((todo) => todo.key !== key),
      };
    });
  };

  const submitHandler = ({ text, time, selectedTimeOfDay }) => {
    setTodos((prevTodos) => {
      return {
        ...prevTodos,
        [selectedTimeOfDay]: [
          { text, time, key: Math.random().toString() },
          ...prevTodos[selectedTimeOfDay], 
        ].filter((todo) => !!todo), 
      };
    });
  };
  
  const data = [
    { text: 'Mattina', data: todos.morning },
    { text: 'Pomeriggio', data: todos.afternoon },
    { text: 'Sera', data: todos.evening },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover"
               }}
            source={background}
          >
          <Header />
          <View style={styles.Add}>
            <AddTodo submitHandler={submitHandler} />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <>
                <Text style={styles.listHeader}>{item.text}</Text>
                <FlatList
                  data={item.data}
                  renderItem={({ item }) => (
                    <TodoItem item={item} pressHandler={() => pressHandler(item.key)} />
                  )}
                  keyExtractor={(item) => item.key}
                />
              </>
            )}
            />
            </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  Add: {
    alignItems:"center"
  },
  list: {
    marginTop: 20,
  },
  listHeader: {
    color: "coral",
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 8,
    marginTop: 16,
  },
});