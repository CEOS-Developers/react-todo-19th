import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/commonStyle';

const initialState = {
  todoList: [],
  doneList: [],
};

function App() {
  // const todoReducer = (state, action) => {

  //   case "Create":
  //     return {}

  // };
  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoMain>
        <TodoCreate />
        <TodoListContainer>
          <TodoList listName="Todo" />
          <TodoList listName="Done" />
        </TodoListContainer>
      </TodoMain>
    </TodoAppLayout>
  );
}

export default App;

const TodoAppLayout = styled.div`
  padding: 4rem 0;
  gap: 2rem;
  ${flexCenter}
  ${flexColumn}
`;

const TodoMain = styled.main`
  ${flexColumn}
  gap: 3rem;
`;

const TodoListContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
