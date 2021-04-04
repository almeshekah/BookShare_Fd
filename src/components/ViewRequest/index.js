import React from "react";
import { useSelector } from "react-redux";
import RequestItem from "./RequestItem";

const ViewRequest = () => {
  const users = useSelector((state) => state.authReducer.users);
  console.log("🚀 ~ file: index.js ~ line 6 ~ ViewRequest ~ users", users);

  const books = useSelector((state) => state.bookReducer.books);

  const requests = useSelector((state) => state.requestReducer.requests);
  console.log(
    "🚀 ~ file: index.js ~ line 10 ~ ViewRequest ~ requests",
    requests
  );

  const user = requests.map((request) =>
    users.find((_user) => request.receivedUserId === _user.id)
  );
  const requstUser = requests.map((request) =>
    users.find((_user) => request.requstUserId === _user.id)
  );

  const requstUserlist = user.map((reqUser) => (
    <RequestItem reqUser={reqUser} />
  ));

  const myBooks = requests.map((user1Book) =>
    books.find((book) => user1Book.bookId === book.id)
  );
  const myBooklist = myBooks.map((myBook) => <RequestItem myBook={myBook} />);
  console.log("🚀 ~ file: index.js ~ line 31 ~ ViewRequest ~ myBooks", myBooks);

  return (
    <div>
      <div>
        <div className="container mt-5">
          <div className="row justify-content-md-center">
            <div className="col-20">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">My Books</th>
                    <th scope="col">User 2 username</th>
                    <th scope="col">User 2 Books</th>
                    <th scope="col">Request Status</th>
                    <th scope="col">Accpet</th>
                    <th scope="col">Recjet</th>
                  </tr>
                </thead>
                <tbody>
                  <td>My Books</td>
                  <td>{requstUserlist}</td>
                  <td>User 2 Books</td>
                  <td>{}</td>
                  <td>
                    <button>Accpet</button>
                  </td>
                  <td>
                    <button>Recjet</button>
                  </td>
                </tbody>
              </table>
            </div>

            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRequest;
