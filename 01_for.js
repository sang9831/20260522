const arr = ["아침", "간식", "점심", "간식", "저녁", "간식", "야식"];

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//for-in, for-of는 역방향 안됨
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i},j=${j}`);
  }
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
