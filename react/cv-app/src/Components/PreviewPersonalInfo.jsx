import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const PreviewPersonalInfo = ({ personalData }) => {
	const { fullName, email, phoneNumber, address } = personalData;
	return (
		<header className="  bg-blue-900 text-white text-center p-6 min-h-[136px]">
			{fullName && (
				<h1 className="font-bold text-4xl mb-6 capitalize">{fullName}</h1>
			)}
			<div className="  flex gap-6 justify-center items-center flex-wrap">
				{email && (
					<a
						href="#"
						className=" underline underline-offset-4 hover:text-slate-200"
					>
						<span className="mr-2">
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						{email}
					</a>
				)}
				{phoneNumber && (
					<p>
						<span className="mr-2">
							<FontAwesomeIcon icon={faPhone} />
						</span>
						{phoneNumber}
					</p>
				)}
				{address && (
					<p className="capitalize">
						<span className="mr-2">
							<FontAwesomeIcon icon={faLocationDot} />
						</span>
						{address}
					</p>
				)}
			</div>
		</header>
	);
};

export default PreviewPersonalInfo;
