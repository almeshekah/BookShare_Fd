import Select from "react-select";

const options = [
	{ value: "hardcover", label: "Hardcover" },
	{ value: "paperback", label: "Paperback" },
	{ value: "masspaperback", label: "Mass paperback" },
	,
];
const TypeOfCoverSelect = ({ handleOptions }) => {
	return (
		<div>
			<Select options={options} onChange={handleOptions} />
		</div>
	);
};

export default TypeOfCoverSelect;
