import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Dimensions,TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import background from '../assets/background.jpg'
import goals from '../assets/goals.jpg'
import day from '../assets/day1.jpg'
import time from '../assets/time.jpg'
import count from '../assets/count.png'
import { useNavigation } from '@react-navigation/native';

const GoalScreen = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [timePerDay, setTimePerDay] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [currentField, setCurrentField] = useState('goal'); 
  const windowDimension = Dimensions.get('window');
  const [title, setTitle] = useState("Qui devi inserire l'obbiettivo che vuoi raggiungere")
  const [currentImage, setCurrentImage]= useState(goals)
  const navigation = useNavigation();

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

  const handleSaveGoal = () => {
   
    setCurrentField('deadline');
  };

  const handleSaveDeadline = () => {
  
    setCurrentField('timePerDay');
  };

  const handleSaveTimePerDay = () => {
    
    setCurrentField('timeOfDay');
  };

  const handleGoBack = () => {
    if (currentField === 'deadline') {
      setCurrentField('goal');
    } else if (currentField === 'timePerDay') {
      setCurrentField('deadline');
    } else if (currentField === 'timeOfDay') {
      setCurrentField('timePerDay');
    }
  };
  useEffect(() => {
    if (currentField === 'goal') {
      setTitle("Qui devi inserire l'obbiettivo che vuoi raggiungere");
    } else if (currentField === 'deadline') {
      setTitle("Qui devi dirmi entro quanto vorresti ragggiungere il tuo obbiettivo");
    } else if (currentField === 'timePerDay') {
      setTitle("Inserisci quanto tempo vorresti dedicarli in giornata");
    } else if (currentField === 'timeOfDay') {
      setTitle("Seleziona il momento del giorno in cui preferisci dedicarti");
    }
  }, [currentField]);
  useEffect(() => {
    if (currentField === 'goal') {
      setCurrentImage(goals);
    } else if (currentField === 'deadline') {
      setCurrentImage(count);
    } else if (currentField === 'timePerDay') {
      setCurrentImage(time);
    } else if (currentField === 'timeOfDay') {
      setCurrentImage(day);
    }
  }, [currentField]); 
  

  return (
    <ImageBackground
      style={{
        width: windowDimension.width,
        height: windowDimension.height,
        flex: 1
      }}
      source={background}
    >
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      >
        <View style={styles.spacer}></View>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={currentImage} style={styles.icon} />
        </View>
          <Text style={styles.title}>
            {title}
          </Text>
          {currentField === 'goal' && (
            <TextInput
              style={styles.input}
              placeholder="Nome dell'obiettivo"
              value={goal}
              onChangeText={(text) => setGoal(text)}
            />
          )}
          {currentField === 'deadline' && (
            <TextInput
              style={styles.input}
              placeholder="Data di scadenza"
              value={deadline}
              onChangeText={(text) => setDeadline(text)}
            />
          )}
          {currentField === 'timePerDay' && (
            <TextInput
              style={styles.input}
              placeholder="Tempo previsto al giorno (in minuti)"
              value={timePerDay}
              onChangeText={(text) => setTimePerDay(text)}
              keyboardType="numeric"
            />
          )}
          {currentField === 'timeOfDay' && (
            <Picker
              selectedValue={timeOfDay}
              onValueChange={(value) => setTimeOfDay(value)}
              style={styles.picker}
            >
              <Picker.Item label="Mattina" value="morning" />
              <Picker.Item label="Pomeriggio" value="afternoon" />
              <Picker.Item label="Sera" value="evening" />
            </Picker>
          )}
          {currentField === 'goal' && (
            <RoundedButton title="Salva" onPress={handleSaveGoal} color="coral" />
          )}
          {currentField === 'deadline' && (
            <RoundedButton title="Salva" onPress={handleSaveDeadline} color="coral" />
          )}
          {currentField === 'timePerDay' && (
            <RoundedButton title="Salva" onPress={handleSaveTimePerDay} color="coral" />
          )}
          {currentField === 'timeOfDay' && (
            <RoundedButton title="Continua" onPress={handleGoHome} color="coral" />
          )}
          <View style={styles.back}>
            {currentField !== 'goal' && (
              <RoundedButton title="Indietro" onPress={() => handleGoBack()} color="coral" />
            )}
          </View>
        
        
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    justifyContent: "flex-end",
   marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 100,
    marginHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white"
  },
  title: { 
    color: "white",
    marginVertical: 10,
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
    width: 270, 
    height: 170,
    borderRadius: 20
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20
    
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    width: "50%",
    marginLeft: 75
  },
  buttonText: {
    color: 'white',
    textAlign: "center"
  },
  picker: {
    height: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20
  
  },
  back: {
    marginTop:10
  },
  spacer: {
    height: 70
  },
  
    
});

export default GoalScreen;
