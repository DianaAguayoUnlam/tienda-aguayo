// componente padre


//importar el componente(hijo) ItemDetail dentro de ItemDetailContainer(padre)
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemDetailContainer = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {
		axios(
			'https://api.nasa.gov/planetary/apod?api_key=tdbrx6dXd7hn0saLy3dOO3EUYVoENGCRcXwscve9'
		).then((res) => setData(res.data));
	}, []);
    
    return (
    <>
      <ItemDetail data={data} />
    </>
    );
  };
  
export default ItemDetailContainer;
  