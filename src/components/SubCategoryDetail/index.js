import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import BookList from "../BookList";
import CategoryList from "../CategoryList";
import Loading from "../Loading";

const SubCategoryDetail = () => {
	const { subCategorySlug } = useParams();
	const loading = useSelector((state) => state.categoryReducer.loading);

	const subcategories = useSelector(
		(state) => state.subCategoryReducer.subcategories
	).find((category) => category.slug === subCategorySlug);
	console.log(subcategories);
	if (loading) return <Loading />;

	return <CategoryList categories={subcategories.category} />;
};

export default SubCategoryDetail;
