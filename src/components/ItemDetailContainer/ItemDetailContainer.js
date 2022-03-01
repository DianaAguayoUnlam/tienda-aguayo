// componente padre


//importar el componente(hijo) ItemDetail dentro de ItemDetailContainer(padre)
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from 'react';
// Importamos useParams para recibir id por parametro
import { useParams } from 'react-router-dom';

// Firebase
// Importamos la conexión a firebase.
import {db} from '../../Firebase/FirebaseConfig'
import {getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

  // Obtengo el parametro id mediante destructuring
  let {id} = useParams();

  const [product, setProduct] = useState([]);

	useEffect(() => {
		const getTemplates = async () => {
      // Buscamos el objeto que tenga el id solicitado.
      const docRef = doc(db, "templates", id);
      const querySnapshot = await getDoc(docRef); // getDoc para traer un solo objeto.

      /* Tambien podemos realizar la consulta de esta forma:
      const q = query(collection(db, 'templates'), where(documentId(), "==", id));
			const querySnapshot = await getDocs(q); 
      */

      // Creamos un nuevo objeto para agregar el id
			const template = {...querySnapshot.data(), id: querySnapshot.id}
			setProduct(template);
		}
		getTemplates();
	}, [id]);

    return (
    <>
      <ItemDetail data={product} />
    </>
    );
  };
  
export default ItemDetailContainer;
  