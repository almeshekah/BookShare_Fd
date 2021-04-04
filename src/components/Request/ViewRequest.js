import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Components
import Loading from "../Loading";
import RequestItem from "./RequestItem";

const ViewRequest = () => {
  const requests = useSelector((state) => state.requestReducer.requests);
  const loading = useSelector((state) => state.requestReducer.loading);
  if (loading) return <Loading />;
  const requestList = requests.map((request) => (
    <RequestItem request={request} key={request.id} />
  ));

  return (
    <>
      <Typography variant="h3" align="center" color="primary">
        My Requests
      </Typography>
      <Grid
        container
        spacing={3}
        style={{
          marginLeft: "17em",
          marginTop: "3em",
        }}
      >
        {requestList}
      </Grid>
    </>
  );
};

export default ViewRequest;
