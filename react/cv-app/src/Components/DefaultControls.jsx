const DefaultControls = ({
	defaultPersonalData,
	setPersonalData,
	defaultEducationData,
	setEducationData,
	defaultExperienceData,
	setExperienceData,
}) => {
	const loadExample = () => {
		setPersonalData({ ...defaultPersonalData });
		setEducationData([...defaultEducationData]);
		setExperienceData([...defaultExperienceData]);
	};
	const clearAllData = () => {
		setPersonalData({ fullName: "", email: "", phoneNumber: "", address: "" });
		setEducationData([]);
		setExperienceData([]);
	};
	return (
		<div className="flex justify-around gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<button
				className="font-semibold text-red-700 capitalize border rounded-md px-4 py-1 hover:bg-red-50"
				onClick={clearAllData}
			>
				clear resume
			</button>
			<button
				className="font-semibold text-blue-900 capitalize border rounded-md px-4 py-1 hover:bg-blue-50"
				onClick={loadExample}
			>
				load example
			</button>
		</div>
	);
};

export default DefaultControls;
