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

export default TypeOfCoverSelect;
