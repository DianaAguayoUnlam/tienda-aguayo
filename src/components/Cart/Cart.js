import React from 'react';
import {useContext, useState}  from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button} from '@mui/material';
// Context
import { CartContext } from '../../CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

// Firebase
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

const Cart = () => {
  const {productos, setProductos} = useContext(CartContext);
  const cantidadProductos = productos.length;
  let sumaTotal = 0;

  if(cantidadProductos > 0){
    (cantidadProductos === 1)
    ? sumaTotal = productos[0].data.price * productos[0].cantidad
    : sumaTotal = productos.reduce((a, b) => a.data.price * a.cantidad + b.data.price * b.cantidad);  
  }

  const deleteItem = (idItem) => {
      const productosActualizado = productos.filter( e => e.data.id !== idItem );
      setProductos(productosActualizado);
  }

  //Compra
  // Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

  const onSubmit = async (e) => {
		e.preventDefault();
		console.log(productos);
    
    // Obtener la fecha actual
    const getDate = () => {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }

    const items = [];
    // Creamos un objeto item por cada producto agregado
    productos.map((producto) => {
      items.push({id: producto.data.id, title: producto.data.name, price: producto.data.price});
    });

    // Creamos un objeto orden para luego guardarlo en la bd
    let order = {buyer: {name: 'user1', phone: '1125252424', email: 'user@gmail.com'}, items: items, date: getDate(), total: sumaTotal};
    console.log('orders', order);

    // Guardamos la orden en la bd
		const docRef = await addDoc(collection(db, 'orders'), {
			order,
		});

		setPurchaseID(docRef.id);
		setProductos([]);
	};

  return (
    <>
        <Typography gutterBottom variant='h5' component='div'>
                        Mi carrito ({productos.length})
        </Typography>

        {(productos.length > 0) ?
        <form className='FormContainer' onSubmit={onSubmit}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Precio</TableCell>
                  <TableCell align="left">Cantidad</TableCell>
                  <TableCell align="left">Sutotal</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {productos.map((row) => (
                  <TableRow
                  key={row.data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell align="left">{row.data.name}</TableCell>
                  <TableCell align="left">{row.data.price}</TableCell>
                  <TableCell align="left">{row.cantidad}</TableCell>
                  <TableCell align="left">{row.data.price * row.cantidad}</TableCell>
                  <TableCell align="left">
                    <DeleteIcon onClick={() => deleteItem(row.data.id)}/>
                  </TableCell>
                  </TableRow>
              ))}

                  <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                      <TableCell align="right">TOTAL</TableCell>
                      <TableCell align="right">${sumaTotal}</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
          </TableContainer>
          <button type='submit'>Comprar</button>
        </form>

        : <>
            <p>No hay productos agregados :(</p>
            <Link to='/'>
              <Button color="inherit">Ver productos</Button>
            </Link>
          </> } 

        {(purchaseID !== '') &&
          <p>¡Gracias por su compra!. El código de su compra es: {purchaseID}</p>
        } 
    </>
  );
}

export default Cart;
