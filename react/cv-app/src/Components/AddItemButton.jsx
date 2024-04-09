const AddItemButton = ({ title, onItemAdd }) => {
	return (
		<button
			className="px-4 py-2 border capitalize"
			onClick={onItemAdd}
		>{`add ${title}`}</button>
	);
};

export default AddItemButton;
