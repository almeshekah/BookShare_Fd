import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

//Material-Ui
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const SubCategoryItem = ({ category }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			minWidth: 250,
			borderRadius: "50%",
			height: "250px",
			margin: "10px",
			width: "250px",
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},
		card: {
			width: 200,
			height: 200,
			borderRadius: 15,
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},

		media: {
			borderRadius: 5,
			height: "150px",
			margin: "10px",
			width: "150px",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Grid
				item
				xs={4}
				sm={4}
				md={4}
				xl={3}
				style={{ marginLeft: "-1em", marginRight: "-3em", marginBottom: "1em" }}
			>
				<Grid container spacing={1}>
					<Card className={classes.card}>
						<Link to={`/categories/${category.slug}`}>
							<Grid
								container
								direction="row"
								justify="center"
								alignItems="center"
							>
								<CardMedia
									className={classes.media}
									image={category.image}
									title={category.name}
								/>
							</Grid>
						</Link>
						<Typography align="center" variant="h6" className={classes.tr}>
							{category.name}
						</Typography>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default SubCategoryItem;
