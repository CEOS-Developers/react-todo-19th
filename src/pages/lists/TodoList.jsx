import React from 'react';
import styled from 'styled-components';



const TodoList = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

export default TodoList;


const ListContainer = styled.ul`
  width: 100%;
  max-height: 200px;
  overflow-y: auto; // 최대 높이 벗어나면 스크롤 생기게
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const ListItem = styled.li`
  min-width: 70%;
  padding: 8px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 11px;
`;