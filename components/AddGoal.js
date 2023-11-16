import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddGoal = () => {
    const navigation = useNavigation();
    const Goal = () => {
        navigation.navigate('Goal')
    }
  return (
    <View style={styles.plusButtonContainer}>
        <TouchableOpacity style={styles.plusButton} onPress={Goal} >
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.add}>Add Goal</Text>
      </View>
  )
}



const styles = StyleSheet.create({
    plusButton: {
        borderColor: "white",
        alignItems: "center",
        borderStyle: "dashed",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 4,
        width: 60,
        height: 55,
        marginTop: 20,
        marginLeft: 10
    },
    plusButtonText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "coral",
    },
    plusButtonContainer: {
        alignItems: "center",
    },
    add: {
        color: "coral",
        fontWeight: "600",
        fontSize: 14,
        marginTop: 8,
        marginBottom: 10
    },
});
export default AddGoal;