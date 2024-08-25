import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import TaskList from '../src/components/TaskList';
import { getTasks, Task } from '../src/utils/storage';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const loadedTasks = await getTasks();
    setTasks(loadedTasks);
  };

  const addTask = () => {
    router.push('/add-task');
  };

  return (
    <Container>
      <Title>TaskFlow</Title>
      <TaskList tasks={tasks} />
      <Button title="Add Task" onPress={addTask} />
    </Container>
  );
}