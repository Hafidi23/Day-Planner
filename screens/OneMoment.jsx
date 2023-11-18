import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
import sunset from "../assets/background-1.jpg";
import aiImage from "../assets/ai-image.jpeg";
import { useNavigation } from '@react-navigation/native';

const OneMoment = () => {
  const navigation = useNavigation();
  const RoutinePage = () => {
    navigation.navigate('Routine')
  }

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

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: "cover"
        }}
        source={sunset}
      >
        <View style={styles.centeredView}>
          <View style={styles.OneMomentContainer}>
            <View style={styles.imageContainer}>
              <Image source={aiImage} style={styles.icon} />
            </View>
            <Text style={styles.OneMomentText}>
            Hey amico! Sappiamo che fornire tutti questi dati può sembrare noioso,Stiamo migliorando la tua giornata grazie alla nostra intelligenza artificiale. Ci servono solo pochi dettagli sulla tua routine (lavoro, scuola o faccende personali) per personalizzare al meglio l'esperienza.
            </Text>
            <RoundedButton title="Continua" color="coral" onPress={RoutinePage} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  OneMomentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    alignItems: "center",
  },
  OneMomentText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 15,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: windowWidth *0.7,
    height: windowHeight *0.25,
    borderRadius: 15,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: windowHeight* 0.001,
    width: windowWidth* 0.4,
  },
  buttonText: {
    color: 'white',
    textAlign: "center",
  },
});

export default OneMoment;