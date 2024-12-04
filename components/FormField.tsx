import {
  View,
  Text,
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

// Define props for CustomButton
type FormFieldProps = {
  title: string;
  value: string;
  placeHolder: string;
  otherStyles: string;
  keyboardType?: KeyboardTypeOptions;
  handleChangeText: (text: string) => void;
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity
            className="p-2"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
