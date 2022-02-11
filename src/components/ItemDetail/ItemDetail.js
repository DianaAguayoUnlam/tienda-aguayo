// componente hijo
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
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
				<ItemCount _stock={5} _initial={1}/>
			</CardContent>
		</Card>
	);
};

export default ItemDetail;