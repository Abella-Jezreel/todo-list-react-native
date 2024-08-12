import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todoItem: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoTitle: {
    fontSize: 25,
    flex: 1,
    marginHorizontal: 10,
  },
  todoDescription: {
    color: "#ababab",
  },
  image: {
    width: 20,
    height: 20,
  },
});
