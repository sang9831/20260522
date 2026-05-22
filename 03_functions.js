function myFun3() {
  if (Math.random() > 0.5) {
    return [1, 2, 3]; // 출력만의 의미를 가지는건아님
    // 여기서 함수 로직종료
  }
  // else 역할을 하게된다
  return { a: 1, b: 2, c: 3 };
}
console.log(myFun3());
