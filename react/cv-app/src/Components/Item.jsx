import Form from "./Form";
import FormControls from "./FormControls";

const Item = ({
	itemStateData,
	setData,
	data,
	prevData,
	setPrevData,
	isActive,
	setActive,
	resetActive,
	inputData,
}) => {
	const onDataChange = (e) => {
		itemStateData = { ...itemStateData, [e.target.name]: e.target.value };
		setData(
			data.map((item) =>
				item.id === itemStateData.id ? { ...item, ...itemStateData } : item
			)
		);
	};

	const ItemTitle = Object.values(itemStateData)[1];

	const onDelete = () => {
		const updatedData = data.filter((item) => item.id !== itemStateData.id);
		setData(updatedData);
		setPrevData(updatedData);
		resetActive();
	};
	const onSave = () => {
		if (ItemTitle.length === 0) {
			alert(`First field can't be empty`);
			return;
		}

		setPrevData(data);
		resetActive();
	};
	const onCancel = () => {
		setData(prevData);
		resetActive();
	};

	return (
		<div>
			{isActive ? (
				<>
					<Form
						inputData={inputData}
						dataState={itemStateData}
						onDataChange={onDataChange}
					/>
					<FormControls
						onSave={onSave}
						onCancel={onCancel}
						onDelete={onDelete}
					/>
				</>
			) : (
				<button
					className="text-left border-2 p-2 rounded-md w-full"
					onClick={() => setActive(itemStateData.id)}
				>
					{ItemTitle}
				</button>
			)}
		</div>
	);
};

export default Item;
