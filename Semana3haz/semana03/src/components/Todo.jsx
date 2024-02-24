import React from 'react';
import style from '../app/page.module.css';

const Productos = ({ nombre, Marca, Cantidad, Precio, index, deleteTodo }) => {
    return (

    <table className={style.separado}>

        <tr>
          <td>Nombre</td>
          <td>Marca</td>
          <td>Cantidad</td>
          <td>Precio</td>
          <td>Eliminar</td>
        </tr>

        <tr>
          <td>{nombre}</td>
          <td>{Marca}</td>
          <td>{Cantidad}</td>
          <td>{Precio}</td>
          <td><button className={style.btn_delete} onClick={() => deleteTodo(index)}>X</button></td>
        </tr>

    </table>
    );
}

export default Productos;
