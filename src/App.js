import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import styled from 'styled-components';

function App() {
  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoCreate />
      <TodoList />
    </TodoAppLayout>
  );
}

export default App;

const TodoAppLayout = styled.div`
  display: flex;
  padding: 4rem 0;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
