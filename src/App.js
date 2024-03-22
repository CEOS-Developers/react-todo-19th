import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import styled from 'styled-components';

function App() {
  return (
    <TodoAppWrapper>
      <TodoHeader />
      <TodoCreate />
      <TodoList />
    </TodoAppWrapper>
  );
}

export default App;

const TodoAppWrapper = styled.div`
  display: flex;
  padding: 3rem 0;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
