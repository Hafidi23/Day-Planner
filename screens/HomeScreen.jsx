import React, { useState } from "react";
import { ScrollView, FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { useNavigation } from "@react-navigation/native";
import ChatPage from "./ChatPage";

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
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = ({ text, time, selectedTimeOfDay }) => {
    setTodos((prevTodos) => {
      return {
        ...prevTodos,
        [selectedTimeOfDay]: [
          { text, time, key: Math.random().toString() },
          ...prevTodos[selectedTimeOfDay],
        ],
      };
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            <Header />
            <View style={styles.Add}>
              <AddTodo submitHandler={submitHandler} />
            </View>
          </View>
        </TouchableWithoutFeedback>
  
        {/* Lista della mattina */}
        <FlatList
          data={todos.morning}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          style={styles.list}
          ListHeaderComponent={<Text style={styles.listHeader}>Morning</Text>}
        />
  
        {/* Lista del pomeriggio */}
        <FlatList
          data={todos.afternoon}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          style={styles.list}
          ListHeaderComponent={<Text style={styles.listHeader}>Afternoon</Text>}
        />
  
        {/* Lista della sera */}
        <FlatList
          data={todos.evening}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          style={styles.list}
          ListHeaderComponent={<Text style={styles.listHeader}>Evening</Text>}
        />
        </ScrollView>
      </View>
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
   
    textAlign: "center"
  },
});