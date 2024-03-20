import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const SectionContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Section({ section }) {
  const [todos, setTodos] = useState(section.todos);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: todoText }]);
    setTodoText('');
  };

  return (
    <SectionContainer>
      <h2>{section.name}</h2>
      <Input 
        type="text"
        placeholder="New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button onClick={addTodo}>Add Todo</Button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </SectionContainer>
  );
}

export default Section;
