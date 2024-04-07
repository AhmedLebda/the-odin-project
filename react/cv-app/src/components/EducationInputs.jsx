import DetailInput from "./DetailInput";
import SectionControls from "./SectionControls";

const EducationInputs = ({
	details,
	onChange,
	onSave,
	onCancel,
	id,
	onDelete,
}) => {
	const { school, degree, startDate, endDate, location } = details;
	return (
		<>
			<DetailInput
				type="text"
				id="school"
				name="school"
				placeholder="Enter school/ university"
				value={school}
				onChange={onChange}
				label="School"
			/>
			<DetailInput
				type="text"
				id="degree"
				name="degree"
				placeholder="Enter degree/ field of study"
				value={degree}
				onChange={onChange}
				label="Degree"
			/>
			<DetailInput
				type="text"
				id="startDate"
				name="startDate"
				placeholder="Enter start date"
				value={startDate}
				onChange={onChange}
				label="Start Date"
			/>
			<DetailInput
				type="text"
				id="endDate"
				name="endDate"
				placeholder="Enter end date"
				value={endDate}
				onChange={onChange}
				label="End Date"
			/>
			<DetailInput
				type="text"
				id="location"
				name="location"
				placeholder="Enter location"
				value={location}
				onChange={onChange}
				label="Location"
			/>

			<SectionControls
				onSave={onSave}
				onCancel={onCancel}
				id={id}
				onDelete={onDelete}
			/>
		</>
	);
};

export default EducationInputs;
