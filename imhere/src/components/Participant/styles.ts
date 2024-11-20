import { StyleSheet  } from "react-native";

export const styles  = StyleSheet.create({
  participantContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F1E25',
    padding: 8,
    paddingRight: 24,
    margin: 16,
    alignItems: "center"
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 18
  },
  button: {
    backgroundColor: "#E23C44",
    width: 56,
    height: 56,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFF",
    fontSize: 48,
    textAlign: 'center'
  }
})