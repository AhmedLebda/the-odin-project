import { useState } from "react";
import DetailInput from "./DetailInput";
const Personal = () => {
	const [personalDetails, setPersonalDetails] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		address: "",
	});

	const handleChange = (e) =>
		setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });

	return (
		<section className=" flex flex-col gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<h2 className="font-bold text-2xl text-blue-900 mb-4">
				Personal Details
			</h2>

			<DetailInput
				type="text"
				id="fullName"
				name="fullName"
				placeholder="First and last name"
				value={personalDetails.fullName}
				onChange={handleChange}
				label="Full name"
			/>

			<DetailInput
				type="email"
				id="email"
				name="email"
				placeholder="example@example.com"
				value={personalDetails.email}
				onChange={handleChange}
				label="E-mail"
			/>

			<DetailInput
				type="tel"
				id="phoneNumber"
				name="phoneNumber"
				placeholder="Enter phone number"
				value={personalDetails.phoneNumber}
				onChange={handleChange}
				label="Phone Number"
			/>

			<DetailInput
				type="text"
				id="address"
				name="address"
				placeholder="city, Country"
				value={personalDetails.address}
				onChange={handleChange}
				label="Address"
			/>
		</section>
	);
};

export default Personal;
