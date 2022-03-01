import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Item from '../../components/Item/Item';
import { Link, useParams } from 'react-router-dom';

// Firebase
// Importamos la conexión a firebase.
import {db} from '../../Firebase/FirebaseConfig'
import {collection, query, getDocs, where} from 'firebase/firestore';


const Category = () => {

	const [categoryProducts, setCategoryProducts] = useState([]);
    // Obtengo el parametro id mediante destructuring
    let {id} = useParams();

	useEffect(() => {

		const getTemplates = async () => {
			const q = query(collection(db, "templates"), where("category", "==", id));
			const querySnapshot = await getDocs(q);
			console.log(querySnapshot );
			const docs = [];
			querySnapshot.forEach((doc) => {
			// Creamos un nuevo array para agregar el id a la lista de objetos
			docs.push({...doc.data(), id: doc.id});
			});
            setCategoryProducts(docs);
		}
		getTemplates();
	}, [id]);

	return (
	<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {categoryProducts.map((product) => (
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

export default Category;