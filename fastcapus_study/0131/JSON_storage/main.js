//JSON
//자바스크립트의 객체 표기법

const user = {
  name: 'heropy',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zilinks.com'
  ]
}

console.log('user', user)
console.log(typeof user)

//stringify : 자바스트립트 객체를 JSON 텍스트로 변환
//const str = JSON.stringify(user)
//console.log('str',str)
//console.log(typeof str)

//parse : JSON 텍스트를 자바스크립트객체로 변환
//const obj = JSON.parse(str)
//console.log('obj', obj)
//console.log(typeof obj)

// Storage
//: localstorage - 반영구적 , sessionStorage - 페이지 세션이 끝날 때 (페이지 닫을 때 사라지는)
// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// remove 
// localStorage.removeItem('user') 



const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 27
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))