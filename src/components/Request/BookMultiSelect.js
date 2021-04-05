import Select from "react-select";

const BookMultiSelect = ({
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
        // isMulti
        placeholder={"Choose a book"}
      />
    </div>
  );
};

export default BookMultiSelect;
