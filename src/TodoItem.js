import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
	padding: 10px;
	border-bottom: 1px solid #eee;
`;

function TodoItem({ todo }) {
	return (
		<ItemContainer>
			<span>{todo.text}</span>
		</ItemContainer>
	);
}

export default TodoItem;
