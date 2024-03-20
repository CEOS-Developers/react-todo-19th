import React from 'react';
import styled from 'styled-components';

const TodoList = ({ items, selectedIds, onToggleSelect }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItemContainer key={item.id}>
            {item.isCompleted ? (
            <CheckIcon src="./assets/Completed.png" alt="Check Icon" />
          ) : (
            <Priority>{index + 1}</Priority>
          )}
            <ListItem
            isSelected={selectedIds.includes(item.id)}
            isCompleted={item.isCompleted}
            onClick={() => onToggleSelect(item.id)}
          >
            {item.text}
          </ListItem>
        </ListItemContainer>
      ))}
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.ul`
  width: 80%;
  max-height: 250px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
`;

const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  min-width: 70%;
`;

const ListItem = styled.div`
  flex: 1;
  padding: 8px;
  margin: 5px 0;
  margin-right: 20px;
  background-color: ${({ isSelected, isCompleted }) =>
    isCompleted
      ? isSelected
        ? '#88CD9B'
        : '#9AFFC8'
      : isSelected
      ? '#B9B9B9'
      : '#f0f0f0'};
  border-radius: 5px;
  font-size: 11px;
  cursor: pointer;
`;

const Priority = styled.span`
  width: 25px;
  font-weight: 600;
  font-size: 11px;
`;

const CheckIcon = styled.img`
  width: 12x;
  height: 12px;
  margin-right: 13px;
`;