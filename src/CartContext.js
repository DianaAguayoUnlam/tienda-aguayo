import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

// STATE que le pasamos al useState
const initialState = [];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartProvider = ({ children }) => {
	const [productos, setProductos] = useState(initialState);

	let saveProduct = (producto) => {
		// Busco el producto en la lista de productos
		let result = productos.filter((item)=> {
			return item.data.id == producto.data.id;
		  });

		  // Si el producto no está agregado
		  if(result.length == 0){
			productos.push(producto); // lo agregamos
			setProductos(productos);
			console.log("Producto agregado.", productos);
		  }else{
			console.log("Ya agregaste este producto.", productos);
		  }
		}

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<CartContext.Provider value={{productos, setProductos, saveProduct}}>
			{/* 4 - PROPS.CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};