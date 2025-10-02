import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabled : styles.enabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled ? styles.textDisabled : styles.textEnabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  enabled: {
    backgroundColor: "#4CAF50",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textEnabled: {
    color: "#fff",
  },
  textDisabled: {
    color: "#666",
  },
});
