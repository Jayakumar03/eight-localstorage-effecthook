import React, {useState} from "react";
 import { 
    FormGroup,
    Input,
    InputGroup,
    // InputGroupAddom,
    Button,
    Form,
    // Container
  } from "reactstrap";

  import { v4 } from "uuid";

  const TodoFrom = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");


    // function for onSubmit to perform certain task

    const handleSubmit = (event) => {

        event.preventDefault();
// if else for checking whether the value is empty or not
        if(todoString.value === ""){

            return alert("Enter the text")

        }

        const todo ={
// todostring javscript will refer it to line number15
            title: todoString, 
            id: v4()

        }
// add todo is method, method can also be passed as props for furture reference for method : https://www.w3schools.com/js/tryit.asp?filename=tryjs_this_method
        addTodos(todo)
        setTodoString("")

    }
return(

    <Form onSubmit ={handleSubmit}>
        <FormGroup>
            <InputGroup>
            <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a todo string"
            value={todoString}
            onChange = {e => {
                setTodoString(e.target.value) // 
            }}
            />
            <InputGroup addonType = "prepend">
                <Button color="success"> ADD TODO</Button>
            </ InputGroup>
            </InputGroup>
        </FormGroup>
    </Form>

)

  };

  export default TodoFrom;
