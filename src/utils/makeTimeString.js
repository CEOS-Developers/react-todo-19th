// 할 일을 생성한 시기의 고유 문자열을 반환하는 함수
export default function makeUniqueTodoDateString() {
  const now = Date.now();
  const stringNow = now.toString();
  return stringNow;
}
