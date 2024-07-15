import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-lime-500 h-12 px-6 rounded-full items-center justify-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-slate-900 text-lg font-semibold ${textStyle}`}>
        {title || "Button"}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
