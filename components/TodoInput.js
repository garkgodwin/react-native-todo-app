import { StyleSheet, View, TextInput, Button } from "react-native";

const TodoInput = ({ inputTodo, todoInputHandler, addTodoHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="What do you want to do?"
        value={inputTodo}
        onChangeText={todoInputHandler}
      />
      <Button title="Add this" onPress={addTodoHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default TodoInput;
