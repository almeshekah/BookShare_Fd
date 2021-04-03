import React from "react";

const RequestItem = ({ user }) => {
  return (
    <tr>
      <td>{user.username}</td>
      {/* <td>{flight.departureDate}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td> */}
    </tr>
  );
};

export default RequestItem;
