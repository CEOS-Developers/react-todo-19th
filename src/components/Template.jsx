import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const Template = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default Template;

const Wrapper = styled.div`
  max-width: 70%;
  margin: 55px auto;
`;
