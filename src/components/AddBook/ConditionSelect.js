import Select from "react-select";

const options = [
	{ value: "good", label: "Good" },
	{ value: "likenew", label: "Like new" },
	{ value: "acceptable", label: "Acceptable" },
];

const ConditionSelect = ({ handleOptions }) => {
	return (
		<div>
			<Select
				options={options}
				onChange={handleOptions}
				theme={(theme) => ({
					...theme,
					borderRadius: 0,
					colors: {
						...theme.colors,
						primary25: "#f3e7dd",
						primary: "#413b89",
					},
				})}
			/>
		</div>
	);
};

export default ConditionSelect;
