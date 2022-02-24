import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = () => {
	const productList = [
		{ id: 1, name: 'Landing Page "Beauty"', price: 2000, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 2, name: 'Diseño corporativo', price: 1500, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 3, name: 'Portafolio personal', price: 2500, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 4, name: 'Plantilla Login', price: 700, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 5, name: 'Plantilla Slider', price: 700, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
	];

	const [products, setProducts] = useState(productList);

/*	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);
*/

	return (
	<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Link to={`/item/${product.id}`}>
				<Item product={product} />
			</Link>
          </Grid>
        ))}
      </Grid>
    </Box>
	);
};

export default ItemList;