import { StyleSheet, View, Text } from "react-native";

const TodoItem = ({ itemData }) => {
  return (
    <View style={styles.todoItemContainer}>
      <Text style={styles.todoItemText}>{itemData.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TodoItem;
