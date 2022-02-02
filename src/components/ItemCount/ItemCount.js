/*
Desafío "Contador con Botón":
Crear el componente ItemCount, para incrementar o decrementar los
productos a añadir en el carrito.

- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la
cantidad seleccionada por el usuario.

*/
import { DisabledByDefaultSharp } from '@mui/icons-material';
import React, {useState} from 'react';

const ItemCount = ({_stock, _initial}) => {
    
    
    const [stock, setStock] = useState(_stock);
    const [initial, setInital] = useState(_initial);
    // Boton agregar: habilitado
    const [disableAdd, setDisableAdd] = React.useState(false);

    // Boton remover: habilitado
    const [disableRemove, setDisableRemove] = React.useState(false);

    // Funcion para incrementar contador
    const onAdd = () => {
        /* Si el valor actual del contador es menor que el stock disponible,
        habilito el boton remover, e incremento el contador en uno. */
        if(initial < stock){
            setDisableRemove(false);
            setInital(initial + 1);
        }else{
            // Sino, deshabilito el boton que incrementa el contador.
            setDisableAdd(true);
        }
    };
    
    // Funcion para decrementar contador
    const onRemove = () => {
        /* Si el valor actual del contador es mayor que cero, habilito el boton agregar,
        y disminuimos el contador en uno */
        if(initial > 0){
            setDisableAdd(false);
            setInital(initial - 1);
        }else{
            // Sino, deshabilito el boton que decrementa el contador.
            setDisableRemove(true);
        }
    };

    return(
        <div>
            <button id="btnAdd" onClick={onAdd} disabled={disableAdd}> + </button>
            <p>{initial}</p>
            <button id="btnRemove" onClick={onRemove} disabled={disableRemove}> - </button>
        </div>
    );
};

export default ItemCount;