import Select from "react-select";

const CategorySelect = ({ options, _handleOptions, _options, set }) => {
  return (
    <div>
      <Select
        value={options[set]}
        onChange={_handleOptions}
        options={_options}
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

export default CategorySelect;
