import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem({ itemData, deleteTodoHandler }) {
  return (
    <View style={styles.todoItemContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteTodoHandler.bind(this, itemData.index)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.todoItemText}>{itemData.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItemContainer: {
    backgroundColor: "#152238",
    justifyContent: "center",
    height: 40,
    fontSize: 16,
    marginTop: 4,
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoItemText: {
    height: "100%",
    textAlignVertical: "center",
    padding: 4,
    paddingHorizontal: 8,
    color: "white",
  },
});

export default TodoItem;
