const isDivisible3or5 = require('./isDivisible3or5.js')

var res = isDivisible3or5.getResult([6,15,21,25,30, 45])
console.log(res)

var res = isDivisible3or5.getResult([12,'Texto',true, 45])
console.log(res)

var res = isDivisible3or5.getResult([])
console.log(res)

var res = isDivisible3or5.getResult('[6,15,21,25,30, 45]')
console.log(res)

var res = isDivisible3or5.getResult(123)
console.log(res)