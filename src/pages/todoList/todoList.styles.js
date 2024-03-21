import styled, { css, keyframes } from "styled-components";
import { ReactComponent as NotCheckImg } from "../../assets/NotCheck.svg";
import { ReactComponent as CheckImg } from "../../assets/checkComplete.svg";
import { ReactComponent as InputCheck } from "../../assets/check.svg";

const slideDownFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 할 일 삭제 시 애니메이션
const fadeOutScaleDown = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const animationStyles = css`
  &.animate-slide-down {
    animation: ${slideDownFadeIn} 0.3s ease-out;
  }

  &.animate-fade-out {
    animation: ${fadeOutScaleDown} 0.3s ease-out;
  }
`;

export const NotCheck = styled(NotCheckImg)`
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const Check = styled(CheckImg)`
  margin-top: 5px;
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const InputCheckImg = styled(InputCheck)`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const TodoContainer = styled.div`
  width: 50%;
  min-height: 95vh;
  background-color: #1b1a19;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TodoCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 0.8rem;
  color: white;
`;
export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextP = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  margin-left: 10px;
`;
export const TextP2 = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  margin-left: 10px;
  color: #788bff;
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

  @media (max-width: 768px) {
    height: 45px;
  }
`;

export const TodoForm = styled.form`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px 0 15px;

  @media (max-width: 768px) {
    height: 45px;
  }
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
  font-size: 0.73rem;
  ::placeholder {
    height: 45px;
    padding: 8px;
    font-size: 0.73rem;
  }

  @media (max-width: 768px) {
    height: 45px;
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

  @media (max-width: 768px) {
    width: 40px;
    height: 25px;
    font-size: 10px;
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

  ${animationStyles}

  @media (max-width: 768px) {
    height: 45px;
  }
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

  @media (max-width: 768px) {
    width: 40px;
    height: 25px;
    font-size: 10px;
  }
`;
