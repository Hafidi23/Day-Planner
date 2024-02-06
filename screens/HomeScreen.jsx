import React, { useState, useRef } from "react";
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ImageBackground,
  Modal,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import AddButton from "../components/AddButton";
import background from "../assets/background-1.jpg";
import DateTimePicker from "@react-native-community/datetimepicker";

const getPeriodOfDay = (selectedHour) => {
  if (selectedHour >= 5 && selectedHour < 12) {
    return "morning";
  } else if (selectedHour >= 12 && selectedHour < 19) {
    return "afternoon";
  } else {
    return "evening";
  }
};

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [todos, setTodos] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const changeHandler = (val) => {
    setText(val);
  };

  const [addTodoModalVisible, setAddTodoModalVisible] = useState(false);
  const modalRef = useRef(null);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return {
        morning: prevTodos.morning.filter((todo) => todo.key !== key),
        afternoon: prevTodos.afternoon.filter((todo) => todo.key !== key),
        evening: prevTodos.evening.filter((todo) => todo.key !== key),
      };
    });
  };

  const onAddTodo = ({ text, time }) => {
    const periodOfDay = getPeriodOfDay(time.getHours());
    setTodos((prevTodos) => {
      return {
        ...prevTodos,
        [periodOfDay]: [
          { text, time, key: Math.random().toString() },
          ...prevTodos[periodOfDay],
        ].filter((todo) => !!todo),
      };
    });
    setAddTodoModalVisible(false);
  };

  const openModal = () => {
    setAddTodoModalVisible(true);
  };

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setDatePickerVisibility(Platform.OS === "ios");
    setTime(currentDate);
  };

  const data = [
    { text: "Mattina", data: todos.morning },
    { text: "Pomeriggio", data: todos.afternoon },
    { text: "Sera", data: todos.evening },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover",
            }}
            source={background}
          >
            <Header />
            <SectionList
              sections={data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={() => pressHandler(item.key)}
                />
              )}
              renderSectionHeader={({ section: { text } }) => (
                <Text style={styles.listHeader}>{text}</Text>
              )}
            />
            <AddButton
              setAddTodoModalVisible={() => setAddTodoModalVisible(true)}
              onAddTodo={onAddTodo}
              modalRef={modalRef}
              openModal={openModal}
            />
            <Modal
              transparent={true}
              visible={addTodoModalVisible}
              animationType="slide"
              onRequestClose={() => setAddTodoModalVisible(false)}
              ref={modalRef}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.title}>
                    Scrivi le cose che devi fare:{" "}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="New Todo..."
                    onChangeText={changeHandler}
                  />
                  <Text style={styles.title}>Seleziona L'ora:</Text>
                  <TouchableOpacity
                    onPress={toggleDatePicker}
                    style={styles.dateContainer}
                  >
                    <Text style={styles.dateText}>Pick Date</Text>
                  </TouchableOpacity>
                  {isDatePickerVisible && (
                    <DateTimePicker
                      value={time}
                      mode="time"
                      display="default"
                      onChange={onChange}
                    />
                  )}
                  <Button
                    onPress={() => {
                      onAddTodo({
                        text: text,
                        time: time,
                      });
                    }}
                    title="Add Todo"
                    color="#EBAB70"
                  />
                  <View style={styles.buttonContainer}>
                    <Button
                      onPress={() => setAddTodoModalVisible(false)}
                      title="Close"
                      color="#EBAB70"
                    />
                  </View>
                </View>
              </View>
            </Modal>
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
  listHeader: {
    color: "#FF8800",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 8,
    marginTop: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 5,
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
    fontSize: 16,
  },
  modalContent: {
    width: 300,
    backgroundColor: "coral",
    borderRadius: 20,
    padding: 20,
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 25,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginTop: 10,
  },
  dateText: {
    color: "white",
    fontSize: 24,
    marginBottom: 8,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "white",
    width: "50%",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
