import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faGraduationCap,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const OptionHeader = ({ title, onOpen, isOpen }) => {
	let icon;
	if (title === "Personal") {
		icon = (
			<span className="mr-2">
				<FontAwesomeIcon icon={faUser} />
			</span>
		);
	} else if (title === "Education") {
		icon = (
			<span className="mr-2">
				<FontAwesomeIcon icon={faGraduationCap} />
			</span>
		);
	} else {
		icon = (
			<span className="mr-2">
				<FontAwesomeIcon icon={faBriefcase} />
			</span>
		);
	}
	return (
		<div className="flex justify-between items-center ">
			<h2 className="font-bold text-2xl text-blue-900 mb-4">
				{icon}
				{title}
			</h2>
			<button
				className="border rounded-md px-2 py-2 text-xs font-semibold capitalize hover:bg-slate-50"
				onClick={onOpen}
			>
				{isOpen ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default OptionHeader;
