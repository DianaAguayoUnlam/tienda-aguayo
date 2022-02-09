// componente hijo
import * as React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemDetail = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }} style={{ margin: 40, minWidth: 800 }}>
			<CardMedia component='img' image={data.hdurl} alt='imagen nasa' />
			<CardContent>
				<Typography gutterBottom variant='h2' component='div'>
					{data.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.explanation}
				</Typography>
				<Typography variant='h3' color='text.secondary'>
					{data.copyright}
				</Typography>
				<Typography variant='h4' color='text.primary'>
					{data.date}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ItemDetail;