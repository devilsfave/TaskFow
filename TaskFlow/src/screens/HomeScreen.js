import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    };
    loadTasks();
  }, []);

  const handleAddTask = () => {
    navigation.navigate('TaskDetail', { task: null });
  };

  return (
    <Container>
      <Title>TaskFlow</Title>
      <TaskList tasks={tasks} />
      <Button title="Add Task" onPress={handleAddTask} />
    </Container>
  );
};

const Container = styled.View
  flex: 1;
  padding: 20px;
  background-color: ;
;

const Title = styled.Text
  font-size: 24px;
  font-weight: bold;
  color: ;
  margin-bottom: 20px;
;

export default HomeScreen;
