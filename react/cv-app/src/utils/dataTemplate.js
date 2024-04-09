const getNewEducationItem = () => {
	return {
		id: Date.now(),
		school: "",
		degree: "",
		startDate: "",
		endDate: "",
		location: "",
	};
};
const getNewExperienceItem = () => {
	return {
		id: Date.now(),
		companyName: "",
		positionTitle: "",
		startDate: "",
		endDate: "",
		location: "",
		description: "",
	};
};

export default { getNewEducationItem, getNewExperienceItem };
