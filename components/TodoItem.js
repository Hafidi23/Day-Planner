import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

export default function TodoItem({ item, pressHandler }) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <SwipeListView
      data={[item]}
      keyExtractor={(item) => item.key}
      leftOpenValue={75}
      previewRowKey={item.key}
      previewOpenValue={75}
      renderItem={(rowData, rowMap) => (
        <TouchableOpacity activeOpacity={1} onPress={handlePress}>
          <View style={[styles.item, { height: expanded ? 150 : 70 }]}>
            <View style={styles.itemTextView}>
              <Text style={styles.itemText}>
                {expanded ? item.text : (item.text.length > 30 ? `${item.text.substring(0, 30)}...` : item.text)}
              </Text>
            </View>
            <View style={styles.containerIcon}>
              {expanded && (
                <TouchableOpacity>
                  <MaterialIcons name="edit" size={30} color="white" style={styles.icon} />
                  </TouchableOpacity>
            )}
            {item.time && (
              <Text style={styles.timeText}>
                {item.time.toLocaleTimeString()}
              </Text>
              )}
              </View>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "#D17442",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 10,
  },
  itemTextView: {
   
  
  },
  containerIcon: {
    flexDirection: "column"
  },
  icon: {
    marginRight: 10,
    marginBottom:10
  },
  itemText: {
    flex:1,
    marginLeft: 10,
    fontSize: 18,
    color: "white",
    textAlignVertical: "top",
    
  },
  timeText: {
    fontSize: 10,
    color: "#F0F7F4",
    marginTop:20
  },
  deleteContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 70,
    borderRadius: 10,
    marginLeft: 10,
  },
});
