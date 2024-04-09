import PreviewPersonalInfo from "./PreviewPersonalInfo";
import PreviewOptionsContent from "./PreviewOptionsContent";
const Preview = ({ personalData, educationData, experienceData }) => {
	return (
		<div className="break-all flex-1 bg-white shadow-lg max-w-2xl min-w-lg min-w-[400px]">
			<PreviewPersonalInfo personalData={personalData} />
			<PreviewOptionsContent
				educationData={educationData}
				experienceData={experienceData}
			/>
		</div>
	);
};

export default Preview;
