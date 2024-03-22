import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const SectionContainer = styled.div`
	margin: 20px 0;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: space-around;
`;

const TitleBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

const Title = styled.h3``;

const Input = styled.input`
	margin-right: 10px;
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

const DeleteSectionButton = styled(Button)`
	background-color: #007bff;

	&:hover {
		background-color: #0056b3;
	}
`;

function Section({ section, onDeleteSection, addTodo, deleteTodo, onToggleCompleted }) {
    const [todoText, setTodoText] = useState('');
  
    const handleAddTodo = () => {
      if (todoText.trim() === '') return;
      addTodo(section.id, todoText);
      setTodoText('');
    };
  
    return (
      <SectionContainer>
        <TitleBar>
          <Title>{section.name}</Title>
          <DeleteSectionButton onClick={() => onDeleteSection(section.id)}>
            섹션 삭제
          </DeleteSectionButton>
        </TitleBar>
        <div>
          <Input
            type="text"
            placeholder="할 일 추가"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button onClick={handleAddTodo}>추가</Button>
        </div>
        {section.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(section.id, todo.id)}
            onToggleCompleted={() => onToggleCompleted(section.id, todo.id)}
          />
        ))}
      </SectionContainer>
    );
  }
  
  export default Section;