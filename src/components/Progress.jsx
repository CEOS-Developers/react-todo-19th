import styled from "styled-components";

const Progress = ({ data }) => {
  const doneCount = data.filter((el) => el.isDone).length;
  const totalCount = data.length;
  return (
    <Wrapper>
      <ProgressText>
        {totalCount !== 0 && doneCount === totalCount ? "최고예요" : "달려봐요"}{" "}
        !
      </ProgressText>
      <ProgressBar>
        <ProgressBarDone
          $ratio={(doneCount / totalCount) * 100}
        ></ProgressBarDone>
      </ProgressBar>
      <ProgressCount>{doneCount + " / " + totalCount}</ProgressCount>
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.section`
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
