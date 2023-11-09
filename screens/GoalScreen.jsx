import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GoalScreen = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [timePerDay, setTimePerDay] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [currentField, setCurrentField] = useState('goal'); 

  const handleSaveGoal = () => {
    // Qui puoi gestire il salvataggio dell'obiettivo nel tuo stato o database.
    // Dopo il salvataggio, passa al campo successivo.
    setCurrentField('deadline');
  };

  const handleSaveDeadline = () => {
    // Gestisci il salvataggio della data di scadenza.
    // Passa al campo successivo quando è stato compilato.
    setCurrentField('timePerDay');
  };

  const handleSaveTimePerDay = () => {
    // Gestisci il salvataggio del tempo previsto al giorno.
    // Passa al campo successivo quando è stato compilato.
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
  

  return (
    <View style={styles.container}>
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
        <Button title="Salva" onPress={handleSaveGoal} />
      )}
      {currentField === 'deadline' && (
        <Button title="Salva" onPress={handleSaveDeadline} />
      )}
      {currentField === 'timePerDay' && (
        <Button title="Salva" onPress={handleSaveTimePerDay} />
      )}
      {currentField !== 'goal' && (
        <Button title="Indietro" onPress={() => handleGoBack()} />

      )}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
   
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
});

export default GoalScreen;
