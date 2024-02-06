import {
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const AddButton = ({ openModal }) => {
  const secondValue = useSharedValue(30);
  const thirdValue = useSharedValue(30);
  const secondWidth = useSharedValue(60);
  const thirdWidth = useSharedValue(60);
  const isOpen = useSharedValue(false);
  const opacity = useSharedValue(0);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0)
  );
  const navigation = useNavigation();
  const AddGoal = () => {
    navigation.navigate("Goal");
  };

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };

    if (isOpen.value) {
      secondWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          secondValue.value = withDelay(50, withTiming(30, config));
        }
      });
      thirdWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          thirdValue.value = withDelay(100, withTiming(30, config));
        }
      });
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);
      secondWidth.value = withDelay(1100, withSpring(200));
      thirdWidth.value = withDelay(1000, withSpring(200));
      opacity.value = withDelay(1200, withSpring(1));
    }

    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const secondWidthStyle = useAnimatedStyle(() => {
    return {
      width: secondWidth.value,
    };
  });

  const thirdWidthStyle = useAnimatedStyle(() => {
    return {
      width: thirdWidth.value,
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      bottom: secondValue.value,
      transform: [{ scale: scale }],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      bottom: thirdValue.value,
      transform: [{ scale: scale }],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * 45}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.contentContainer, thirdIcon, thirdWidthStyle]}
      >
        <TouchableOpacity onPress={() => openModal()}>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/edit.png")} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <Animated.Text style={[styles.text, opacityText]}>
          New Todo...
        </Animated.Text>
      </Animated.View>

      <Animated.View
        style={[styles.contentContainer, secondIcon, secondWidthStyle]}
      >
        <TouchableOpacity onPress={AddGoal}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/goal1.png")}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <Animated.Text style={[styles.text, opacityText]}>
          New Goal
        </Animated.Text>
      </Animated.View>
      <Pressable
        style={styles.contentContainer}
        onPress={() => {
          handlePress();
        }}
      >
        <Animated.View style={[styles.iconContainer, plusIcon]}>
          <Image
            source={require("../assets/PlusIcon.png")}
            style={styles.icon}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default AddButton;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "coral",
    position: "absolute",
    bottom: 90,
    right: 15,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 35,
    height: 35,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
