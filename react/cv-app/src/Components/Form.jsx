import Input from "./Input";

const Form = ({ inputData, dataState, onDataChange }) => {
	return (
		<form>
			{inputData.map((input) => (
				<Input
					key={input.id}
					label={input.title}
					type={input.type}
					id={input.id}
					name={input.name}
					placeholder={input.placeholder}
					value={dataState[input.id]}
					onChange={onDataChange}
				/>
			))}
		</form>
	);
};

export default Form;
