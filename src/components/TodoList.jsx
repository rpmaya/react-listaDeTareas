//0 Utilizamos el plugin rfc

import React from 'react';
//4 Importa TodoItem
import TodoItem from './TodoItem';

//1 Añadir las props, dado que va a recibir un array de todos (insetando código javascript con las {}). El "todos" llega desde App.js
//5 Además de todos, recibirá toggleTodo
export default function TodoList({ todos, toggleTodo }) {
  //2 Devolver una lista con <ul>, de momento  solo com <li>Tarea</li> dentro del todos.map 
  //3 pasamos a TodoItem cada elemento del map  <TodoItem todo={todo}/>
  //5 cuando renderizamos listas, react le gustaría tener un id único por elemento, por lo que le añadimos el campo "key={todo.id}"
  //6 Le pasamos a TodoItem el toggleTodo
  return (
    <ul>
        {todos.map((todo)=> (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))}
    </ul>
  )
}
