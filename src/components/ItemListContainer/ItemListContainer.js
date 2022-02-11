import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList/>
    </>
    );
  };
  
export default ItemListContainer;
  