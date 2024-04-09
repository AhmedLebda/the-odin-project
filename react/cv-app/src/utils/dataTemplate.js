import uniqid from "uniqid";

const getNewEducationItem = () => {
	return {
		id: uniqid(),
		school: "",
		degree: "",
		startDate: "",
		endDate: "",
		location: "",
	};
};
const getNewExperienceItem = () => {
	return {
		id: uniqid(),
		companyName: "",
		positionTitle: "",
		startDate: "",
		endDate: "",
		location: "",
		description: "",
	};
};

const examplePersonalData = {
	fullName: "Josephine Meyers",
	email: "josephine.meyers@mail.co.uk",
	phoneNumber: "+44 3245 5521 5521",
	address: "London, UK",
};

const exampleEducationData = [
	{
		id: uniqid(),
		school: "London City University",
		degree: "Bachelors in Economics",
		startDate: "08/2020",
		endDate: "present",
		location: "New York City, US",
	},
	{
		id: uniqid(),
		school: "Hidden University",
		degree: "Master's Degree in Math",
		startDate: "08/2020",
		endDate: "present",
		location: "New York City, US",
	},
];
const exampleExperienceData = [
	{
		id: uniqid(),
		companyName: "Umbrella Inc.",
		positionTitle: "UX & UI Designer",
		startDate: "08/2020",
		endDate: "present",
		location: "New York City, US",
		description:
			"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
	},
	{
		id: uniqid(),
		companyName: "Black Mesa Labs",
		positionTitle: "UX Research Assistant",
		startDate: "04/2018",
		endDate: "02/2019",
		location: "Berlin, Germany",
		description:
			"Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
	},
];

export default {
	getNewEducationItem,
	getNewExperienceItem,
	examplePersonalData,
	exampleEducationData,
	exampleExperienceData,
};
