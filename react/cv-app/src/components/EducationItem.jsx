import { useState } from "react";
import EducationInputs from "./EducationInputs";

const EducationItem = ({ active, id, onShow, onClose, onDelete }) => {
	const initialDetails = {
		school: "Hidden University",
		degree: "",
		startDate: "",
		endDate: "",
		location: "",
	};

	const [EducationDetails, setEducationDetails] = useState(initialDetails);
	const [prevDetails, setPrevDetails] = useState(initialDetails);

	const handleChange = (e) =>
		setEducationDetails({
			...EducationDetails,
			[e.target.name]: e.target.value,
		});

	const handleSave = () => {
		onClose();
		setPrevDetails({ ...prevDetails, ...EducationDetails });
	};

	const handleCancel = () => {
		onClose();
		setEducationDetails({ ...EducationDetails, ...prevDetails });
	};
	return (
		<>
			{active ? (
				<>
					<EducationInputs
						details={EducationDetails}
						onChange={handleChange}
						onSave={handleSave}
						onCancel={handleCancel}
						onDelete={onDelete}
						id={id}
					/>
				</>
			) : (
				<button
					className="text-left border-2 p-2 rounded-md"
					onClick={() => onShow(id)}
				>
					{prevDetails.school}
				</button>
			)}
		</>
	);
};

export default EducationItem;
