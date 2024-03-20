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
    const [inputText, setInputText] = useState('');
  
    const addTodo = () => {
      if (!inputText) return;
      const newTodo = { id: Date.now(), text: inputText };
      setTodos([...todos, newTodo]);
      setInputText('');
    };
  
    const deleteTodo = (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId));
    };
  
    return (
      <SectionContainer>
        <h3>{section.name}</h3>
        <Input
          type="text"
          placeholder="할 일 추가"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={addTodo}>추가</Button>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </SectionContainer>
    );
  }
  
  export default Section;