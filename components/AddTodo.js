import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Text, TouchableWithoutFeedback, Platform, Button, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');
  const [time, setTime] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState ("morning");

  const changeHandler = (val) => {
    setText(val);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePressOutside = () => {
    closeModal();
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setDatePickerVisibility(Platform.OS === 'ios');
    setTime(currentDate);
  };

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.plusButtonContainer}>
        <TouchableOpacity style={styles.plusButton} onPress={openModal}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={changeHandler}
              />
              <TouchableOpacity onPress={toggleDatePicker}>
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
              <Picker
                selectedValue={selectedTimeOfDay}
                onValueChange={(itemValue) => setSelectedTimeOfDay(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label='Morning' value={"morning"} />
                <Picker.Item label='Afternoon' value={"afternoon"} />
                <Picker.Item label='Evening' value={"evening"} />
              </Picker>
              <Button onPress={() => {
                submitHandler({ text, time, selectedTimeOfDay });
                closeModal();
              }} title='Add Todo' color='coral' />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusButton: {
    borderColor: "white",
    alignItems: "center",
    borderStyle: "dashed",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 4,
    width: 60,
    height: 55,
    marginTop: 20
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 16,
  },
  plusButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "coral",
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 4,
  },
  dateText: {
    color: "coral",
    fontSize: 16,
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20
  },
  add: {
    color: "coral",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10
  },
  plusButtonContainer: {
    alignItems: "center",
  },
});
