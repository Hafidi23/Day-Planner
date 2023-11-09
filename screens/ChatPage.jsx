import React, { useState } from "react";
import { Button, Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ChatPage() {
    const navigation = useNavigation();
    const backHome = () => {
        navigation.navigate("Home")
    }
    const [data, setData] = useState([
        { type: 'bot', text: "Hello! Ask me anything." }
      ]);
      
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const [textInput, setTextInput] = useState('');


    const handleSend = async () => {
        try {
            const prompt = textInput;
            const response = await axios.post(apiUrl, {
                prompt: prompt,
                model: "gpt-3.5-turbo",
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            const text = response.data.choices[0].text;
            setData([...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text }]);
            setTextInput('');
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.log('Rate limit exceeded. Waiting before making the next request...');
            } else {
                console.error('Errore durante la richiesta:', error);
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Here you can ask the AI to set your day!</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${index}-${item.type}`}
                style={styles.body}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'You' : 'Bot'}</Text>
                    <Text style={styles.bot}>{item.text}</Text>
                    </View>
                )}
                />

            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={text => setTextInput(text)}
                placeholder="Ask me anything"
            />
            <TouchableOpacity
                style={styles.submit}
                onPress={handleSend}
            >
                <Text style={styles.buttonText}>Let's Go</Text>
            </TouchableOpacity>
            <Button
                title="Back home"
                onPress={backHome}
                color="coral"
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {},
    body: {
        flex: 1,
        width: '100%',
        margin: 10,
    },
    bot: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        height: 60,
        marginBottom: 10,
        borderRadius: 10,
    },
    submit: {
        backgroundColor: 'coral',
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    }
});
