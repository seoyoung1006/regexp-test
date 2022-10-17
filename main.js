const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the laxy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
// console.log(str.match(/\.$/gi))
// console.log(regexp.test(str))
// str = str.replace(regexp,'AAA')
// console.log(str)

// console.log(
//   str.match(/https?/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
// console.log(
//   str.match(/[0,9]/g)
// )
// console.log(
//   str.match(/\b/g)
// )

// const h = ` the hello world   !`
// console.log(
//   h.replace(/\s/g,'')
// )

console.log(
  str.match(/.{1,}(?=@)/g)
)