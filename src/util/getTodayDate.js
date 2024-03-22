// 오늘 날짜 문자열 반환
export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const date = today.getDate().toString().padStart(2, '0');

  const dayToString = ['일', '월', '화', '수', '목', '금', '토'];
  const day = dayToString[today.getDay()];

  return `${year}년 ${month}월 ${date}일 ${day}요일`;
};
