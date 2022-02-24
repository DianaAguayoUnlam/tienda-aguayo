// componente padre


//importar el componente(hijo) ItemDetail dentro de ItemDetailContainer(padre)
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Importamos useParams para recibir id por parametro
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  // Hardcodeo lista de productos para simular api
  const productList = [
    { id: 1, name: 'Landing Page "Beauty"', price: 2000, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 2, name: 'Diseño corporativo', price: 1500, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 3, name: 'Portafolio personal', price: 2500, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 4, name: 'Plantilla Login', price: 700, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
		{ id: 5, name: 'Plantilla Slider', price: 700, img: 'https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_960_720.png' },
  ];

  let idParam = useParams();
	let id = idParam.id;

  const [product, setProduct] = useState([]);
  /*
	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => setProduct(response.data));
	}, [id]);
  */

  useEffect(() => {
    setProduct(productList.filter(p => p.id == id)[0]); // simulo consulta a la api
  }, [id]); // Se realiza cada vez que cambia el id

    return (
    <>
      <ItemDetail data={product} />
    </>
    );
  };
  
export default ItemDetailContainer;
  