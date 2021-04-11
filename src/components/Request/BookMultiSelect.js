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
        placeholder={"Choose a book"}
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

export default BookMultiSelect;
