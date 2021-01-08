import React, { useRef, useState, useEffect } from 'react'
import Button from './Button'
import './ImageUpload.css'
export default function ImageUpload(props) {
	const [file, setFile] = useState()
	const [previewUrl, setPreviewUrl] = useState()
	const [isValid, setIsValid] = useState(false)
	const filePickerRef = useRef()
	const pickImageHandler = () => {
		filePickerRef.current.click()
	}

	useEffect(() => {
		if (!file) {
			return
		}
		const fileReader = new FileReader()
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result)
		}
		fileReader.readAsDataURL(file)
	}, [file])

	const pickedHandler = (event) => {
		let pickedFile
		let fileIsValid = isValid
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0]
			setFile(pickedFile)
			setIsValid(true)
			fileIsValid = true
		} else {
			fileIsValid = false
			setIsValid(false)
		}
		props.onInput(props.id, pickedFile, fileIsValid)
	}
	return (
		<div className='form-control'>
			<input
				id={props.id}
				style={{ display: 'none' }}
				type='file'
				accept='.jpg,.png,jpeg'
				ref={filePickerRef}
				onChange={pickedHandler}
			/>
			<div className={`image-upload ${props.center && 'center'}`}>
				<div className='image-upload__preview'>
					{previewUrl && <img src={previewUrl} alt='preview' />}
					{!previewUrl && <p>Please pick an image</p>}
				</div>
				<Button type='button' onClick={pickImageHandler}>
					Pick Image
				</Button>
			</div>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	)
}
