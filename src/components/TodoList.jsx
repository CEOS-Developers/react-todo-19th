import styled from 'styled-components';
import { flexColumn } from 'styles/commonStyle';

function TodoList({ listName }) {
  return (
    <TodoListWrapper>
      <h2>
        {listName} <span> / 0개</span>
      </h2>
      <ul className="list"></ul>
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
  }
`;
