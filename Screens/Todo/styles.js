import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#FAF8FA",
    padding: 10
  },
  addSearchTodo: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  errorTodoEntry: {
    borderColor: "red",
    borderWidth: 0.5
  },
  todoList: {
    flex: 1,
    paddingTop: 10
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 4
  }
});
