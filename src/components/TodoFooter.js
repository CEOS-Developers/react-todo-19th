import React from 'react';
import styled from 'styled-components';

let TodoFooterLayout = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
`;

let TodoProgressCountSpan = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #9e9e9e;
`;

let TodoProgressTextSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #9e9e9e;
`;

export default function TodoFooter({ todoTotalCount, todoDoneCount }) {
  return (
    <TodoFooterLayout>
      <TodoProgressCountSpan>
        {todoDoneCount}개 / {todoTotalCount}개
      </TodoProgressCountSpan>
      <TodoProgressTextSpan>TodoList</TodoProgressTextSpan>
    </TodoFooterLayout>
  );
}
