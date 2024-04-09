import PersonalDetails from "./PersonalDetails";
import ExtraOption from "./ExtraOption";
import inputData from "../utils/inputData";
import dataTemplate from "../utils/dataTemplate";
import DefaultControls from "./DefaultControls";

const Options = ({
	personalData,
	setPersonalData,
	educationData,
	setEducationData,
	prevEducationData,
	setPrevEducationData,
	experienceData,
	setExperienceData,
	prevExperienceData,
	setPrevExperienceData,
}) => {
	return (
		<aside className=" flex flex-col gap-8 items-center rounded-md basis-1/3 max-w-md">
			<DefaultControls
				setPersonalData={setPersonalData}
				defaultPersonalData={dataTemplate.examplePersonalData}
				setEducationData={setEducationData}
				setPrevEducationData={setPrevEducationData}
				defaultEducationData={dataTemplate.exampleEducationData}
				setExperienceData={setExperienceData}
				setPrevExperienceData={setPrevExperienceData}
				defaultExperienceData={dataTemplate.exampleExperienceData}
			/>
			<PersonalDetails
				personalData={personalData}
				setPersonalData={setPersonalData}
				personalInputsData={inputData.personalInputsData}
			/>
			<ExtraOption
				optionTitle="Education"
				data={educationData}
				setData={setEducationData}
				prevData={prevEducationData}
				setPrevData={setPrevEducationData}
				inputData={inputData.educationInputsData}
				newItem={dataTemplate.getNewEducationItem()}
			/>
			<ExtraOption
				optionTitle="Experience"
				data={experienceData}
				setData={setExperienceData}
				prevData={prevExperienceData}
				setPrevData={setPrevExperienceData}
				inputData={inputData.experienceInputsData}
				newItem={dataTemplate.getNewExperienceItem()}
			/>
		</aside>
	);
};

export default Options;
