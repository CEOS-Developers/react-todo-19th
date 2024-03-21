import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Main = () => {
  const initialData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  const [data, setData] = useState(initialData);
  useEffect(() => localStorage.setItem("data", JSON.stringify(data)), [data]);

  const [value, setValue] = useState("");
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }
    setData([
      ...data,
      {
        id: new Date().getTime() + Math.random(),
        content: value,
        isDone: false,
      },
    ]);
    setValue("");
  };

  const doneCount = data.filter((el) => el.isDone).length;
  const totalCount = data.length;

  const toggleTodo = (id) => {
    const updatedData = data.map((el) =>
      el.id === id ? { ...el, isDone: !el.isDone } : el
    );
    setData(updatedData);
  };

  const deleteTodo = (id) => {
    const updatedData = data.filter((el) => el.id !== id);
    setData(updatedData);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <FontAwesomeIcon icon={faPaw} size="lg" />
        <Input
          onKeyDown={(e) => {
            e.key === "Enter" && handleSubmit();
          }}
          onChange={handleOnchange}
          value={value}
        />
        <SubmitBtn onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </SubmitBtn>
      </InputWrapper>

      <ProgressWrapper>
        <ProgressText>
          {totalCount !== 0 && doneCount === totalCount
            ? "최고예요"
            : "달려봐요"}{" "}
          !
        </ProgressText>
        <ProgressBar>
          <ProgressBarDone
            $ratio={(doneCount / totalCount) * 100}
          ></ProgressBarDone>
        </ProgressBar>
        <ProgressCount>{doneCount + " / " + totalCount}</ProgressCount>
      </ProgressWrapper>

      <TodoWrapper>
        <div>
          <Title>TODO</Title>
          <TodoList>
            {data.map(
              (el) =>
                el.isDone || (
                  <TodoItem
                    key={el.id}
                    item={el}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                )
            )}
          </TodoList>
        </div>
        <Line></Line>
        <div>
          <Title>DONE</Title>
          <TodoList>
            {data.map(
              (el) =>
                el.isDone && (
                  <TodoItem
                    key={el.id}
                    item={el}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                )
            )}
          </TodoList>
        </div>
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
  width: ${(props) => props.$ratio}%;
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

const Line = styled.div`
  border: 1px dashed rgba(125, 126, 126, 0.5);
  margin: 5px 20px;
`;

const Title = styled.h3`
  font-size: 28px;
  padding-bottom: 17px;
`;

const TodoList = styled.ul`
  display: grid;
  row-gap: 10px;
  padding: 0 5px;
`;
