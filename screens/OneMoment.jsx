import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import sunset from "../assets/sunset-back.jpg";
import aiImage from "../assets/ai-image.jpeg";

const OneMoment = () => {

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
              Hey amico! Sappiamo che fornire tutti questi dati può sembrare noioso, ma è come se ci stessi dando superpoteri per rendere la tua giornata fantastica! Ci mancano solo alcuni dettagli per personalizzare al massimo la tua esperienza. Aiutaci a darti il massimo supporto possibile.
            </Text>
            <RoundedButton title="Continua" color="coral" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

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
    width: 270,
    height: 170,
    borderRadius: 15,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    width: 140,
  },
  buttonText: {
    color: 'white',
    textAlign: "center",
  },
});

export default OneMoment;