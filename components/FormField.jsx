import Icon from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  keyboardType,
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-slate-200">{title || Label}</Text>

      <View className="w-full h-14 flex-row items-center space-x-2 bg-slate-800 rounded-xl border border-slate-700 focus:border-lime-500 focus:bg-slate-950 overflow-hidden">
        <TextInput
          className="flex-1 w-full h-full text-white text-base px-4"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPass}
        />

        {title === "Password" && (
          <TouchableOpacity
            className="w-14 h-14 items-center justify-center"
            onPress={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <Icon name="eye" size={20} color={"white"} opacity={0.5} />
            ) : (
              <Icon name="eye-off" size={20} color={"white"} opacity={0.5} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
