import React, { useState, useEffect } from 'react';

import Item from '../Item/Item';

const ItemList = () => {
	const [users, setUsers] = useState([]);

	console.log(users);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<Item data={user} />
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;