import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import CardToDo from "./components/CardToDo/CardToDo";

const TODO_LIST = [
  {
    id: 0,
    title: "Learn React Native",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 1,
    title: "Learn React Native",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 2,
    title: "Learn React Native with GraphQL",
    description: "Learn React Native for mobile development",
    status: false,
  },
  {
    id: 3,
    title: "Learn React Native with Redux",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 4,
    title: "Learn React Native with Redux",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 5,
    title: "Learn React Native with Redux",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 6,
    title: "Learn React Native with Redux",
    description: "Learn React Native for mobile development",
    status: true,
  },
];

const App = () => {
  const [todoList, setTodoList] = useState(TODO_LIST);

  const onPres = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodoList(newTodoList);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            {/* <Text>Header</Text> */}
            <Header />
          </View>
          <View style={styles.body}>
            <CardToDo todoItem={todoList} onPres={onPres}/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default App;
