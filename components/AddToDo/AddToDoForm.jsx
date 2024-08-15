import React, { useState } from "react";
import { Modal, View, TextInput, Button } from "react-native";
import { styles } from "./AddToDo.styles";

const AddToDoForm = ({ visible, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    onSubmit(title);
    setTitle("");
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter ToDo title"
            value={title}
            onChangeText={setTitle}
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Save" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddToDoForm;
