import React from 'react'
import UsersList from '../components/UsersList'
export default function Users() {
	const USERS = [
		{
			id: 'u1',
			name: 'dhrunit',
			image:
				'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
			places: 3,
		},
	]
	return (
		<div>
			<UsersList items={USERS} />
		</div>
	)
}
