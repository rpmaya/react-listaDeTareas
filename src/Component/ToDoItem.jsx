import React from 'react'

//3 recibimos el parámetro {toggleElemento}
export default function ToDoItem({ elemento, toggleElemento }) {

  const {id, tarea, completed} = elemento;

  //2 Leemos el checkbox, pero como la variable completed se encuentra en App.js, tenemos que traer una función definida en App.js
  const handleTodoClick = () => {
    toggleElemento(id);
  }
  //1 Creamos un checkbox
  return (
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" checked={completed} onChange={handleTodoClick}/> {tarea}
    </li>
  )
}
