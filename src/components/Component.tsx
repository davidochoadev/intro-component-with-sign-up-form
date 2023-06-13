import React, { useState } from 'react';

enum errorStates {
	None = 'none',
	TooShort = 'tooShort',
	Wrong = 'wrong'
}
const Comp = () => {
	const inputClass: string =
		'py-4 px-4 rounded-md border border-gray-300 font-medium placeholder:text-gray-500 ';
	const errorClass: string = 'text-red-500 text-sm px-4';

	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [psw, setPsw] = useState<string>('');

	const [nameError, setNameError] = useState<errorStates>(errorStates.None);
	const [lastNameError, setLastNameError] = useState<errorStates>(errorStates.None);
	const [emailError, setEmailError] = useState<errorStates>(errorStates.None);
	const [pswError, setPswError] = useState<errorStates>(errorStates.None);

	const validateString = (value: string) => {
		if (value.length === 0) {
			return errorStates.TooShort;
		} else if (!/^[a-zA-Z ]*$/.test(value)) {
			return errorStates.Wrong;
		} else {
			return errorStates.None;
		}
	};
	const validateMail = (value: string) => {
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
			return errorStates.Wrong;
		} else {
			return errorStates.None;
		}
	};

	const validatePsw = (psw: string) => {
		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(psw)) {
			return errorStates.Wrong;
		} else {
			return errorStates.None;
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const nameErrorState = validateString(firstName);
		setNameError(nameErrorState);
		const lastNameErrorState = validateString(lastName);
		setLastNameError(lastNameErrorState);
		const emailErrorState = validateMail(email);
		setEmailError(emailErrorState);
		const pswErrorState = validatePsw(psw);
		setPswError(pswErrorState);
	};

	const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
		setFirstName(event.target.value);
		if (event.target.value.length === 0) {
			setNameError(errorStates.TooShort);
		} else if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
			setNameError(errorStates.Wrong);
		} else {
			setNameError(errorStates.None);
		}
	};
	const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
		setLastName(event.target.value);
		if (event.target.value.length === 0) {
			setLastNameError(errorStates.TooShort);
		} else if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
			setLastNameError(errorStates.Wrong);
		} else {
			setLastNameError(errorStates.None);
		}
	};
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
		setEmail(event.target.value);
		if (event.target.value.length === 0) {
			setEmailError(errorStates.TooShort);
		} else if (
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				event.target.value
			)
		) {
			setEmailError(errorStates.Wrong);
		} else {
			setEmailError(errorStates.None);
		}
	};

	const handlePsw = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log(event.target.value);
		setPsw(event.target.value);
		if (event.target.value.length === 0) {
			setPswError(errorStates.TooShort);
		} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(event.target.value)) {
			setPswError(errorStates.Wrong);
		} else {
			setPswError(errorStates.None);
		}
	};

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
			{nameError === errorStates.TooShort ? (
				<p className={`${errorClass}`}>Please enter your first name 🙏🏻</p>
			) : nameError === errorStates.Wrong ? (
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
			{lastNameError === errorStates.TooShort ? (
				<p className={`${errorClass}`}>Please enter your last name 🙇🏻‍♂️</p>
			) : lastNameError === errorStates.Wrong ? (
				<p className={`${errorClass}`}>Please enter a valid last name 🤷🏻‍♂️</p>
			) : null}
			<input
				type="text"
				placeholder="Email Address"
				name="email"
				className={`${inputClass}`}
				value={email}
				onChange={handleEmail}
			/>
			{emailError === errorStates.TooShort ? (
				<p className={`${errorClass}`}>Please enter your email address 📧</p>
			) : emailError === errorStates.Wrong ? (
				<p className={`${errorClass}`}>Please enter a valid email address 🥹</p>
			) : null}
			<input
				type="password"
				placeholder="Password"
				name="password"
				className={`${inputClass}`}
				value={psw}
				onChange={handlePsw}
			/>
			{pswError === errorStates.TooShort ? (
				<p className={`${errorClass}`}>Please enter your password 🙏</p>
			) : pswError === errorStates.Wrong ? (
				<p className={`${errorClass}`}>Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character. 😵</p>
			) : null}
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
	);
};

export default Comp;
