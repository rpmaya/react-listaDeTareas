import './App.css';
import React, { useRef, useState, Fragment } from 'react';
import ToDoList from './Component/ToDoList';
import {v4} from 'uuid';

function App2() {

/* Ya no lo vamos a necesitar (hardcoded) porque lo tomaremos del input del usuario
  const array = [{id:1, tarea:"ir a clase", completed:false },
                 {id:2, tarea:"no saltarme clase", completed:false}];
*/

  //Usamos useRef para capturar en listaRef el texto introducido por el usuario en "input ref={listaRef}
  const listaRef = useRef();
 
  //Inicializamos nuestra varible de estado con un array vacío "[]"
  const [listaElementos, setListaElementos] = useState([]);


  //*Nueva1: Creamos la función para actualizar el checkbox, y la pasamos como parámetro al siguiente Componente
  const toggleElemento = (id) => {
    const nuevaLista = [...listaElementos]; //nos creamos una copia de la vble listaElementos (con el spread  operator), si no solo sería el puntero
    const elemById = nuevaLista.find((elemento) => elemento.id === id);
    elemById.completed = !elemById.completed;
    setListaElementos(nuevaLista);
  }

 
  //Implementaremos después el campo "completed": true | false
  const handleClear = ()=>{
    const nuevoElemento = listaElementos.filter((elemento)=>!elemento.completed);
    setListaElementos(nuevoElemento);
  };

  //Asignamos a la constante "elemento" el valor capturado en listaRef (input del usuario)
  const handleAddList = ()=>{
    const elemento = listaRef.current.value;
    if(elemento !== ""){
      //Si el texto introducido por el usuario no es vacío, añadimos a la lista actual "...listaActual", la nueva tarea introducida en la variable elemento.
      setListaElementos((listaActual)=>{
        return [...listaActual, {id:v4(), tarea: elemento, completed:false }];
      });
    }
    //*Nueva2.- Borro la entrada anterior en el input
    listaRef.current.value = null;
    // 2.1.- Con el plugin de react para Chrome, con F12, puedo ir a Componentes
    // 2.2.- Vemos un warning con: "Each child in a list should have a unique "key" prop (cuando recorremos ToDoList)
  };

  /* Nueva3: Para ver que hacemos el toggle correctamente vamos a añadir al final un div con las X tareas por terminar, donde X lo sustituimos por
  código javascript con {} */
  return (
    <Fragment>
      <ToDoList elementos = {listaElementos} toggleElemento = {toggleElemento}/>
      <input ref={listaRef} type="text" placeholder="Introduce tu tarea: "/>
      <button onClick={handleAddList}>➕</button>
      <button onClick={handleClear}>➖</button>
      <div>Te quedan {listaElementos.filter((elemento) => !elemento.completed).length} tareas por terminar</div>
    </Fragment>
  );
}

//listaref referencia es como ID
//const [lista, setLista] es como java get set atttr priv no modificable sin acceder a esa funcion (variable state)
export default App2;