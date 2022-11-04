//9 Utilizamos el plugin rfc

import React from 'react'
//11 Recibimos un todo (objeto de todos)
//14 Recibimos toggleTodo
export default function TodoItem({ todo, toggleTodo }) {

  //12 desestructuramos el todo
  const {id, task, completed} = todo;
  //16 Definimos la función que a su vez llamará a toggleTodo pasándole el id (lo hacemos así para pasarle el id como argumento)
  const handleTodoClick = () => {
    toggleTodo(id);
  }
//10 Como el padre es <ul>, usamos un <li> </li>
//13a por cada Item le añadimos un checkbox
//15 con onChange del checkbox llamaremos a la función handleTodoClick (que definimos arriba)
//17 le  añadimos la propiedad checked
  return (
    <li>
        <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
        {task}
    </li>
  )
/*NOTA 18: Cuando pasamos propiedades, lo hacemos del componente padre a los hijos (en App.js pasamos la función toggleTodo a TodoList, que la recibe 
  y la envía a TodoItem a su vez, desde donde se llama a dicha función toggleTodo con el id, y a partir de aquí sube hacia arriba).
  Las propiedades van hacia abajo (desde el componente raíz a los más pequeños sucesivamente), y los eventos van de abajo hacia arriba  
  (hasta que lo escucha App y hace la modificación).
*/
}
