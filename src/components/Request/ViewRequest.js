import { useSelector } from 'react-redux';
import Loading from '../Loading';
import RequestItem from './RequestItem';

const ViewRequest = () => {
	const requests = useSelector((state) => state.requestReducer.requests);
	const loading = useSelector((state) => state.requestReducer.loading);
	if (loading) return <Loading />;
	const requestList = requests.map((request) => (
		<RequestItem request={request} key={request.id} />
	));

	return (
		<div className="App">
			<h1 className="mt-5"> my Request </h1>
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
	);
};

export default ViewRequest;
