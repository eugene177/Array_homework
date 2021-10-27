// // Задача №1
// // Ответ: 4 ибо к массиву просто идут две ссылки.
// let arr = ['Ваня', 'Иштван', 'Оля']
// let newArr = arr
// newArr.push('Петя')
// console.log(arr.length)

// // Задача №2
// let users = ['Ваня', 'Иштван']
// users.push('Оля')
// console.log(users)
// users[users.indexOf('Иштван')] = 'Петя'
// console.log(users)
// let user = users.slice(0, 1)
// console.log(user)
// users.unshift('Маша', 'Паша')
// console.log(users)

// // Задача №3
// let arr = ['Ваня', 'Иштван', 'Оля']
// let user = arr.splice(arr.indexOf('Иштван'), 1)[0]
// console.log(arr)
// console.log(user)

// // Задача №4
// let str = 'Ваня,Иштван,Оля'
// let arr = str.split(',')
// console.log(arr)

// // Задача №5
// let arr = [1, 2, 3, 4, 5]
// let arr3 = []
// let arr2 = arr.map(item => {
//   return (item *= item)
// })
// console.log(arr2)

// arr.forEach(item => {
//   arr3.push((item *= item))
// })
// console.log(arr3)

// Задача №6
let arr = [1, 2, 3, 4, 5]
let counter = arr.reduce((previousValue, item) => {
  return (item *= item) + previousValue
}, 0)
console.log(counter)
