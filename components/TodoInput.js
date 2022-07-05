import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Text,
} from "react-native";

const TodoInput = ({
  inputTodo,
  todoInputHandler,
  addTodoHandler,
  cancelModalHandler,
  modalIsVisible,
}) => {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.todoImage}
          source={require("../assets/images/todo-100.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="What do you want to do?"
          value={inputTodo}
          onChangeText={todoInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add this" onPress={addTodoHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color={"red"} onPress={cancelModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#152238",
    width: "95%",
    marginRight: 8,
    padding: 16,
    borderRadius: 8,
    color: "#152238",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    padding: 0,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  todoImage: {
    width: 100,
    height: 100,
  },
});

export default TodoInput;
