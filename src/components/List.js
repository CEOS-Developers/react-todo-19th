import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import deleteBtn from '../assets/img/trash.svg';
import grayCheckBtn from '../assets/img/grayCheck.svg';
import greenCheckBtn from '../assets/img/greenCheck.svg';

const ToDoBlock = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;

  /* 웹킷 기반 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* 파이어폭스 브라우저를 위한 스타일 */
  scrollbar-width: thin;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 30px;
  position: relative;
  min-height: 40px; /* 버튼 컨테이너 상관없이 일관된 높이 */

  &::after {
    content: ''; /* 가상 요소에 내용이 없음을 명시 */
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 30px); /* 전체 너비에서 30px만큼 줄임 */
    margin-left: 30px;
    border-bottom: 1px solid #ccc;
  }

  css @media (max-width: 768px) {
    padding: 5px; 5px; 5px; 15px;
    &::after {
      width: calc(100% - 20px);
      margin-left: 20px;
    }
  }
`;

const TextContainer = styled.div`
  width: 100%;
  font-size: 1em;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  word-wrap: break-word;
  white-space: normal;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

// 애니메이션 효과
const SlideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  animation: ${SlideIn} 0.5s forwards; // 0.5초 동안 애니메이션 실행
`;

const DeleteButtonImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CheckButtonImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 7px;
`;

// React.memo를 사용하여 컴포넌트의 불필요한 렌더링을 방지
export default React.memo(function List({ toDoData, setToDoData }) {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedTextId, setSelectedTextId] = useState(null);

  // 텍스트 컨테이너 클릭 핸들러
  const handleTextClick = (id) => {
    if (id === selectedTextId) {
      // 같은 TextContainer 클릭 시 showButton 상태 변경
      setShowButtons(!showButtons);
    } else {
      // 다른 TextContainer가 클릭되면, showButtons를 true로 설정하고 selectedTextId를 업데이트
      setShowButtons(true);
      setSelectedTextId(id);
    }
  };

  // 할 일 목록 삭제하는 함수
  const handleDelete = (id) => {
    let newToDoData = toDoData.filter((item) => item.id !== id);
    setToDoData(newToDoData);
  };

  // 할 일 목록의 완료 상태 변경하는 함수
  const handleComplete = (id) => {
    let newToDoData = toDoData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setToDoData(newToDoData);
  };

  return (
    <ToDoBlock>
      {toDoData.map((item) => (
        <ItemContainer key={item.id}>
          <TextContainer
            completed={item.completed}
            onClick={() => handleTextClick(item.id)}
          >
            {item.title}
          </TextContainer>
          {selectedTextId === item.id && showButtons && (
            <ButtonsContainer>
              <CheckButtonImg
                src={item.completed ? greenCheckBtn : grayCheckBtn}
                alt="회색 체크 버튼"
                onClick={() => handleComplete(item.id)}
              />
              <DeleteButtonImg
                src={deleteBtn}
                alt="삭제 버튼"
                onClick={() => handleDelete(item.id)}
              />
            </ButtonsContainer>
          )}
        </ItemContainer>
      ))}
    </ToDoBlock>
  );
});
