import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatPage() {
    const navigation = useNavigation();
    const backHome = () => {
        navigation.navigate("Home")
    }
    return (
        
        <View>
            <Text>Here you can ask to the IA to set your day!</Text>
            <Button style={styles.button}
                title="Back home"
                onPress={backHome}
                color='coral'
            />
        </View>
    );

};

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        bottom: 0,
}

})