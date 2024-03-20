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
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const ListItem = styled.li`
  min-width: 70%;
  padding: 8px;
  margin: 5px 0;
  background-color: ${({ isSelected, isCompleted }) => 
    isCompleted ? '#79FF9F' : // 완료 배경색
    isSelected ? '#d0e0f0' : '#f0f0f0'}; 
  border-radius: 5px;
  font-size: 11px;
  cursor: pointer;
`;
