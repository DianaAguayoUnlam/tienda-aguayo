import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Item from '../Item/Item';
import { Link } from 'react-router-dom';

// Firebase
// Importamos la conexión a firebase.
import {db} from '../../Firebase/FirebaseConfig'
import {collection, query, getDocs} from 'firebase/firestore';


const ItemList = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {

		const getTemplates = async () => {
			const q = query(collection(db, "templates"));
			const querySnapshot = await getDocs(q);
			console.log(querySnapshot );
			const docs = [];
			querySnapshot.forEach((doc) => {
			// Creamos un nuevo array para agregar el id a la lista de objetos
			docs.push({...doc.data(), id: doc.id});
			});
			setProducts(docs);
		}
		getTemplates();
	}, []);

	return (
	<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Link to={`/item/${product.id}`} underline="none">
				<Item product={product} />
			</Link>
          </Grid>
        ))}
      </Grid>
    </Box>
	);
};

export default ItemList;