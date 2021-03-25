import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { CategoryTitle } from "./styles";

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

  const categoryList = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return (
    <div>
      <CategoryTitle>Categories</CategoryTitle>

      {categoryList}
    </div>
  );
};

export default CategoryList;
