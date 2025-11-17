import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai4() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (!task.trim()) {
      setError("Bạn chưa nhập công việc!");
      return;
    }

    setTodos([...todos, task]);
    setTask("");
    setError("");
  };

  const removeTask = (index) => {
    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={[styles.input, { color: "#ffffff" }]}
        placeholder="Nhập công việc..."
        value={task}
        onChangeText={setTask}
      />
      
      <Button onPress={addTask} >Thêm việc</Button>

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <View style={{ marginTop: 20 }}>
        {todos.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => removeTask(index)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

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
    borderColor: "#fbfbfbff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  item: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
