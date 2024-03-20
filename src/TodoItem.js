import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
	padding: 10px;
	border-bottom: 1px solid #eee;
`;

const Button = styled.button`
	padding: 5px 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

function TodoItem({ todo, onDelete }) {
	return (
		<ItemContainer>
			<span>{todo.text}</span>
			<Button onClick={() => onDelete(todo.id)}>완료</Button>
		</ItemContainer>
	);
}

export default TodoItem;
