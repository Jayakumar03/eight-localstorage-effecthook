import React, {useState, useEffect} from "react";
import {Container  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

// IMPORTING FROM COMPONENTS
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {

  const [todos, setTodos] = useState([]) 
  
  // USE EFFECT AS WELL LOCAL STORAGE FOR STORING TODOS

  useEffect (() => {

    const localTodos = localStorage.getItem("todos");
    console.log({localTodos});
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }

  }, [])


  // PASSING THE VALUE FORM TODO TO STATE USING ASYNC

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }
    
  //CALLING LOCALSTRORAGE USING USE EFFECT

  useEffect( () => {
 // array is used for telling this particular useffect if any occurs in state(todos) 
  // excute everything in this call back function

  localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos]) 
 

  const markComplete = id => {

    setTodos(todos.filter(todo => todo.id !== id));

  }

  
  
   return (

    <Container fluid>
      <h1> TODO with local storage</h1>
      <Todos todos = {todos} markComplete = {markComplete}/>
      <TodoForm addTodos = {addTodos}/>
    </Container>
   
   );

}

export default App;
