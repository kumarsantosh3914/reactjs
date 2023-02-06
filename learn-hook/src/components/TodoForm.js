import React from "react";
import { useState } from "react";
import {
    Input,
    InputGroupAddon,
    Button,
    Form,
    FormGroup,
    InputGroup
} from "reactstrap";
import { v4 } from "uuid";


const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please fill some value");
        }
        const todo = {
            todoString,
            id: v4()
        };
        addTodos(todo);

        setTodoString("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter a todo string"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    {/* <InputGroupAddon addonType="prepend">
                        <Button color="success">Add Todo</Button>
                    </InputGroupAddon> */}
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Search</span>
                    </div>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;