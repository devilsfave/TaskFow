import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const TaskDetailScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState(route.params?.task?.title || '');
  const [description, setDescription] = useState(route.params?.task?.description || '');
  const [priority, setPriority] = useState(route.params?.task?.priority || 'low');
  const [dueDate, setDueDate] = useState(route.params?.task?.dueDate || '');

  const handleSaveTask = async () => {
    const newTask = { id: Date.now(), title, description, priority, dueDate };
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    navigation.goBack();
  };

  return (
    <Container>
      <Input
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="Priority (low, medium, high)"
        value={priority}
        onChangeText={setPriority}
      />
      <Input
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <Button title="Save Task" onPress={handleSaveTask} />
    </Container>
  );
};

const Container = styled.View
  flex: 1;
  padding: 20px;
  background-color: ;
;

const Input = styled.TextInput
  margin-bottom: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: ;
  color: ;
;

export default TaskDetailScreen;
