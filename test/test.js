var chai = require('chai');
var isDivisible3or5 = require('../isDivisible3or5.js')

describe('Prueba de funciones', ()=>{
  describe('#isDivisible3or5()', ()=>{
    it(`Si pasa argumento [6,15,35] se recibe ['Fizz','FizzBuzz','Buzz' ] `, () => {
      const sentence = isDivisible3or5.getResult([6,15,35])
      const result = [ 'Fizz', 'FizzBuzz', 'Buzz' ]

      chai.expect(sentence).to.deep.equal(result)
    })
    it(`Si pasa [12,'Texto',true, 45] se recibe 'Uno o más elementos no es de tipo númerico'`, ()=>{
      const sentence = isDivisible3or5.getResult([12,'Texto',true, 45])
      const result = 'Uno o más elementos no es de tipo númerico'

      chai.expect(sentence).to.deep.equal(result)
    })
    it(`Si pasa [] se recibe 'Se ha enviado un arreglo sin elementos definidos'`, ()=>{
      const sentence = isDivisible3or5.getResult([])
      const result = 'Se ha enviado un arreglo sin elementos definidos'

      chai.expect(sentence).to.deep.equal(result)
    })
    it(`Si pasa 123 se recibe 'El argumento que envio debe ser tipo arreglo'`, ()=>{
      const sentence = isDivisible3or5.getResult(123)
      const result = 'El argumento que envio debe ser tipo arreglo'

      chai.expect(sentence).to.deep.equal(result)
    })
  })
});