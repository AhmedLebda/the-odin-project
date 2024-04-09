import PreviewOptionHeader from "./PreviewOptionHeader";
import PreviewOption from "./PreviewOption";
const PreviewOptionsContent = ({ educationData, experienceData }) => {
	return (
		<div className="px-6">
			{educationData.length > 0 && <PreviewOptionHeader title="education" />}
			{educationData.map((item) => (
				<PreviewOption key={item.id} data={item} title="education" />
			))}
			{experienceData.length > 0 && <PreviewOptionHeader title="experience" />}
			{experienceData.map((item) => (
				<PreviewOption key={item.id} data={item} title="experience" />
			))}
		</div>
	);
};

export default PreviewOptionsContent;
