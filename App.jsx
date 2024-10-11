// App.jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';  // Import ToDoList
import ToDoForm from './ToDoForm';  // Import ToDoForm

function App() {
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
    <SafeAreaView>
      {/* Render ToDoList with tasks */}
      <ToDoList tasks={tasks} />

      {/* Render ToDoForm with addTask function */}
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    // Styling for individual tasks in the list
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    
    // Styling for completed tasks
    completed: {
      backgroundColor: '#e0e0e0',
    },
  
    // Styling for the text in the task list
    taskText: {
      fontSize: 16,
      color: '#333',
    },
  
    // Form container (for input field and button)
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
  
    // Styling for the input field in the form
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      borderRadius: 5,
    },
    
    // Styling for the add button (in form)
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
  
    // Styling for the button text
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    // General styling for the app container
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      paddingTop: 20,
    },
  });
  

export default App;
