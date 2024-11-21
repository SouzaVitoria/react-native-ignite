import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    marginRight: 24,
    marginLeft: 24,
    position: "absolute",
    top: -32,
    left: 0,
    right: 0
  },
  input: {
    backgroundColor: "#262626",
    flex: 1,
    height: 54,
    padding: 16,
    color: "#F2F2F2",
    fontSize: 16,
    borderRadius: 6,
    marginRight: 4
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center"
  }
})