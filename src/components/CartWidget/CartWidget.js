import RoomIcon from '@material-ui/icons/ShoppingCart';
// Context
import { CartContext } from '../../CartContext';
import {useContext} from 'react';

<RoomIcon />
const CartWidget = () => {
  const {productos} = useContext(CartContext);
  console.log("CartContext",CartContext);
  return (<><RoomIcon/> <span underline="none" >{productos.length}</span></>);
};

export default CartWidget;
  