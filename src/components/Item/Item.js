import * as React from 'react';
import {Card, CardMedia, CardContent, Typography} from '@mui/material';

const Item = ({ product }) => {
	return (
		<Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
			<CardContent>
			<Typography gutterBottom variant='h5' component='div'>
				{product.name}
				</Typography>
				
				<CardMedia component='img' image={product.img} alt='imagen producto' />
				<Typography variant='body2' color='text.secondary'>
					${product.price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Item;