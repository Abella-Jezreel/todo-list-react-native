import { TouchableOpacity, Text, Image, ScrollView, Alert } from "react-native";
import { styles } from "./CardToDo.styles";
import checked from "../../assets/check.png";
import React from "react";


const CardToDo = ({ todoItem, onPres, onDelete }) => {
    const handleLongPress = (id) => {
      Alert.alert(
        "Delete Item",
        "Are you sure you want to delete this item?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => onDelete(id)
          }
        ],
        { cancelable: true }
      );
    };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {todoItem.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          style={styles.todoItem}
          onPress={() => onPres(todo.id)}
          onLongPress={() => handleLongPress(todo.id)}
        >
          <Text
            style={[
              styles.todoTitle,
              todo.status && {
                textDecorationLine: "line-through",
                color: "#ababab",
              },
            ]}
          >
            {todo.title}
          </Text>
          {todo.status && (
            <Image source={checked} style={styles.image} resizeMode="contain" />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CardToDo;
