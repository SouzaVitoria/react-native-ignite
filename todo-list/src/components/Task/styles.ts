import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    alignItems: "center"
  },
  todoButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 12
  },
  taskText: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14
  },
  taskTextDone: {
    flex: 1,
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through"
  },
  status: {
    marginRight: 10
  }
})