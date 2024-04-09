const PreviewOptionInfo = ({ data, title }) => {
	const { startDate, endDate, location } = data;
	return (
		<div className="flex gap-8 mb-6">
			<div className="text-sm">
				<p>
					{startDate} - {endDate}
				</p>
				<p>{location}</p>
			</div>
			{title === "education" ? (
				<div className="flex-1">
					<h4 className="font-bold text-lg">{data.school}</h4>
					<p className="italic">{data.degree}</p>
				</div>
			) : (
				<div className="flex-1">
					<h4 className="font-bold text-lg">{data.companyName}</h4>
					<p className="italic text-sm">{data.positionTitle}</p>
					<p className="text-slate-900">{data.description}</p>
				</div>
			)}
		</div>
	);
};

export default PreviewOptionInfo;
