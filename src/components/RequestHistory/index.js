import * as React from "react";
import { useSelector } from "react-redux";
//Material-Ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Components
import Loading from "../Loading";
import HistoryItem from "./HistoryItem";

const RequestHistory = () => {
	const requests = useSelector((state) => state.requestReducer.requests);
	const loading = useSelector((state) => state.requestReducer.loading);
	if (loading) return <Loading />;
	const requestList = requests.map((request) => (
		<HistoryItem request={request} key={request.id} />
	));
	return (
		<Grid>
			<div className="App">
				<h1 className="mt-5"> Requested History</h1>
				<div className="container mt-5">
					<div className="row justify-content-md-center">
						<div className="col-20">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th scope="col">Requested by</th>
										<th scope="col">Requested Date</th>
										<th scope="col">My Book </th>
										<th scope="col">His Book</th>
										<th scope="col">Requested status</th>
										<th scope="col">Note</th>
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
	);
};

export default RequestHistory;
