import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

// Styling
import { makeStyles } from "@material-ui/core/styles";

const SearchBar = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: "500px",
    },
    color: {
      backgroundColor: theme.palette.secondary.main,
    },
    mainColor: {
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        flexWrap="wrap"
        display="flex"
      >
        <FormControl className={classes.margin} variant="outlined">
          <TextField
            className={clsx(classes.margin, classes.textField, classes.color)}
            label="Search for a book.."
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{ color: "#1d3557" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event) => props.setQuery(event.target.value)}
            labelWidth={60}
            variant="filled"
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default SearchBar;
