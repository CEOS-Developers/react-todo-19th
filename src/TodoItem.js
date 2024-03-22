import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 0px;

	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 5px;

	border-bottom: 1px solid #eee;
	width: 100%;
`;

const Button = styled.button`
	padding: 0px 7px;
	border-radius: 5px;
	border: none;
	background-color: #f7f7f7;
	color: black;
	font-size: 17px;
	cursor: pointer;
	margin-left: 2px;
	margin-right: 4px;
	width: 100%;

	&:hover {
		background-color: #0056b3;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end; // 버튼들을 오른쪽 끝으로 정렬
	align-items: stretch;
	margin-bottom: 10px;
`;

//TodoItem 컴포넌트에 완료 상태를 토글하는 기능 추가
function TodoItem({ todo, onDelete, onToggleCompleted }) {
	return (
		<ItemContainer>
			<span
				style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
			>
				{todo.text}
			</span>
			<span>{todo.completed ? '🥳' : ''}</span>
			<ButtonContainer>
				<Button onClick={onToggleCompleted}>
					{todo.completed ? '❎' : '✅'}
				</Button>
				<Button onClick={onDelete}>🗑️</Button>
			</ButtonContainer>
		</ItemContainer>
	);
}

export default TodoItem;
