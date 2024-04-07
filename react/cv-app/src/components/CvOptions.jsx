import Personal from "./Personal";
import Education from "./Education";

const CvOptions = () => {
	return (
		<aside className=" flex flex-col gap-8 items-center rounded-md basis-1/3 max-w-md">
			<Personal />
			<Education />
		</aside>
	);
};

export default CvOptions;
