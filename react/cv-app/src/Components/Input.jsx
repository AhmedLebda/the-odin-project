const Input = ({ type, id, name, placeholder, value, onChange, label }) => {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="text-slate-800 font-semibold capitalize">
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="border ps-2 rounded-md"
			/>
		</div>
	);
};

export default Input;
