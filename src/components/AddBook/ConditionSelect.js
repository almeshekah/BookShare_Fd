import Select from "react-select";

const options = [
	{ value: "good", label: "Good" },
	{ value: "likenew", label: "Like new" },
	{ value: "acceptable", label: "Acceptable" },
	,
];
const ConditionSelect = ({ handleOptions }) => {
	return (
		<div>
			<Select options={options} onChange={handleOptions} />
		</div>
	);
};

export default ConditionSelect;
