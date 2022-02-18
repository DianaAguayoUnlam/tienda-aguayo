// componente hijo
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";
// Context
import { CartContext } from '../../CartContext';
import {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

	const {productos, setProductos, saveProduct} = useContext(CartContext);

	const [cantidad, setCantidad] = useState(1);

	return (
		<Card sx={{ maxWidth: 345 }} style={{ margin: 40 }}>
			
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					{data.title}
				</Typography>

				<CardMedia component='img' image={data.url} alt='imagen producto' />

				<Typography variant='p' color='text.secondary'>
					{data.title, data.title}
				</Typography>

				<ItemCount _stock={5} cantidad={cantidad} setCantidad={setCantidad}/>

				<button onClick={() => saveProduct({data, cantidad})}>
					Agregar
				</button>
				<Link to='/'>
					<button sx={{ flexGrow: 1 }}>
					Terminar compra
					</button>
				</Link>
			</CardContent>
		</Card>
	);
};

export default ItemDetail;