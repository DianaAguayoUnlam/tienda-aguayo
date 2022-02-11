// componente padre


//importar el componente(hijo) ItemDetail dentro de ItemDetailContainer(padre)
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Importamos useParams para recibir id por parametro
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  let idParam = useParams();
	let id = idParam.id;
	console.log("itemDetailContainer", idParam);

  const [product, setProduct] = useState([]);

	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => setProduct(response.data));
	}, [id]);
    
    return (
    <>
      <ItemDetail data={product} />
    </>
    );
  };
  
export default ItemDetailContainer;
  