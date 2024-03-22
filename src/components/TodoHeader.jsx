import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodayDate } from 'util/getTodayDate';

function TodoHeader() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') ?? '');

  // 사용자 이름 설정
  const showUserName = () => {
    if (!userName) {
      const nameInput = prompt('이름을 알려주세요!');
      localStorage.setItem('userName', nameInput);
      setUserName(nameInput);
    }
  };

  useEffect(() => {
    showUserName();
  });

  return (
    <HeaderWrapper>
      <p>{getTodayDate()}</p>
      <h1>
        <span>{userName}이의 </span>TODO-LIST
      </h1>
    </HeaderWrapper>
  );
}

export default TodoHeader;

const HeaderWrapper = styled.header`
  display: flex;
  font-size: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
