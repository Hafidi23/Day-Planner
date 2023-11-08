import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

export default function Todoitem({ item, pressHandler }) {
  return (
    <SwipeListView
      data={[item]}
      keyExtractor={(item) => item.key}
      leftOpenValue={75}  
      previewRowKey={item.key}
      previewOpenValue={75}  
      renderItem={(rowData, rowMap) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      )}
      renderHiddenItem={(rowData, rowMap) => (
        <View style={styles.deleteContainer}>
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <MaterialIcons name="delete" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}

    />
    
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    marginLeft: 10,
    fontSize:20
  },
  deleteContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 55,
    borderRadius: 10
  },
});
