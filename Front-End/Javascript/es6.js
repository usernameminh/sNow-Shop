// Enhanced object literals trong javascript ES6
// 1. Định nghĩa key cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key dưới dạng biến

/**
 * var name = 'php';
var price = 100;

var course1 = {
  name, 
  price,
  getPrice() {
    return this.price
  }
}


var fieldName = 'new-name';
var fieldPrice = 'price';

var course2 = {
  name: 'Javascript',
  [fieldName]: 'Javascript',
  [fieldPrice]: 1000
}
console.log(course)
 * 
 */


// Default parameter values trong javascript ES6
/**
 * function logger(log, isAlert = false) {
 *  if(isAlert) return alert(log);
 *  console.log(log)
 * }
 * 
 * logger('Message...', true)
 */


//  Destructuring trong javascript ES6

// in array
/**
 * 
  var array = ['Javascript', 'PHP', 'CSS']
  var [, b, ...rest] = array
  console.log(b)
  console.log(rest)
 */

//  in object

/**
 * 
 * 
var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name: 'ReactJS'
  },
}

var {name: parentName, children: {name: childrenName}, description = 'default description'} = course
console.log(parentName)
console.log(description);
 */

// function logger(a, b, ...params) {
//   console.log(params)
// }
// logger(1,3,4,5,6,1,2)

// spread 
// var array1 = ['Java', 'Spring', 'PHP']
// var array2 = ['Javascript', '.Net', 'HTML']
// var array3 = [...array1, ...array2]
// console.log(array3)

// var array1 = ['Javascript', 'PHP', 'Java']

// // rest: gom lại
// function logger(...rest) {
//   for(var i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }

// // spread: banh ra
// logger(...array1)


/*
var defaultConfig = {
  api: 'https://www.youtube.com/watch?v=MJZICS7nQk8&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=102',
  apiVersion: 'v1',
  orther: 'orther'
}

var exerciseConfig = {
  ...defaultConfig,
  api: 'https://www.facebook.com/'
}
console.log(exerciseConfig)
*/


// Tagged template literals trong ES6 
// Học lập trình Javascript tại F8!
highlight = ([first, ...strings], ...rest) => 
  rest.reduce((acc, curr) => 
  [...acc, `<span>${curr}</span>`, strings.shift()],
  [first]).join('') 
var course = 'Javascript'
var brand = 'F8'
var html = highlight`Học lập trình ${course} tại ${brand}!`

console.log(html)