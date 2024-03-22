import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import { useEffect, useReducer } from 'react';
import todoReducer from 'reducer/todoReducer';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/commonStyle';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  doneList: JSON.parse(localStorage.getItem('doneList')) || [],
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList, doneList } = state;

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [todoList]);

  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoMain>
        <TodoCreate list={todoList} dispatch={dispatch} />
        <TodoListContainer>
          <TodoList listName="todo" list={todoList} dispatch={dispatch} />
          <TodoList listName="done" list={doneList} dispatch={dispatch} />
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
