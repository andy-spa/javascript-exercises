# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  

STRATEGY:

1)ENTENDER EL PROBLEMA: escribir una funcion para remover una cantidad de elementos no definida de un array.
2)PLAN no tiene interfaz, no tiene input, la salida deseada es el array con elementos eliminados.
    1 pasar el array y los argumentos como parametros de funcion.
    2 para cada elemento del array verificar que no coincida con ningun argumento
    3 eliminar los elementos que coinciden.

3) PSEUDOCODIGO
    recorrer el array
    recorrer los argumentos
    si coincide algun elemento eliminarlo

