import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View className="space-y-2">
            <Text style={styles.title}>
                Jarvis
            </Text>
            <Text >
                The future is here, powerd by AI.
            </Text>
        </View>
        
    
        <View className="flex-row justify-center">
            <Image  
                source={require('../assets/welcome.png')}
                style={{height: wp(75), width: wp(75)}}
            />
        </View>
        
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
              <Text style={ styles.button}>
                Get Started
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around'
        
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:30
    },
    button: {
        fontWeight:'bold',
        fontSize: 30,
    }


})