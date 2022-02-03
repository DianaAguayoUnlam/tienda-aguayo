import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item = ({ data }) => {
	return (
		<Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{data.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.body}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Item;