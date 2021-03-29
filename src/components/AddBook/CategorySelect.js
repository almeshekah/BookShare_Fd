import React from "react";
import Select from "react-select";

const CategorySelect = ({ categoryOptions, _handleOptions, _options, set }) => {
  return (
    <div>
      <Select
        value={categoryOptions[set]}
        onChange={_handleOptions}
        categoryOptions={_options}
      />
    </div>
  );
};

export default CategorySelect;
