import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import PlaceList from '../components/PlaceList'
import { useHttpCLient } from '../../shared/hooks/http-hook'
export default function UserPlaces() {
	const [loadedPlaces, setIsLoadedPlaces] = useState()
	const { isLoading, error, sendRequest, clearError } = useHttpCLient()
	const userId = useParams().userId

	useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const responseData = await sendRequest(
					`http://localhost:5000/api/places/user/${userId}`
				)
				setIsLoadedPlaces(responseData.places)
			} catch (error) {}
		}
		fetchPlaces()
	}, [sendRequest, userId])

	return (
		<>
			<ErrorModal error={error} onClear={clearError} />
			{isLoading && (
				<div className='center'>
					<LoadingSpinner asOverlay />
				</div>
			)}
			{!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
		</>
	)
}
