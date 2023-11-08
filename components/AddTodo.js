import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Modal, Text, TouchableWithoutFeedback } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const changeHandler = (val) => {
    setText(val);
  }

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const handlePressOutside = () => {
    closeModal();
  }

  return (
    <View style={styles.container}>
      <View style={styles.plusButtonContainer}>
        <TouchableOpacity style={styles.plusButton} onPress={openModal}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text> 
      </View>
      

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={changeHandler}
              />
              <Button onPress={() => {
                submitHandler(text);
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
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 4,
    width: 40,
    height: 40,
    marginTop: 10
  },
  plusButtonText: {
    fontSize: 28,
    fontWeight:"bold",
    color: "coral",
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 4,
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
    },
    plusButtonContainer: {
        alignItems: "center",
      },
})