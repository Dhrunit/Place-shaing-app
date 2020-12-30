import React from 'react'
import Button from '../../shared/components/FormElements/Button'

import Input from '../../shared/components/FormElements/Input'
import Card from '../../shared/components/UIElements/Card'
import { useForm } from '../../shared/hooks/form-hook'
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'
import './Auth.css'
export default function Auth() {
	const [formState, inputHandler] = useForm({
		email: {
			value: '',
			isValid: false,
		},
		password: {
			value: '',
			isValid: false,
		},
	})
	return (
		<Card className='authentication'>
			<h2>Login required</h2>
			<hr />
			<form>
				<Input
					element='input'
					type='email'
					id='email'
					label='E-Mail'
					validators={[VALIDATOR_EMAIL()]}
					errorText='Please enter a valid email address'
					onInput={inputHandler}
				/>
				<Input
					element='input'
					type='Password'
					id='password'
					label='Password'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid Password (Atleast 5 characters)'
					onInput={inputHandler}
				/>
				{console.log(formState)}
				<Button type='submit' disabled={!formState.isValid}>
					Login
				</Button>
			</form>
		</Card>
	)
}
