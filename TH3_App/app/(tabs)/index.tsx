import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text} from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [displayed, setDisplayed] = useState("");


  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: "#ffffff" }]}
        placeholder="Type here...."
        value={text}
        onChangeText={setText}
      />

      <Button  onPress={() => setDisplayed(text)}>Press</Button>
      <Text style={styles.output}>{displayed}</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: "#ffffffff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    
  },
  output: {
    marginTop: 12,
    color: "#ffffff",
    fontSize: 16,
  },
});