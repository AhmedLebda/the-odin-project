import PreviewHeader from "./PreviewHeader";

const Preview = ({ personalData }) => {
	return (
		<div className=" flex-1 bg-white shadow-lg max-w-2xl min-w-lg min-w-[400px]">
			<PreviewHeader personalData={personalData} />
		</div>
	);
};

export default Preview;
