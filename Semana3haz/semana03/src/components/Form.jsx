"use client"
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../app/page.module.css";

const Form = () => {
    const [producto, setProducto] = useState({ nombre: '', Marca: '', Cantidad: '', Precio: '' });
    const [productos, setProductos] = useState([
        { nombre: 'todo 1', Marca: 'hhfkjhjkhskjdfhk', Cantidad:'50', Precio:'20'},
        { nombre: 'todo 2',Marca: 'hehehe', Cantidad:'50', Precio:'20' },
        { nombre: 'todo 3',Marca: 'hehehe', Cantidad:'50', Precio:'20' }
    ]);

    const handleChange = e => {
        const { name, value } = e.target;
        setProducto(prevProducto => ({
            ...prevProducto,
            [name]: value
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        if (!producto.nombre.trim() || !producto.Marca.trim() || !producto.Cantidad.trim() || !producto.Precio.trim()) {
            alert('Ningún campo puede estar vacío');
            return;
        }
        setProductos([...productos, producto]);
        setProducto({ nombre: '', Marca: '', Cantidad: '', Precio: '' });
    };

    const deleteProducto = indice => {
        const nuevosProductos = productos.filter((_, index) => index !== indice);
        setProductos(nuevosProductos);
    };

    return (
        <>  
        <div className="form_container">
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre Producto</label><br/>
                <input className={styles.form_input} type='text' name='nombre' value={producto.nombre} onChange={handleChange}/>
                <label>Marca</label><br/>
                <input className={styles.form_input} type='text' name='Marca' value={producto.Marca} onChange={handleChange}/>
                <label>Cantidad</label><br/>
                <input className={styles.form_input} type='text' name='Cantidad' value={producto.Cantidad} onChange={handleChange}/>
                <label>Precio</label><br/>
                <input className={styles.form_input} type='text' name='Precio' value={producto.Precio} onChange={handleChange}/>
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
        </div>
            {
                productos.map((value, index) => (
                    <Todo
                        deleteTodo={deleteProducto}
                        key={index}
                        index={index}
                        nombre={value.nombre}
                        Marca={value.Marca}
                        Cantidad={value.Cantidad}
                        Precio={value.Precio}
                    />
                ))
            }
        </>
    );
}

export default Form;
