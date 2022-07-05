import { useEffect, useState } from "react";
import { StyleSheet, View, Button, FlatList, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const startAddTodoHandler = () => {
    setModalIsVisible(true);
  };

  const todoInputHandler = (enteredText) => {
    setInputTodo(enteredText);
  };

  const cancelModalHandler = () => {
    setModalIsVisible(false);
  };

  const addTodoHandler = () => {
    setTodos((currentTodos) => [...currentTodos, inputTodo]);
    //reset todo text input
    setInputTodo("");
    cancelModalHandler();
  };

  const deleteTodoHandler = (i) => {
    setTodos((todos) => {
      return todos.filter((todo, index) => index !== i);
    });
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require("./assets/images/todo-100.png")}
          />
          <Text style={styles.bannerText}>
            Todo Application with React Native
          </Text>
        </View>
        <Button
          color="#152238"
          title="Add New Goal"
          onPress={startAddTodoHandler}
        />
        <TodoInput
          inputTodo={inputTodo}
          todoInputHandler={todoInputHandler}
          addTodoHandler={addTodoHandler}
          cancelModalHandler={cancelModalHandler}
          modalIsVisible={modalIsVisible}
        />
        <View style={styles.todosContainer}>
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              //itemData is metadata
              //itemData.item is the data of a renderedItem
              return (
                <TodoItem
                  itemData={itemData}
                  deleteTodoHandler={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 56,
    paddingHorizontal: 16,
    flex: 1,
    width: "100%",
  },
  bannerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  bannerImage: {
    width: 100,
    height: 100,
  },
  bannerText: {
    color: "#3a3b3c",
    fontSize: 20,
    fontWeight: "900",
  },
  todosContainer: {
    flex: 11,
    marginTop: 24,
    borderColor: "transparent",
    borderTopColor: "#cccccc",
    borderWidth: 1,
  },
});
