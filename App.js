import React from "react";
import { SafeAreaView } from "react-native";
import FormScreen from "./src/screens/FormScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FormScreen />
    </SafeAreaView>
  );
}
