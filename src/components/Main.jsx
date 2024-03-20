import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <FontAwesomeIcon icon={faPaw} size="lg" />
        <Input />
        <SubmitBtn>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </SubmitBtn>
      </InputWrapper>

      <ProgressWrapper>
        <ProgressText>달려봐요!</ProgressText>
        <ProgressBar>
          <ProgressBarDone></ProgressBarDone>
        </ProgressBar>
        <ProgressCount>0 / 0</ProgressCount>
      </ProgressWrapper>

      <TodoWrapper>
        <Todo>
          <Title>TODO</Title>
        </Todo>
        <Line></Line>
        <Done>
          <Title>DONE</Title>
        </Done>
      </TodoWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: grid;
  row-gap: 15px;
`;

// Input
const InputWrapper = styled.section`
  background-color: #c0e0fe;
  border-radius: 12px;
  height: 50px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 10px;
  padding: 0 12px;
`;

const Input = styled.input`
  border-bottom: 1px solid #7d7e7e;
  font-size: 20px;
  padding: 3px 2px;
  margin-bottom: 3px;
`;

const SubmitBtn = styled.button``;

// Prgress Bar
const ProgressWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 12px;
  padding: 0px 10px;
  font-size: 22px;
`;

const ProgressText = styled.span``;

const ProgressBar = styled.span`
  background-color: #c0c0c0;
  border-radius: 10px;
  height: 20px;
  position: relative;
`;

const ProgressBarDone = styled.span`
  background-color: #7f7f7f;
  border-radius: 10px;
  height: inherit;
  position: absolute;
  transition: width 0.4s ease-in-out;
`;

const ProgressCount = styled.span``;

//Todo
const TodoWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: #fcf4db;
  border-radius: 12px;
  min-height: 400px;
  padding: 30px;
`;

const Todo = styled.div``;
const Line = styled.div`
  border: 1px dashed rgba(125, 126, 126, 0.5);
  margin: 5px 20px;
`;
const Done = styled.div``;

const Title = styled.h3`
  font-size: 28px;
  padding-bottom: 17px;
`;
