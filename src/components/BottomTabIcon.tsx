import React from "react";
import { View, Image } from "react-native";
import HomeIcon from "../assets/home.png";
import SettingIcon from "../assets/setting.png";
import ProfileIcon from "../assets/user.png";
import SearchIcon from "../assets/ai.png";

interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    let source: any;

    switch (route) {
      case "Home":
        source = HomeIcon;
        break;
      case "AI":
        source = SearchIcon;
        break;
      case "Setting":
        source = SettingIcon;
        break;
      case "Profile":
        source = ProfileIcon;
        break;
      default:
        break;
    }

    return (
      <Image
        source={source}
        style={{
          width: width,
          height: height,
          tintColor: isFocused ? "coral" : "#ffffff", // TintColor per cambiare il colore dell'immagine
        }}
      />
    );
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
