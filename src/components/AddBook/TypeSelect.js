import Select from "react-select";

const options = [
	{ value: "trade", label: "Trade" },
	{ value: "giveaway", label: "Giveaway" },
];
const TypeSelect = ({ handleOptions }) => {
	return (
		<div>
			<Select options={options} onChange={handleOptions} />
		</div>
	);
};

export default TypeSelect;
