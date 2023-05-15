const Notas = ({notas, onDelete}) =>{
    return(
        <div className="container-boton">
            <li>{notas.nota}</li>
            <button onClick={() => onDelete(notas.id)}>Eliminar</button>
        </div>
    )
}

export default Notas;