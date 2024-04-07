import DetailInput from "./DetailInput";
const Personal = ({ personalDetails, onPersonalChange }) => {
	const { fullName, email, phoneNumber, address } = personalDetails;

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
				value={fullName}
				onChange={onPersonalChange}
				label="Full name"
			/>

			<DetailInput
				type="email"
				id="email"
				name="email"
				placeholder="example@example.com"
				value={email}
				onChange={onPersonalChange}
				label="E-mail"
			/>

			<DetailInput
				type="tel"
				id="phoneNumber"
				name="phoneNumber"
				placeholder="Enter phone number"
				value={phoneNumber}
				onChange={onPersonalChange}
				label="Phone Number"
			/>

			<DetailInput
				type="text"
				id="address"
				name="address"
				placeholder="city, Country"
				value={address}
				onChange={onPersonalChange}
				label="Address"
			/>
		</section>
	);
};

export default Personal;
