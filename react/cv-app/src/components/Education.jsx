import { useState } from "react";
import SectionHeader from "./SectionHeader";
import EducationItem from "./EducationItem";

const Education = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [educationList, setEducationList] = useState([]);
	const [idCounter, setIdCounter] = useState(0);
	const [activeId, setActiveId] = useState(null);

	const handleOpen = () => {
		setIsOpened(!isOpened);
	};
	const showItem = (id) => {
		setActiveId(id);
	};
	const resetActive = () => {
		setActiveId(null);
	};
	const OnDelete = (id) => {
		setEducationList(educationList.filter((item) => item.id !== id));
		setActiveId(null);
	};
	const handleAddEducation = () => {
		setEducationList([
			...educationList,
			{
				key: idCounter,
				id: idCounter,
				active: true,
				onShow: showItem,
				onClose: resetActive,
				onDelete: OnDelete,
			},
		]);
		setActiveId(idCounter);
		setIdCounter(idCounter + 1);
	};

	const EducationItems = educationList
		.map((item) =>
			item.id === activeId
				? { ...item, active: true }
				: { ...item, active: false }
		)
		.map((item) => (
			<EducationItem
				key={item.key}
				id={item.id}
				active={item.active}
				onShow={item.onShow}
				onClose={item.onClose}
				onDelete={item.onDelete}
			/>
		));
	return (
		<section className="flex flex-col gap-2 p-4 self-start rounded-md shadow-lg bg-white w-full">
			<SectionHeader onClick={handleOpen} isOpened={isOpened} />

			{isOpened && (
				<>
					{/* <EducationItem active={activeId === 0} onShow={showItem} />
					<EducationItem active={activeId === 1} onShow={showItem} /> */}
					{EducationItems}
					{activeId === null && (
						<button className="px-4 py-2 border" onClick={handleAddEducation}>
							Add Education
						</button>
					)}
				</>
			)}
		</section>
	);
};

export default Education;
