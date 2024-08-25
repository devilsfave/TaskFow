import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import { addTask } from '../src/utils/storage';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const router = useRouter();

  const handleAddTask = async () => {
    if (taskTitle.trim()) {
      await addTask(taskTitle);
      router.back();
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </Container>
  );
}