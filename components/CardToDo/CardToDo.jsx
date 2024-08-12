import { TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { styles } from "./CardToDo.styles";
import checked from "../../assets/check.png";
import React from "react";

const CardToDo = ({ todoItem, onPres }) => {
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
