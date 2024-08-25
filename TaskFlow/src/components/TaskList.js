import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Checkbox } from 'react-native-paper';
import styled from 'styled-components/native';

const TaskList = ({ tasks, toggleTask }) => {
  const renderItem = ({ item }) => (
    <ListItem>
      <Checkbox
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleTask(item.id)}
      />
      <List.Item
        title={item.title}
        description={Priority: , Due: }
        titleStyle={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );

  return (
    <Container>
      <FlatList
        data={tasks.sort((a, b) => b.priority - a.priority)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

const Container = styled.View
  flex: 1;
  background-color: ;
;

const ListItem = styled.View
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ;
;

export default TaskList;
