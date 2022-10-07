import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import * as Speech from "expo-speech";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [phrase, setPhrase] = useState();

  const speakUp = () => {
    if (phrase !== undefined) {
      Speech.speak(phrase, { language: "fi" });
    } else {
      Alert.alert("Add phrase to speak");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MaterialCommunityIcons
        name="text-to-speech"
        style={styles.icon}
        size={140}
        color="navy"
      />
      <TextInput
        style={styles.input}
        placeholder="Kirjoita teksti tähän"
        onChangeText={(text) => setPhrase(text)}
      />
      <Pressable style={styles.button} onPress={speakUp}>
        <Text style={styles.buttonText}>Paina kuunnellaksesi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 120,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 15,
    width: "90%",
    borderRadius: 100,
    backgroundColor: "navy",
  },
  input: {
    height: 50,
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "navy",
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    fontSize: 18,
  },
  icon: {
    margin: 20,
  },
});
