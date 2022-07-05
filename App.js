import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

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
      <TodoInput
        inputTodo={inputTodo}
        todoInputHandler={todoInputHandler}
        addTodoHandler={addTodoHandler}
      />
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            //itemData is metadata
            //itemData.item is the data of a renderedItem
            return <TodoItem itemData={itemData} />;
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
          alwaysBounceVertical={false}
        />
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
  todosContainer: {
    flex: 11,
    marginTop: 24,
    borderColor: "transparent",
    borderTopColor: "#cccccc",
    borderWidth: 1,
  },
});
