/*
Desafío "Contador con Botón":
Crear el componente ItemCount, para incrementar o decrementar los
productos a añadir en el carrito.

- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la
cantidad seleccionada por el usuario.
*/
import React, {useState} from 'react';

const ItemCount = ({_stock, cantidad, setCantidad}) => {

    const [stock, setStock] = useState(_stock);
   
    // Boton agregar: habilitado
    const [disableAdd, setDisableAdd] = useState(false);

    // Boton remover: habilitado
    const [disableRemove, setDisableRemove] = useState(false);

    // Funcion para incrementar contador
    const onAdd = () => {
        /* Si el valor actual del contador es menor que el stock disponible,
        habilito el boton remover, e incremento el contador en uno. */
        if(cantidad < stock){
            setDisableRemove(false);
            setCantidad(cantidad + 1);
        }else{
            // Sino, deshabilito el boton que incrementa el contador.
            setDisableAdd(true);
        }
    };
    
    // Funcion para decrementar contador
    const onRemove = () => {
        /* Si el valor actual del contador es mayor que cero, habilito el boton agregar,
        y disminuimos el contador en uno */
        if(cantidad > 0){
            setDisableAdd(false);
            setCantidad(cantidad - 1);
        }else{
            // Sino, deshabilito el boton que decrementa el contador.
            setDisableRemove(true);
        }
    };

    return(
        <div>
            <button id="btnRemove" onClick={onRemove} disabled={disableRemove}> - </button>
            <button>{cantidad}</button>
            <button id="btnAdd" onClick={onAdd} disabled={disableAdd}> + </button>
        </div>
    );
};

export default ItemCount;