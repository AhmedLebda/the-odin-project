import CvOptions from "./components/CvOptions";
import CvResult from "./components/CvResult";

function App() {
	return (
		<main className="flex gap-8 min-h-screen bg-gray-100 p-4 justify-center">
			<CvOptions />
			<CvResult />
		</main>
	);
}

export default App;
