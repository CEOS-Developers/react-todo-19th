import React, { useState } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';

let AddTodoLayout = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

let TodoInput = styled.input`
  width: 100%;
  border: none;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  flex-grow: 1;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

let AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default function AddTodo({ addTodo }) {
  const { getTodoFromLocalStorage, setTodoToLocalStorage } = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const addButtonHandler = () => {
    let todoList = getTodoFromLocalStorage() || [];
    if (inputValue.trim() === '') {
      alert('할 일을 입력해주세요.');
    } else if (todoList.some((item) => item.todo === inputValue)) {
      alert('이미 등록된 할 일입니다.');
      setInputValue('');
    } else {
      todoList.push({ todo: inputValue, isdone: false });
      setTodoToLocalStorage(todoList);
      addTodo({ todo: inputValue, isdone: false });
      setInputValue('');
    }
  };
  return (
    <AddTodoLayout>
      <TodoInput
        placeholder="할 일을 입력해주세요..."
        value={inputValue}
        onChange={(e) => {
          setInputValue((prev) => e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addButtonHandler();
          }
        }}
      />
      <AddButton onClick={addButtonHandler}>+</AddButton>
    </AddTodoLayout>
  );
}
