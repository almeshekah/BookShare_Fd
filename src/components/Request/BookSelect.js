import Select from 'react-select';

const BookSelect = ({ options, _handleOptions, _options, set }) => {
	return (
		<div>
			<Select
				value={options[set]}
				onChange={_handleOptions}
				options={_options}
			/>
		</div>
	);
};

export default BookSelect;
