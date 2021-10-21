import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import './PlaceForm.css';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
	const [formState, inputHandler] = useForm(
		{
			title: { value: '', isValid: false },
			description: { value: '', isValid: false },
			address: { value: '', isValid: false },
		},
		false,
	);

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	return (
		<div>
			<form className="place-form" onSubmit={submitHandler}>
				<Input
					id="title"
					element="input"
					label="Title : "
					validators={[VALIDATOR_REQUIRE()]}
					onInput={inputHandler}
					errorText="Please enter a valid title"
				/>
				<Input
					id="description"
					element="textarea"
					label="Description : "
					validators={[VALIDATOR_MINLENGTH(5)]}
					onInput={inputHandler}
					errorText="Please enter at least 5 characters"
				/>{' '}
				<Input
					id="address"
					element="textarea"
					label="Address : "
					validators={[VALIDATOR_MINLENGTH(5)]}
					onInput={inputHandler}
					errorText="Please enter at least 5 characters"
				/>
				<Button type="submit" disabled={!formState.isValid}>
					SUBMIT
				</Button>
			</form>
		</div>
	);
};

export default NewPlace;
