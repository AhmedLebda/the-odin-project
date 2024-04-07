import ResumeHeader from "./ResumeHeader";

const Resume = ({ personalDetails }) => {
	const { fullName, email, phoneNumber, address } = personalDetails;

	return (
		<div className=" flex-1 bg-white shadow-lg max-w-2xl min-w-lg min-w-[400px]">
			<ResumeHeader
				fullName={fullName}
				email={email}
				phoneNumber={phoneNumber}
				address={address}
			/>
		</div>
	);
};

export default Resume;
