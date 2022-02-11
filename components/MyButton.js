import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function MyButton({ title, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 40,
    borderRadius: 25,
  },

  text: {
    fontSize: 30,
    color: colors.white,
  },
});
