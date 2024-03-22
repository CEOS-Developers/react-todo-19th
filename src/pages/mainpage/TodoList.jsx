import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoList = ({ todoList, completedList, selectedIds, onToggleSelect }) => {
  const lastTodoRef = useRef(null); // todoList의 마지막 항목에 대한 ref
  const [prevTodoListLength, setPrevTodoListLength] = useState(todoList.length);

  useEffect(() => {
    // 새로운 할 일을 추가했을 때 스크롤이 자동으로 이동할 수 있도록
    if (todoList.length > prevTodoListLength && lastTodoRef.current) {
      lastTodoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setPrevTodoListLength(todoList.length);
  }, [todoList.length, prevTodoListLength]);

    // 할일 목록이랑 완료 목록 합치기
  const displayedList = [...todoList, ...completedList]; 

  return (
    <ListContainer>
      {displayedList.map((item, index) => {
        // todoList의 마지막 항목: 새로운 할 일이 추가되는 위치!!
        const isLastTodo = index === todoList.length - 1 && todoList.length > 0;

        return (
          <ListItemContainer
            key={item.id}
            ref={isLastTodo ? lastTodoRef : null}
          >
            {item.isCompleted ? (
              <CheckIcon src="./assets/Completed.png" alt="Check Icon" /> //완료 항목 앞에 체크 표시
            ) : (
              <Priority>{index + 1} .</Priority> //우선순위 설정
            )}
            <ListItem
              isSelected={selectedIds.includes(item.id)}
              isCompleted={item.isCompleted}
              onClick={() => onToggleSelect(item.id)}
            >
              {item.text}
            </ListItem>
          </ListItemContainer>
        );
      })}
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.ul`
  width: 70%;
  height: 60%;
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
  margin-right: 10px;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.02); //호버하면 목록이 약간 커짐
  }

  &:active {
    transform: scale(0.98); // 클릭하면 목록이 약간 작아짐!
  }
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