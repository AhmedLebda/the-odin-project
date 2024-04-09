import OptionHeader from "./OptionHeader";
import Form from "./Form";
import { useState } from "react";

const PersonalDetails = ({
	personalData,
	setPersonalData,
	personalInputsData,
}) => {
	const [isOpen, setIsOpen] = useState(true);
	const onSectionOpen = () => {
		setIsOpen(!isOpen);
	};
	const onPersonalDataChange = (e) => {
		setPersonalData({ ...personalData, [e.target.name]: e.target.value });
	};
	return (
		<div className="flex flex-col gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<OptionHeader title="Personal" onOpen={onSectionOpen} isOpen={isOpen} />
			{isOpen && (
				<Form
					inputData={personalInputsData}
					dataState={personalData}
					onDataChange={onPersonalDataChange}
				/>
			)}
		</div>
	);
};

export default PersonalDetails;
