
//indexOf 결과값 6
// const str = 'hello world!'

// console.log(str.indexOf('world'))

//boolean - false 만들기
// const str = 'hello world!'
// console.log(str.indexOf('heropy') !== -1)


//slice  (결과값 world)
// const str = "hellp world!"

// console.log(str.slice(6,11))

//replace
// const str = 'hello world!'

// console.log(str.replace('world' , 'heropy'))

//match 정규표현식 사용
// const str = 'space_086@naver.com!'

// console.log(str.match(/.+(?=@)/)[0])

//trim
// const str = '   hello world!    '

// console.log(str.trim())


//숫자

// .abs() : 절대값
// .min() : 인수값들 중에 최소 값
// .max() : 인수값들 중에 최대 값
// .ceil() : 올림값
// .floor() : 내림값
// .round() : 반올림


//배열  
const numbers = [1, 2, 3, 4]
const fruits = ['apple', 'banana', 'cherry']

//@ .lenth : 갯수

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)
// console.log([].length) -  값의 유무를 확인하는 용도로 사용

//@.concat() : 원본 수정없이 값이 연결됨

// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

//.forEach() : 배열 데이터의 갯수만큼 콜백함수가 반복적으로 실행, 반환되는 값은 x

//.map() : (인수로 사용하는)콜백의 내부에서 반환하는 데이터를 가지고
// 데이터를 모아놓은 새로운 배열을 만들어서 반환.

//.fillter() : 배열 데이터 안에 들어있는 아이템들을 특정한 기준에 의해서 필터링



//.find() .finfIndex() : find 는 값을 찾는거, index는 몇번째의 값인지

//const a = fruits.find(fruits => {
//  return /^b/.test(fruits) // /^b/ : b로 시작하는 값 (정규표현식)
//})

// 화살표 함수로 변환
//const a = fruits.find(fruits => /^b/.test(fruits))

//console.log(a)

// const b = fruits.findIndex(fruits => {
//  return /^c/.test(fruits) 
// })

// console.log(b)