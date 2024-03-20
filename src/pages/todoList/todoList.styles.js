import styled from "styled-components";
import { ReactComponent as NotCheckImg } from "../../assets/NotCheck.svg";
import { ReactComponent as CheckImg } from "../../assets/checkComplete.svg";
import { ReactComponent as InputCheck } from "../../assets/check.svg";

export const NotCheck = styled(NotCheckImg)`
  width: 29px;
  height: 29px;

  cursor: pointer;
`;

export const Check = styled(CheckImg)`
  margin-top: 5px;
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const InputCheckImg = styled(InputCheck)`
  width: 30px;
  height: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #1b1a19;

  color: #e9ecef;
  text-align: left;
  padding-left: 45px;
  line-height: 6vh;
  font-size: 1.1rem;
  border-bottom: 1px solid #484644;
`;

export const TodoContainer = styled.div`
  width: 50%;
  min-height: 95vh;
  background-color: #1b1a19;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1``;

export const TodayDate = styled.p`
  font-size: 0.625rem;
  color: gray;
  margin: 6px 0 0 1px;
`;

export const WriteForm = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #252423;
`;

export const TodoForm = styled.form`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px 0 15px;
`;

export const CheckBoxImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 15px 0 0px;
  fill: #788bff;
`;

export const TodoInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: #252423;
  outline: none;
  border: none;
  color: #e9ecef;
  padding: 10px 28px;
  ::placeholder {
    color: #788bff;
  }
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  background-color: #252423;
  border: 1px solid #788bff;
  width: 40px;
  height: 26px;
  border-radius: 10px;
  font-size: 0.82rem;
  color: #788bff;
  :hover {
    background-color: #3c3a39;
  }
`;

export const TodoList = styled.div`
  width: 100%;
  list-style: none;
`;

export const TodoListLi = styled.li`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: #252423;
  padding-right: 5px;
  margin: 5px 0px;
  padding: 0 15px 0 15px;
  color: #cdcdcd;
`;
export const TodoListSpan = styled.span`
  width: 100%;
  padding: 0px 26.1px;
  font-size: 0.73rem;
`;

export const TodoListBtn = styled.button`
  cursor: pointer;
  background-color: #252423;
  border: 1px solid #788bff;
  width: 40px;
  height: 26px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #788bff;

  :hover {
    background-color: #3c3a39;
  }
`;
