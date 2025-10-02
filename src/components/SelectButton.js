import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SelectButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 5,
  },
  selected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  text: { fontSize: 14 },
  textSelected: { color: "#fff", fontWeight: "bold" },
});
