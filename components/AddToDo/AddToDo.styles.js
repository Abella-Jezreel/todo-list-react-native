import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 150,
    right: 20,
    zIndex: 999,
  },
  button: {
    backgroundColor: "#aebde7",
    width: 160,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  buttonText: {
    color: "#265ce6",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTextSave: {
    color: "#265ce6",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
  },
  buttonTextCancel: {
    color: "#cf2020",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#c5c7cc',
    borderRadius: 5,
    backgroundColor: '#edf1f5',
  },
});
