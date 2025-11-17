import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text} from "react-native";

export default function Bai2() {
    const [count, setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bạn đã nhấn {count} lần</Text>
            <Button onPress={() => setCount(count +1)}>Click me</Button>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text:{
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
  }
    
});