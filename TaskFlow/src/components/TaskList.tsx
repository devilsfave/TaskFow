import React from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

const TaskItem = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const TaskText = styled.Text`
  font-size: 16px;
`;

interface Task {
  id: number;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem>
          <TaskText>{item.title}</TaskText>
        </TaskItem>
      )}
    />
  );
};

export default TaskList;