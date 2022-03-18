import * as React from 'react';
import {Card, CardMedia, CardContent, Typography} from '@mui/material';

const Item = ({ product }) => {
	return (
		<Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'
				sx={{
					fontSize: {
					  sm: 20,
					  xs: 14
					}
				  }}
				  
				>
				{product.name}
				</Typography>
				
				<CardMedia component='img' image={product.img} alt='imagen producto' />
				<Typography variant='body1' color='text.secondary' className='pt-2'>
					${product.price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Item;