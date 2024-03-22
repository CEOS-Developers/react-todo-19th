import React from 'react';
import styled from 'styled-components';

let TodoHeaderLayout = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

let TodayStringSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

let DaySpan = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function TodoHeader() {
  const today = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const todayString = today.toLocaleDateString('kr-KR', options);
  const day = today.toLocaleDateString('kr-KR', { weekday: 'long' });
  return (
    <TodoHeaderLayout>
      <TodayStringSpan>{todayString}</TodayStringSpan>
      <DaySpan>{day}</DaySpan>
    </TodoHeaderLayout>
  );
}
