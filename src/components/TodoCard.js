import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckBoxSvg } from '../assets/svg/CheckBox.svg';
import { ReactComponent as CheckBoxOutlineSvg } from '../assets/svg/CheckBoxOutline.svg';
import { ReactComponent as DeleteSvg } from '../assets/svg/Delete.svg';
import useLocalStorage from '../hooks/useLocalStorage';

let TodoCardLayout = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    button {
      display: flex;
    }
  }
`;

let TodoCardParagraph = styled.p`
  flex-grow: 1;
`;
let CheckboxBox = styled.div`
  flex-shrink: 0;
`;

let TodoDeleteButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  display: none;
`;

export default function TodoCard({ isdone, todo, deleteTodo, toggleTodo }) {
  const { getTodoFromLocalStorage, setTodoToLocalStorage } = useLocalStorage();
  const deleteHandler = (e) => {
    e.stopPropagation();
    setTodoToLocalStorage(
      getTodoFromLocalStorage().filter((item) => item.todo !== todo)
    );
    deleteTodo(todo, isdone);
  };
  const toggleHandler = () => {
    let todoList = getTodoFromLocalStorage();
    let target = todoList.find((item) => item.todo === todo);
    target.isdone = !target.isdone;
    setTodoToLocalStorage(todoList);
    toggleTodo(todo, isdone);
  };
  return (
    <TodoCardLayout onClick={toggleHandler}>
      <CheckboxBox>
        {isdone ? <CheckBoxSvg /> : <CheckBoxOutlineSvg />}
      </CheckboxBox>
      <TodoCardParagraph>{todo}</TodoCardParagraph>
      <TodoDeleteButton onClick={deleteHandler}>
        <DeleteSvg />
      </TodoDeleteButton>
    </TodoCardLayout>
  );
}
