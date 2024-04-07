const SectionHeader = ({ isOpened, onClick }) => {
	return (
		<div className="flex justify-between items-center ">
			<h2 className="font-bold text-2xl text-blue-900 mb-4">Education</h2>
			<button
				className="border rounded-md px-2 py-2 text-xs font-semibold capitalize hover:bg-slate-50"
				onClick={onClick}
			>
				{isOpened ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default SectionHeader;
