const ViewRequest = () => {
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
									<th scope="col">Departure Date</th>
									<th scope="col">Departure Time</th>
									<th scope="col">Arrival Time</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>

					<div className="col-4"></div>
				</div>
			</div>
		</div>
	);
};

export default ViewRequest;
