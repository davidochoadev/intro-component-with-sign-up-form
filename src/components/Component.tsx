import React, { useState } from 'react'

enum namesErrorState {
	None = 'none',
	TooShort = 'tooShort',
	Wrong = 'wrong'
}
const Comp = () => {
	const inputClass: string =
		'py-4 px-4 rounded-md border border-gray-300 font-medium placeholder:text-gray-500 '
	const errorClass: string = 'text-red-500 text-sm px-4'
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [nameError, setNameError] = useState<namesErrorState>(namesErrorState.None)
	const [lastNameError, setLastNameError] = useState<namesErrorState>(namesErrorState.None)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!firstName && firstName.length === 0) {
			setNameError(namesErrorState.TooShort)
		} else if (!/^[a-zA-Z ]*$/.test(firstName)) {
			setNameError(namesErrorState.Wrong)
		} else {
			setNameError(namesErrorState.None)
		}
	}

	const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(event.target.value)
		if (event.target.value.length === 0) {
			setNameError(namesErrorState.TooShort)
		} else if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
			setNameError(namesErrorState.Wrong)
		} else {
			setNameError(namesErrorState.None)
		}
	}
	const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(event.target.value)
		if (event.target.value.length === 0) {
			setLastNameError(namesErrorState.TooShort)
		} else if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
			setLastNameError(namesErrorState.Wrong)
		} else {
			setLastNameError(namesErrorState.None)
		}
	}

	return (
		<form className="my-4 flex flex-col gap-4 rounded-lg bg-white p-5 " onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="First Name"
				name="name"
				className={`${inputClass}`}
				value={firstName}
				onChange={handleFirstName}
			/>
			{nameError === namesErrorState.TooShort ? (
				<p className={`${errorClass}`}>Please enter your first name 🙏🏻</p>
			) : nameError === namesErrorState.Wrong ? (
				<p className={`${errorClass}`}>Please enter a valid first name 😵</p>
			) : null}
			<input
				type="text"
				placeholder="Last Name"
				name="last-name"
				className={`${inputClass}`}
				value={lastName}
				onChange={handleLastName}
			/>
			{lastNameError === namesErrorState.TooShort ? (
				<p className={`${errorClass}`}>Please enter your last name 🙇🏻‍♂️</p>
			) : lastNameError === namesErrorState.Wrong ? (
				<p className={`${errorClass}`}>Please enter a valid last name 🤷🏻‍♂️</p>
			) : null}
			<input type="text" placeholder="Email Address" name="email" className={`${inputClass}`} />
			<input type="password" placeholder="Password" name="password" className={`${inputClass}`} />
			<button
				type="submit"
				className="hover:#06874e rounded-lg bg-[#37cc8a] py-4 font-bold text-white duration-300"
			>
				CLAIM YOUR FREE TRIAL
			</button>
			<p className="px-8 text-center text-xs font-medium text-gray-400">
				By clicking the button, you are agreeing to our{' '}
				<a
					href="/intro-component-with-sign-up-form/terms"
					className="font-bold text-[#ff7978] duration-300 hover:text-[#b43736]"
				>
					Terms and Services
				</a>
			</p>
		</form>
	)
}

export default Comp
