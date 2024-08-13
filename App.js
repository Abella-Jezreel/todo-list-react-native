import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import CardToDo from "./components/CardToDo/CardToDo";
import Footer from "./components/Footer/Footer";

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
  const [filteredTodoList, setFilteredTodoList] = useState(TODO_LIST);
  const [currentTab, setCurrentTab] = useState("All");

  const onPres = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodoList(newTodoList);
  
    // Reapply the current filter
    let filteredList = [];
    if (currentTab === "All") {
      filteredList = newTodoList;
    } else if (currentTab === "In Progress") {
      filteredList = newTodoList.filter((todo) => !todo.status);
    } else if (currentTab === "Done") {
      filteredList = newTodoList.filter((todo) => todo.status);
    }
    setFilteredTodoList(filteredList);
  };
  
  const handleTabPress = (tab) => {
    setCurrentTab(tab); // Store the current tab
    let filteredList = [];
    if (tab === "All") {
      filteredList = todoList;
    } else if (tab === "In Progress") {
      filteredList = todoList.filter((todo) => !todo.status);
    } else if (tab === "Done") {
      filteredList = todoList.filter((todo) => todo.status);
    }
    setFilteredTodoList(filteredList);
    console.log("Selected Tab:", tab);
  };
  
  const totalItems = todoList.length;
  const totalInProgress = todoList.filter((todo) => !todo.status).length;
  const totalDone = todoList.filter((todo) => todo.status).length;

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            {/* <Text>Header</Text> */}
            <Header />
          </View>
          <View style={styles.body}>
            <CardToDo todoItem={filteredTodoList} onPres={onPres} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
      <Footer
        totalItems={totalItems}
        totalInProgress={totalInProgress}
        totalDone={totalDone}
        onTabPress={handleTabPress}
      />
      </View>
    </>
  );
};

export default App;
