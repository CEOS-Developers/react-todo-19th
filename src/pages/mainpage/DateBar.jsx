import React from "react";
import styled from "styled-components";


const DateBar = () => {
  const today = new Date();
  const year = today.getFullYear(); 
  const month = today.getMonth() + 1;
  const date = today.getDate();

  // 0(일요일)부터 6(토요일)까지 숫자로 반환
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()]; // 현재 요일

  // 한글 날짜 포맷으로 변환
  const formattedDate = `${year}년 ${month}월 ${date}일 ${dayOfWeek}요일`;

  return <DateContainer>{formattedDate}</DateContainer>;
};

export default DateBar;


const DateContainer = styled.div`
  background-color: transeparent; 
  color: #333;
  font-size: 13px; 
`;