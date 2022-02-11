import React, { useState, useEffect } from 'react';

import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = () => {
	const [users, setUsers] = useState([]);

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
						<Link to={`/item/${user.id}`}>
							<Item data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;