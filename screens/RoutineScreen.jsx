import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, KeyboardAvoidingView, Image, Animated, Button } from 'react-native';
import background from '../assets/background-1.jpg';
import routine from '../assets/routine.png';
import time from '../assets/time.jpg'
import { useNavigation } from '@react-navigation/native';

const RoutineScreen = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [currentField, setCurrentField] = useState('activity');
  const windowDimension = Dimensions.get('screen');
  const [inputAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [title, setTitle] = useState("Inserisci un'attività della tua routine");
  const [currentImage, setCurrentImage] = useState(routine);
  const navigation = useNavigation();

  const handleTransition = (nextField, direction) => {
    const destination = direction === 'forward' ? -Dimensions.get('window').width : Dimensions.get('window').width;

    Animated.timing(inputAnimation.x, {
      toValue: destination,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setCurrentField(nextField);
      inputAnimation.setValue({ x: 0, y: 0 });
    });
  };
  const handleGoBack = () => {
    if (currentField === 'activity') {
      handleTransition('activity', 'backward');
    } else if (currentField === 'duration') {
      handleTransition('activity', 'backward');
    }
  }

  const handleGoHome = () => {
    navigation.navigate('TabNavigator');
  };

  const RoundedButton = ({ title, onPress, color }) => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const resetAnimation = () => {
    inputAnimation.setValue({ x: 0, y: 0 });
  };

  const handleSaveActivity = () => {
    handleTransition('duration', 'forward');
  };

  const handleSaveDuration = () => {
  
    handleTransition('summary', 'forward');
  };

  useEffect(() => {
    if (currentField === 'activity') {
      setTitle("Inserisci un'attività della tua routine");
    } else if (currentField === 'duration') {
      setTitle("Inserisci la durata prevista (in minuti)");
    } 
  }, [currentField]);

  useEffect(() => {
    if (currentField === 'activity') {
      setCurrentImage(routine);
    } else if (currentField === 'duration') {
      setCurrentImage(time); 
    } 
  }, [currentField]);

 

  return (
    <ImageBackground
      style={{
        resizeMode: "cover",
        flex: 1,
      }}
      source={background}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
      >
        <View style={styles.spacer}></View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                { translateX: inputAnimation.x },
                { translateY: inputAnimation.y },
              ],
            },
          ]}
        >
          <Text style={styles.title}>
            {title}
          </Text>
          <View style={styles.imageContainer}>
            <Image source={currentImage} style={styles.icon} />
          </View>
          
          {currentField === 'activity' && (
            <TextInput
              style={styles.input}
              placeholder="Nome dell'attività"
              value={activity}
              onChangeText={(text) => setActivity(text)}
              onFocus={resetAnimation}
            />
          )}
          {currentField === 'duration' && (
            <TextInput
              style={styles.input}
              placeholder="Durata prevista (in minuti)"
              value={duration}
              onChangeText={(text) => setDuration(text)}
              keyboardType="numeric"
              onFocus={resetAnimation}
            />
          )}
          {currentField === 'activity' && (
            <RoundedButton title="Salva" onPress={handleSaveActivity} color="coral" />
          )}
          {currentField === 'duration' && (
            <RoundedButton title="Fatto" onPress={handleSaveDuration && handleGoHome} color="coral" />
          )}
          <View style={styles.back}>
            {currentField !== 'activity' && (
              <RoundedButton title="Indietro" onPress={() => handleGoBack()} color="coral" />
            )}
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    marginBottom: windowHeight * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginVertical: windowHeight * 0.001,
    marginHorizontal: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    color: "white",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    
  
    
  },
  icon: {
    width: windowWidth *0.6,
    height: windowHeight *0.25,
    borderRadius: 20,
    marginBottom:20
  },
  
  input: {
    height: 40,
    borderColor: 'coral',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20
    
  },
  button: {
    borderRadius: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.05,
    margin: windowWidth * 0.01,
    width: '50%',
    marginLeft: windowWidth * 0.2,
  },
  buttonText: {
    color: 'white',
    textAlign: "center"
  },
  back: {
    marginTop:10
  },
  spacer: {
    height: '25%'
  },
  
});

export default RoutineScreen;