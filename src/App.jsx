import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import { useReducer } from 'react';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/commonStyle';

const initialState = {
  todoList: [],
  doneList: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'MOVE_TODO_TO_DONE':
      return moveItem(state, action.payload, 'todoList', 'doneList');
    case 'MOVE_DONE_TO_TODO':
      return moveItem(state, action.payload, 'doneList', 'todoList');
    case 'REMOVE_TODO':
      return removeItem(state, action.payload, 'todoList');
    case 'REMOVE_DONE':
      return removeItem(state, action.payload, 'doneList');
    default:
      return state;
  }
};

const moveItem = (state, payload, fromListName, toListName) => {
  const { id } = payload;

  return {
    [fromListName]: state[fromListName].filter((todo) => todo.id !== id),
    [toListName]: [...state[toListName], payload],
  };
};

const removeItem = (state, payload, listName) => {
  const { id } = payload;
  return {
    ...state,
    [listName]: state[listName].filter((todo) => todo.id !== id),
  };
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList, doneList } = state;

  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoMain>
        <TodoCreate dispatch={dispatch} />
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
