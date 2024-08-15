import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import CardToDo from "./components/CardToDo/CardToDo";
import Footer from "./components/Footer/Footer";
import AddToDo from "./components/AddToDo/AddToDo";
import AddToDoForm from "./components/AddToDo/AddToDoForm";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [currentTab, setCurrentTab] = useState("All");
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const onAdd = (title) => {
    const newTodo = {
      id: todoList.length + 1,
      title: title,
      status: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);

    // Reapply the current filter
    setFilteredTodoList(filterTodoList(currentTab, newTodoList));
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
            <CardToDo
              todoItem={filteredTodoList}
              onPres={onPres}
              onDelete={onDelete}
            />
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
          <AddToDo onAdd={openModal} />
        <AddToDoForm
          visible={isModalVisible}
          onClose={closeModal}
          onSubmit={onAdd}
        />
      </View>
    </>
  );
};

export default App;
