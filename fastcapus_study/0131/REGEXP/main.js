const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// g : the 를 검색하는 옵션
// i : 대소문자 가리지 않고 검색해주는 옵션 (gi)
//const regexp = new RegExp('the', 'gi')

const regexp = /the/gi
console.log(str.match(regexp))