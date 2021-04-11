import Select from "react-select";

const CategoriesSelect = ({
	options,
	_handleOptions,
	_options,
	set,
	defaultValue,
	isMulti,
}) => {
	return (
		<div>
			<Select
				value={options[set]}
				onChange={_handleOptions}
				options={_options}
				defaultValue={defaultValue}
				isMulti={isMulti}
				placeholder={"Choose Categories"}
			/>
		</div>
	);
};

export default CategoriesSelect;
