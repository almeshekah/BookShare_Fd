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

  //////
  // const bookName = books.map((book) =>
  //   requests.find((request) => request.bookId === book.id)
  // );

  // const mybook = bookName.map((book) => book.name);
  /////

  const user = requests.map((request) =>
    users.find((_user) => request.receivedUserId === _user.id)
  );
  const userlist = user.map((user) => <RequestItem user={user} />);

  console.log("🚀 ~ file: index.js ~ line 41 ~ ViewRequest ~ user", user);

  // const userNamesss = user.map((user) => user.firstName);

  // console.log(
  //   "🚀 ~ file: index.js ~ line 43 ~ ViewRequest ~ userNamesss",
  //   userNamesss
  // );

  // console.log("🚀 ~ file: index.js ~ line 46 ~ ViewRequest ~ user2Name3", user);

  // const bookNameId = books.map((book) =>
  //   requests.find((request) => request.bookId === book.id)
  // );
  // console.log(
  //   "🚀 ~ file: index.js ~ line 27 ~ ViewRequest ~ bookName",
  //   bookNameId
  // );

  // console.log("🚀 ~ file: index.js ~ line 7 ~ ViewRequest ~ users", users);

  // console.log(
  //   "🚀 ~ file: index.js ~ line 6 ~ ViewRequest ~ requests",
  //   requests
  // );

  // const myBooks = requests.find((userBook) => userBook.bookId === books.id);

  // const user1Id = useSelector((state) =>
  //   state.authReducer.users.find((user1) => user1.id === users.id)
  // );

  // console.log("🚀 ~ file: index.js ~ line 24 ~ ViewRequest ~ user1Id", user1Id);

  // console.log(
  //   "🚀 ~ file: index.js ~ line 17 ~ ViewRequest ~ user1Books",
  //   myBooks
  // );
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
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>User 2 Books</td>
                  {/* <td>{requests.status}</td> */}
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
