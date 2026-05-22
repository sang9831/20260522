// var : 함수 스코프 (함수로 만들어진 블록만이 격리)
// let, const : 블록 스코프
console.log(v1);
let v3 = "나는 밖 let";
console.log(v3);
{
  console.log("나는 블록");
  var v1 = "나는 var"; // 호이스팅
  let v2 = "나는 let";
  v3 = "나는 안let";
}

console.log(v1);
//console.log(v2);
console.log(v3);
