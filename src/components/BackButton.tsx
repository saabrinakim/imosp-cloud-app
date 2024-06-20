import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: any;
  styles: any;
};

export default function BackButton(props: Props) {
  const handleClose = () => {
    props.navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleClose} style={props.styles}>
      <Ionicons name="chevron-back" size={26} color="black" />
    </TouchableOpacity>
  );
}
