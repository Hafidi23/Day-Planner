import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { useNavigation } from "@react-navigation/native";
import ChatPage from "./ChatPage";

export default function HomeScreen() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const navigation = useNavigation();
  
  const goToIa = () => {
    navigation.navigate(ChatPage);
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => [
      { text: text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  return (  
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
          <View style={styles.content}>
            <Header />
            <View style={styles.Add}>
            <AddTodo submitHandler={submitHandler} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          style={styles.list}
        />
        <View style={styles.containerButton}>
          <Button
            title='check the ia'
            onPress={goToIa}
            color='coral'     
          />
        </View>
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
  containerButton: {
    alignItems: 'center',
    marginBottom: 10,
  }
});