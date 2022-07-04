import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setInputTodo(enteredText);
  };

  const addTodoHandler = () => {
    setTodos((currentTodos) => [...currentTodos, inputTodo]);
    //reset todo text input
    setInputTodo("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What do you want to do?"
          value={inputTodo}
          onChangeText={todoInputHandler}
        />
        <Button title="Add this" onPress={addTodoHandler} />
      </View>
      <View style={styles.todosContainer}>
        <ScrollView>
          {todos.map((todo, index) => (
            <View style={styles.todoItemContainer} key={index}>
              <Text style={styles.todoItemText}>{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 56,
    paddingHorizontal: 16,
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  todosContainer: {
    flex: 11,
    marginTop: 24,
    borderColor: "transparent",
    borderTopColor: "#cccccc",
    borderWidth: 1,
  },
  todoItemContainer: {
    backgroundColor: "#3a3b3c",
    justifyContent: "center",
    height: 40,
    fontSize: 16,
    marginTop: 4,
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
  },
  todoItemText: {
    color: "white",
  },
});
