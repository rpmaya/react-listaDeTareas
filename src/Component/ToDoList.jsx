import React from 'react';
import ToDoItem from './ToDoItem';

//*Nueva 1: Recibimos y enviamos al siguiene la función toggleElementos junto a los elementos
export default function ToDoList({ elementos, toggleElemento }) {
  /*Para cada elemento del array pasado como parámetro en {elementos}, 
  añadimos a la lista (ul) una nueva entrada (li) con una "key" única (elemento.id) 
  y el contenido (elemento.tarea)
  */
 /*
  return (
    <ul>
        {elementos.map((elemento)=> (
            <li key={elemento.id}>{elemento.tarea}</li>
        ))}
    </ul>
  )
  */
 //1 Creamos un subcomponente ToDoItem para trabajar con él.
  return (
    <ul className="list-group">
        {elementos.map((elemento)=> (
            <ToDoItem key={elemento.id} elemento={elemento} toggleElemento={toggleElemento}/>
        ))}
    </ul>
  )
}
