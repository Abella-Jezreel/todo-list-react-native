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
    title: "Learn React Native with Redux 1",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 4,
    title: "Learn React Native with Redux 2",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 5,
    title: "Learn React Native with Redux 3",
    description: "Learn React Native for mobile development",
    status: true,
  },
  {
    id: 6,
    title: "Learn React Native with Redux 4",
    description: "Learn React Native for mobile development",
    status: true,
  },
];

const App = () => {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [filteredTodoList, setFilteredTodoList] = useState(TODO_LIST);
  const [currentTab, setCurrentTab] = useState("All");

  const filterTodoList = (tab, list) => {
    switch (tab) {
      case "In Progress":
        return list.filter((todo) => !todo.status);
      case "Done":
        return list.filter((todo) => todo.status);
      case "All":
      default:
        return list;
    }
  };
  
  const onPres = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodoList(newTodoList);
  
    // Reapply the current filter
    setFilteredTodoList(filterTodoList(currentTab, newTodoList));
  };
  
  const onDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  
    // Update the filtered list based on the current tab
    setFilteredTodoList(filterTodoList(currentTab, newTodoList));
  };
  
  const handleTabPress = (tab) => {
    setCurrentTab(tab); // Store the current tab
    setFilteredTodoList(filterTodoList(tab, todoList));
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
            <CardToDo todoItem={filteredTodoList} onPres={onPres} onDelete={onDelete}/>
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
