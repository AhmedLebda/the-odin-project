import Options from "./components/Options";
import Resume from "./components/Resume";
import { useState } from "react";
function App() {
	const [personalDetails, setPersonalDetails] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		address: "",
	});

	const onPersonalChange = (e) =>
		setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
	return (
		<main className="flex gap-8 min-h-screen bg-gray-100 p-4 justify-center">
			<Options
				personalDetails={personalDetails}
				onPersonalChange={onPersonalChange}
			/>
			<Resume personalDetails={personalDetails} />
		</main>
	);
}

export default App;
