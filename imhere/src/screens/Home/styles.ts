import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    margin: 16
  },
  input: {
    flex: 1,
    fontSize: 24,
    padding: 16,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    marginRight: 16,
    color: "#fff"
  },
  button: {
    backgroundColor: "green",
    width: 60,
    height: 56,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFF",
    fontSize: 48,
    textAlign: 'center'
  },
  emptyParticipant: {
    color: "#FFF"
  }
});