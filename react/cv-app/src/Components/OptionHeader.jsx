const OptionHeader = ({ title, onOpen, isOpen }) => {
	return (
		<div className="flex justify-between items-center ">
			<h2 className="font-bold text-2xl text-blue-900 mb-4">{title}</h2>
			<button
				className="border rounded-md px-2 py-2 text-xs font-semibold capitalize hover:bg-slate-50"
				onClick={onOpen}
			>
				{isOpen ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default OptionHeader;
