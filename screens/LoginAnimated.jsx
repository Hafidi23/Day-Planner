import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Firebase_Auth, Firebase_App } from "../App";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Inserisci un indirizzo email valido")
      .required("L'email è obbligatoria"),
    password: Yup.string().required("La password è obbligatoria"),
  });
  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      if (!isRegistering) {
      }
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height - 60, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };

  const handleAuthentication = async () => {
    setLoading(true);

    try {
      if (isRegistering) {
        const response = await createUserWithEmailAndPassword(
          Firebase_Auth,
          formValues.email,
          formValues.password
        );
        console.log(response);
        const response1 = await updateProfile(Firebase_Auth.currentUser, {
          displayName: fullName,
        });

        console.log(response1);
      } else {
        const response = await signInWithEmailAndPassword(
          Firebase_Auth,
          formValues.email,
          formValues.password
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("../assets/background.jpg")}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <TouchableOpacity onPress={() => (imagePosition.value = 1)}>
            <Text>X</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <View style={styles.imageContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Email"
                value={formValues.email}
                placeholderTextColor="black"
                onChangeText={(text) => {
                  setFormValues({ ...formValues, email: text });
                  setErrors({ ...errors, email: undefined });
                }}
                style={styles.textInput}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              {isRegistering && (
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor="black"
                  onChangeText={(text) => setFullName(text)}
                  style={styles.textInput}
                />
              )}
              <TextInput
                placeholder="Password"
                value={formValues.password}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setFormValues({ ...formValues, password: text });
                  setErrors({ ...errors, password: undefined });
                }}
                style={styles.textInput}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </KeyboardAvoidingView>
          </View>
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable
              onPress={() => {
                formButtonScale.value = withSequence(
                  withSpring(1.5),
                  withSpring(1)
                );
                handleSubmit();
                handleAuthentication();
              }}
            >
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
              {loading && (
                <ActivityIndicator style={styles.activityIndicator} />
              )}
            </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "coral",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: "coral",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginLeft: width * 0.1,
  },
});
