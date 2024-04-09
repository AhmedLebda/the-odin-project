import { useState } from "react";
import OptionHeader from "./OptionHeader";
import Item from "./Item";
import AddItemButton from "./AddItemButton";

const ExtraOption = ({
	optionTitle,
	data,
	setData,
	prevData,
	setPrevData,
	inputData,
	newItem,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeItemId, setActiveItemId] = useState(null);

	const onSectionOpen = () => {
		setIsOpen(!isOpen);
	};
	const setActive = (id) => {
		setActiveItemId(id);
	};
	const resetActive = () => {
		setActiveItemId(null);
	};

	const onItemAdd = () => {
		setData([...data, newItem]);
		setActiveItemId(newItem.id);
	};

	return (
		<div className="flex flex-col gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<OptionHeader
				title={optionTitle}
				onOpen={onSectionOpen}
				isOpen={isOpen}
			/>
			{isOpen && (
				<>
					{data.map((item) => (
						<Item
							key={item.id}
							itemStateData={item}
							data={data}
							setData={setData}
							prevData={prevData}
							setPrevData={setPrevData}
							isActive={item.id === activeItemId}
							setActive={setActive}
							resetActive={resetActive}
							inputData={inputData}
						/>
					))}

					{!activeItemId && (
						<AddItemButton title={optionTitle} onItemAdd={onItemAdd} />
					)}
				</>
			)}
		</div>
	);
};

export default ExtraOption;
