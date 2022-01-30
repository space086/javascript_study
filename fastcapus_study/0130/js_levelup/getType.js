export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

//기본 통로로 데이터가 나가는(이름 지정x) -> default export

 