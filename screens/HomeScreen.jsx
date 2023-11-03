import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard,SafeAreaView } from "react-native";
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
    navigation.navigate(ChatPage)
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
    <SafeAreaView>
    <View>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
            <Header />
            
          <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      
      </TouchableWithoutFeedback>
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
    marginTop:20,
   
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  containerButton: {
    alignItems: 'center',
    marginBottom: 10,
    
  }
});