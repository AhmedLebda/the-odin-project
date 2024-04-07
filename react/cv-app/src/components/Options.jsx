import Personal from "./Personal";
import Education from "./Education";

const Options = ({ personalDetails, onPersonalChange }) => {
	return (
		<aside className=" flex flex-col gap-8 items-center rounded-md basis-1/3 max-w-md">
			<Personal
				personalDetails={personalDetails}
				onPersonalChange={onPersonalChange}
			/>
			<Education />
		</aside>
	);
};

export default Options;
