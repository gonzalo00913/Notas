/* import axios from 'axios'; */
import { useState, useEffect } from "react";
/* import getAll from "./service/service"; */
import Notas from "./components/Notas/Notas";
/* import Form from "./components/Form/Form"; */
import "./App.css";
import axios from "axios";

function App() {
  // Estado para almacenar las notas obtenidas desde el servidor.
  const [notas, setNotas] = useState([]);
  // Estado para agregar notas.
  const [newNota, setNewNota] = useState("");

  //LLamado a la API del servidor para obtener las notas y se almacenarlas en el estado.

useEffect(() =>{
  axios
  .get("http://localhost:3001/notas")
  .then(response =>{
    setNotas(response.data)
  })
},[])


//Funcion para para agregar nueva notas y que se almacenen en el estado newNota.
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      nota: newNota,
    };

    axios.post("http://localhost:3001/api/notes", noteObject).then((response) => {
      setNotas(notas.concat(response.data));
      setNewNota("");
    });
  };

  // Función para actualizar el estado newNota cada vez que el usuario escriba en el input.
  const handleAdd = (event) => {
    setNewNota(event.target.value);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/notas/${id}`).then(() => {
      setNotas(notas.filter((nota) => nota.id !== id));
    });
  };

  return (
    <div className="App">
      <h1>Notas:</h1>
      {/*<Form onSubmit={addNote} onChange={handleAdd} value={newNota} /> */}

      <form onSubmit={addNote} value={newNota}>
        <input value={newNota} onChange={handleAdd} />
        <button type="submit">Agregar</button>
      </form>

      {notas.map((nota) => {
        return <Notas key={nota.id} notas={nota} onDelete={handleDelete} />;
      })}
    </div>
  );
}

export default App;
