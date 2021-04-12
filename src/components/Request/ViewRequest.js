import { useSelector } from "react-redux";

//Material-Ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

// Components
import Loading from "../Loading";
import RequestItem from "./RequestItem";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const ViewRequest = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      maxHeight: 700,
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    secondaryColor: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    primaryColor: {
      color: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  const requests = useSelector((state) => state.requestReducer.requests);
  const loading = useSelector((state) => state.requestReducer.loading);
  if (loading) return <Loading />;
  const requestList = requests
    .filter((request) => request.status === 0)
    .map((request) => <RequestItem request={request} key={request.id} />);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          marginTop: "1em",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          style={{
            marginTop: "0.5em",
          }}
        >
          My Requests
        </Typography>
      </Grid>

      {requests.length === 0 || requestList.length === 0 ? (
        <>
          <Typography align="center" color="primary">
            You have no requests
          </Typography>
        </>
      ) : (
        <Grid>
          <div className="App">
            <div className="container mt-5">
              <div className="row justify-content-md-center">
                <div className="col-20">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Requested by</th>
                        <th scope="col">My Book </th>
                        <th scope="col">His Book</th>
                        <th scope="col">ACCEPTED</th>
                        <th scope="col">REJECTED</th>
                      </tr>
                    </thead>
                    <tbody>{requestList}</tbody>
                  </table>
                </div>

                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </Grid>
      )}
    </>
  );
};

export default ViewRequest;
