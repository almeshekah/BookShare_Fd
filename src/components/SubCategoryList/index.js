import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";
import SubCategoryItem from "./SubCategoryItem";

//Material-Ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Styling

const SubCategoryList = ({ subcategories }) => {
	const loading = useSelector((state) => state.subCategoryReducer.loading);
	if (loading) return <Loading />;

	const subCategoryList = subcategories.map((category) => (
		<SubCategoryItem category={category} key={category.id} />
	));

	return (
		<>
			<Typography
				align="center"
				variant="h6"
				style={{
					marginTop: "0.3em",
				}}
			>
				Select a category
			</Typography>
			<Grid
				container
				spacing={10}
				style={{
					marginLeft: "5em",
					marginTop: "1em",

					paddingLeft: "15em",
				}}
			>
				{subCategoryList}
			</Grid>
		</>
	);
};

export default SubCategoryList;
