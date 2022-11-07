//1.- import React from 'react' para utilizar JSX
//11 y /12. y /13a- Continuamos por TodoItem.jsx
//6.- import el hook "useState" para que el componente tenga estado: cada vez que cambia el estado se renderiza el componente
//7b.- import del element Fragment
//10b- import del hook useRef
//16a- Si  se resetea la página perdemos lo introducido, para ello lo persistiremos en local storage del navegador con el hook useEffect
import React, { Fragment, useState, useRef, useEffect } from 'react';
//4.- import el componente TodoList (ver TodoList)
import TodoList from './components/TodoList';
//10.- Import v4 from uuid
import { v4 } from 'uuid';
//16c.- Constante para key de localStorage
const KEY = 'todoApp.todos'

//2.- Crear función App y exportarla al final como "export default App", y que devuelve html en return
function App() {

  //const name = "students";
  //i
  const valorInicial = [{id:1, task: "tarea1", completed: false}, {id:2, task: "tarea2", completed: false}];

  /* 7 el estado y la función que cambia el estado
  const [todos, setTodos] = useState(valorInicial); //Se puede dejar vacío
  */

  //17 cargar el estado desde disco
  const [todos, setTodos] = useState(() => {
    //Pasamos de String a Array de nuevo del getItem(KEY)
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    //Devolvemos si hay algo, y si no, inicializamos con array vacío (también podría ser con valorInicial)
    return storedTodos || [];
  });

  //10c definimos la variable a ser leída por useRef();
  const todoTaskRef = useRef();

  //16b- Persiste las entradas
  useEffect(() => { //función de callback (cada vez que cambia el state o al crearse inicialemente)
    //A localStorage.setItem le creamos una Key (constante) y como value pasamos un string (lo transformamos con JSON.stringify)
    localStorage.setItem(KEY, JSON.stringify(todos));
    //Si el array está vacío se ejecuta solamente al crearse el componente, pero vamos a ejecutarlo al modificarse "todos", por eso lo añadimos.
  }, [todos])

  //13c Función para toggle
  const toggleTodo = (id) => {
    const newTodos = [...todos]; //nos creamos una copia de la vble todos (con el spread  operator)
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  //10d.- Creamos la función (arrow function) para añadir una tarea, usamos una referencia en el input para poder leerlo.
  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task !== '') { //Solo si no es vacío
      setTodos((prevTodos) => { //Accedemos al estado previo copiándolo en prevTodos
        //10e.  Instalar y configurar v4 desde "$ npm i uuid" para generar Ids de forma aleatoria
        return [...prevTodos, {id: v4(), task, completed: false}]; //...: Spread Operator [estado anterio, nuevo estado]
      });
    };
    // 10f.- Borro la entrada anterior en el input
    todoTaskRef.current.value = null;
    // 10g.- Con el plugin de react para Chrome, con F12, puedo ir a Componentes
    // 10h.- Vemos un warning con: "Each child in a list should have a unique "key" prop (cuando recorremos TodoList)
  };

  //15 eliminar las completadas
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed); //newtodos tendrá  las tareas no completadas
    setTodos(newTodos); //solo aparecerán los no completados
  }

  return (
    /* /3.- Probar con hola mundo
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
      </header>
      <h2>Hi {name}!</h2>
    </div>
    */

   /* /5.- Devolvemos <TodoList todos={[]}}/> pasándole la prop "todos" inicialmente como un array vacío, o un [{id:1, task:"tarea1", completeted: false}],
   pero es preferible setearlo como variable de estado
   */
  /* /6.- Creamos otro elemento input de tipo test para introducir nuevas tareas */
  /* /7.- Lo metemeos en un Fragment, antes se hacía en un Div pero por renderización es mejor con Fragment (se requiere un solo elemento en React) */
  /* /8 .- Añadir y quitar tareas de la lista, usando emoji (ver readme) */
  /* /9.- A los botones le añadimos eventos con función: onClick={handleTodoAdd} y onClick={handleClearAll} */
  /* /10a- Para leer el input creamos la referencia ref={todoTaskRef} */
  /* /13b- A TodoList le pasamos el "toggleTodo={toggleTodo}" */
  /* /14- Para ver que hacemos el toggle correctamente vamos a añadir al final un div con las X tareas por terminar, donde X lo sustituimos por
  código javascript con {} */
   <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea"/>
      <button onClick={handleTodoAdd}>➕</button>
      <button onClick={handleClearAll}>➖</button>
      <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
    </Fragment>
  );
}

export default App;
