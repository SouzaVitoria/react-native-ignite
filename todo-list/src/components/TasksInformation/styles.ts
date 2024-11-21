import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksInformationContainer: {
    marginTop: 55,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 60,
    paddingBottom: 20, 
    borderBottomColor: "#333333",
    borderBottomWidth: 1
  },

  createdTasksContainer: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  },
  doneTasksContainer: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  },

  createdTasksText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE",
    textAlign: "center"
  },
  doneTasksText: { 
    fontWeight: "bold",
    fontSize: 14,
    color: "#8284FA"
  },
  
  tasksNumber: {
    backgroundColor: "#333333",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    borderRadius: 999,
    padding: 8
  },

})