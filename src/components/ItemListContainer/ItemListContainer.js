/*
importar el componente(hijo) ItemCount dentro de ItemListContainer(padre)
*/
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
    return (
    <>
      <h2>{props.greeting}</h2>
      <ItemCount _stock={5} _initial={1}/>
    </>
    );
  };
  
export default ItemListContainer;
  