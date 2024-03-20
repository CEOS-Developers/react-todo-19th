import React from 'react';
import styled from 'styled-components';



const TodoList = ({ items, selectedIds, onToggleSelect  }) => {
  return (
    <ListContainer>
      {items.map(item => (
        <ListItem 
        key={item.id} 
        isSelected={selectedIds.includes(item.id)} 
        isCompleted={item.isCompleted}
        onClick={() => onToggleSelect(item.id)}
        >
        {item.text}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default TodoList;


const ListContainer = styled.ul`
  width: 80%;
  max-height: 250px;
  overflow-y: auto; // 최대 높이 벗어나면 스크롤 생기게
  list-style: num;
  padding: 0;
  margin-top: 10px;
`;

const ListItem = styled.li`
  min-width: 70%;
  padding: 8px;
  margin: 5px 0;
  background-color: ${({ isSelected, isCompleted }) => 
    // 완료 + 선택 색상 처리
    isCompleted ? (isSelected ? '#88CD9B': '#9AFFB6') : 
    // 할일 + 선택 색상 처리
    isSelected ? '#B9B9B9' : '#f0f0f0'}; 
  border-radius: 5px;
  font-size: 11px;
  cursor: pointer;
`;
