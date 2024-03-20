import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const SectionContainer = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
	justify-content: flex-start;
	align-content: space-around;

`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin:5px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteSectionButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color:#0056b3;
  }
`;

function Section({ section, onDeleteSection, addTodo, deleteTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    addTodo(section.id, todoText);
    setTodoText('');
  };

  return (
    <SectionContainer>
    <div>
    <Title>{section.name}</Title>
      <DeleteSectionButton onClick={onDeleteSection}>섹션 삭제</DeleteSectionButton>
    </div>
     
      <div>
        <Input
          type="text"
          placeholder="할 일 추가"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button onClick={handleAddTodo}>추가</Button>
      </div>
      {section.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={() => deleteTodo(section.id, todo.id)} />
      ))}
    </SectionContainer>
  );
}

export default Section;
