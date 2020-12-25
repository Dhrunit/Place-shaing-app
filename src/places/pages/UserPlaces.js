import React from 'react'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State building',
		description: 'Famous skyscraper',
		imageUrl:
			'https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg',
		address: '20 W 34th St, New York, NY 10001, United States',
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Empire State building',
		description: 'Famous skyscraper',
		imageUrl:
			'https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg',
		address: '20 W 34th St, New York, NY 10001, United States',
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: 'u2',
	},
]

export default function UserPlaces() {
	return (
		<div>
			<PlaceList items={DUMMY_PLACES} />
		</div>
	)
}
