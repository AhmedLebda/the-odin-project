import OptionHeader from "./OptionHeader";
import Form from "./Form";
import { useState } from "react";

const PersonalDetails = ({
	personalData,
	onPersonalDataChange,
	personalInputsData,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const onSectionOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex flex-col gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<OptionHeader
				title="Personal Details"
				onOpen={onSectionOpen}
				isOpen={isOpen}
			/>
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
