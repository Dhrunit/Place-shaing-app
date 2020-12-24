import React from 'react'
import UsersList from '../components/UsersList'
export default function Users() {
	const USERS = [
		{
			id: 'u1',
			name: 'dhrunit',
			image: 'etc',
			places: 3,
		},
	]
	return (
		<div>
			<UsersList items={USERS} />
		</div>
	)
}
