import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const TodoItem = ({ item }) => {
  return (
    <Wrapper>
      <TodoContent>{item.content}</TodoContent>
      <DeleteBtn>
        <FontAwesomeIcon icon={faCircleXmark} size="lg" />
      </DeleteBtn>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const TodoContent = styled.span`
  cursor: pointer;
  transition: color 0.1s ease-out;
  word-break: break-all;
  font-size: 20px;
  ${Wrapper}:hover & {
    color: #6a9fdc;
  }
`;

const DeleteBtn = styled.button`
  opacity: 0;
  transition: opacity 0.2s ease-out;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
