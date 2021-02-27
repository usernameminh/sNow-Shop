/*
function sleep(ms) {
  return new Promise(
    (resolve) => setTimeout(
      function () {
        resolve()
      }
      , ms)
  )
}

sleep(1000)
  .then(() => {
    console.log(1)
    return sleep(1000)
    
  })
  .then(() => {
    console.log(2)
    return new Promise((resolve, reject) => reject('co loi!'))
    
  })
  .then(() => {
    console.log(3)
    return sleep(1000)
  })
  .catch((error) => {
    console.log(error)
  })
  */

/*
var promise = Promise.resolve('Success!')
promise 
  .then((data) => console.log(data))
 */


var promise1 = new Promise( (resolve, reject) => 
  setTimeout(() => 
    resolve([1, 2])
  ,4000)
)

var promise2 = new Promise((resolve, reject) => 
  setTimeout(() => {
    reject('error!')
  }, 5000)  
)


Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result[0].concat(result[1]))
  }) 
  .catch((data) => console.log(data))


// Promise.resolve()
// Promise.reject()
// Promise.all([])
