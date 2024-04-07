const SectionControls = ({ onSave, onCancel, onDelete, id }) => {
	return (
		<div className="flex gap-4 py-4 justify-around">
			<button
				className="rounded-md px-4 py-1 font-semibold 
				bg-red-600 hover:bg-red-700 text-white"
				onClick={() => onDelete(id)}
			>
				Delete
			</button>
			<div className="flex gap-4">
				<button
					className="rounded-md px-4 py-1 font-semibold 
				bg-slate-800 hover:bg-slate-900 text-white"
					onClick={onCancel}
				>
					Cancel
				</button>
				<button
					className="rounded-md px-4 py-1 font-semibold 
				bg-blue-600 hover:bg-blue-700 text-white"
					onClick={onSave}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default SectionControls;
