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

//TodoItem 컴포넌트에 완료 상태를 토글하는 기능 추가
function TodoItem({ todo, onDelete, onToggleCompleted }) {
    return (
      <ItemContainer>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <Button onClick={onToggleCompleted}>
          {todo.completed ? '미완료로 변경' : '완료'}
        </Button>
        <Button onClick={onDelete}>삭제</Button>
      </ItemContainer>
    );
  }
  
  export default TodoItem;
  