import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';  // Import ToDoList component
import ToDoForm from './ToDoForm';  // Import ToDoForm component

export default function App() {
  const [tasks, setTasks] = useState([
    { name: 'Do laundry', completed: true },
    { name: 'Go to gym', completed: false },
    { name: 'Walk dog', completed: true },
  ]);

  // Function to add a new task
  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />  {/* Render ToDoList with tasks */}
      <ToDoForm addTask={addTask} />  {/* Render ToDoForm with addTask function */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

