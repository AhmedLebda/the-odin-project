import Options from "./Components/Options";
import Preview from "./Components/Preview";
import { useState } from "react";

function App() {
	const [personalData, setPersonalData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		address: "",
	});
	const [educationData, setEducationData] = useState([]);
	const [prevEducationData, setPrevEducationData] = useState([]);
	const [experienceData, setExperienceData] = useState([]);
	const [prevExperienceData, setPrevExperienceData] = useState([]);

	return (
		<main className="flex gap-8 min-h-screen bg-gray-100 p-4 justify-center">
			<Options
				personalData={personalData}
				setPersonalData={setPersonalData}
				educationData={educationData}
				setEducationData={setEducationData}
				prevEducationData={prevEducationData}
				setPrevEducationData={setPrevEducationData}
				experienceData={experienceData}
				setExperienceData={setExperienceData}
				prevExperienceData={prevExperienceData}
				setPrevExperienceData={setPrevExperienceData}
			/>
			<Preview
				personalData={personalData}
				educationData={educationData}
				experienceData={experienceData}
			/>
		</main>
	);
}

export default App;
