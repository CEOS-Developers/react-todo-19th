import { useEffect } from 'react';
import styled from 'styled-components';
import { flexColumn } from 'styles/commonStyle';

function TodoList({ listName, list, dispatch }) {
  const handleClick = ({ id, text }) => {
    if (listName === 'todo') {
      dispatch({ type: 'MOVE_TODO_TO_DONE', payload: { id, text } });
    } else {
      dispatch({ type: 'MOVE_DONE_TO_TODO', payload: { id, text } });
    }
  };

  return (
    <TodoListWrapper>
      <h2>
        {listName} <span> / {list.length}개</span>
      </h2>
      <ul className="list">
        {list.map((li) => (
          <li key={li.id} onClick={() => handleClick({ id: li.id, text: li.text })}>
            {li.text}
          </li>
        ))}
      </ul>
    </TodoListWrapper>
  );
}

export default TodoList;

const TodoListWrapper = styled.article`
  display: flex;
  width: 20rem;
  height: 40rem;
  padding: 2rem;
  border: 0.1rem solid #6d6afe;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;

  .list {
    ${flexColumn}
    gap: 1rem;
    overflow: auto;

    li {
      cursor: pointer;
    }
  }

  & {
    font-size: 2rem;
  }
`;
