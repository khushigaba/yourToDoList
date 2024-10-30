import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, task.completed ? styles.completed : styles.incomplete]}>
            <Text style={styles.taskText}>{task.name}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    textDecorationLine: 'line-through', // Strike-through for completed tasks
    color: 'gray',                      // Gray color for completed tasks
  },
  incomplete: {
    backgroundColor: '#fff',
    textDecorationLine: 'none',         // No line-through for incomplete tasks
    color: 'black',                     // Black color for incomplete tasks
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;


