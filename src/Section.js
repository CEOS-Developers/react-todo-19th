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
    margin-bottom:10px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;

const Button = styled.button`
	padding: 8px 16px;
	margin: 5px;
	border-radius: 10px;
  border:none;
	background-color: #f7f7f7;
	color: black;
  font-size:17px;
	cursor: pointer;

	&:hover {
		background-color: #dedede;
	}
`;

const DeleteSectionButton = styled(Button)`
	background-color: #f7f7f7;

	&:hover {
		background-color: #dedede;
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
            섹션 🗑️
          </DeleteSectionButton>
        </TitleBar>
        <div>
        </div>
        {section.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(section.id, todo.id)}
            onToggleCompleted={() => onToggleCompleted(section.id, todo.id)}
          />
          
        ))}
        <div>
        <Input
            type="text"
            placeholder="할 일 추가"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button onClick={handleAddTodo}> 📥</Button>
          </div>
      </SectionContainer>
    );
  }
  
  export default Section;