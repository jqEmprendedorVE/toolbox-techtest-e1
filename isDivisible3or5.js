/*
Implementación de solución a ejercicio que persigue: 
Recibir un arreglo de entrada con números.

1. Devolver Fizz si el número entrante divisible por 3 o si incluye un 3 en el número
2. Devolver Buzz si el número entrante divisible por 5 o si incluye un 5 en el número
3. Devolver FizzBuzz si el número es divisible por 3 y por 5
 */

let searchDivisors = (() =>{
  let publicsFunctions = {}
  let res = []

  /*
  Método privado qué por cada número que recibe analiza para retornar la palabra clave
  según el requerimiento.
   */
  getStringforDivider = (n) => {
    if([3,5].map(d=>n % d).reduce((total,num)=>total+num,0)===0) return 'FizzBuzz' 
    if(((n/3)%1)===0) return 'Fizz'
    if(((n/5)%1)===0) return 'Buzz'
    return null
  }

  /*
  Chequea varias validaciones en los argumentos de entrada 
  para completar la operación principal de este módulo
   */
  checkEntry = (arr) => {
    // Chequea si un elemento de entrada es un arreglo
    if(!Array.isArray(arr)) return `El argumento que envio es tipo '${typeof arr}' y debe ser un arreglo`
    //Chequea si el arreglo de entrada no venga vacío
    if(arr.length === 0) return 'Se ha enviado un arreglo sin elementos definidos'
    //Chequea que todos los elementos de entrada sean númericos
    if(arr.some(isNaN)) return 'Uno o más elementos no es de tipo númerico'
    // retorna true para dar por válido el arreglo de entrada
    return true
  }

  /*
  Definicion de los métodos públicos
   */
  publicsFunctions = {
    /*
    Al invocar este método se debe pasar un arreglo de enteros
    el mismo analizara cada elemento y resolverá la palabra adecuada 
    según el requerimiento original retornando otro arreglo de strings
     */
    getResult : (arr) => {
      var validArgument = checkEntry(arr)
      if(typeof validArgument === 'string') return validArgument

      arr.forEach(n=>{
        res.push(getStringforDivider(n))
      })

      return res
    }
  }

  return publicsFunctions
})()

module.exports = searchDivisors
