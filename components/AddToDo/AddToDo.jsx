import { View, Text, TouchableOpacity } from 'react-native';
import { styles}  from './AddToDo.styles';
import React from 'react';

const AddToDo = ({ onAdd }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>New To Do +</Text>
      </TouchableOpacity>
    </View>
  );
};



export default AddToDo;