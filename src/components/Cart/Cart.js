import {useContext}  from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button} from '@mui/material';
// Context
import { CartContext } from '../../CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {productos, setProductos, saveProduct} = useContext(CartContext);
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

  return (
    <>
        <Typography gutterBottom variant='h5' component='div'>
                        Mi carrito ({productos.length})
        </Typography>

        {(productos.length > 0) ?
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
        : <>
            <p>No hay productos agregados :(</p>
            <Link to='/'>
              <Button color="inherit">Ver productos</Button>
            </Link>
          </> } 
        
    </>
  );
}

export default Cart;
