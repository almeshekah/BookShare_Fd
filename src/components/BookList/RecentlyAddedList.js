import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";

// Components
import RecentlyAddedBook from "./RecentlyAddedBook";
import Loading from "../Loading";

//Material-Ui
import Grid from "@material-ui/core/Grid";

const RecentlyAddedList = () => {
  const books = useSelector((state) => state.bookReducer.mybook);

  const loading = useSelector((state) => state.bookReducer.loading);

  const loadingMyBook = useSelector((state) => state.bookReducer.loadingMyBook);
  if (loading && loadingMyBook) return <Loading />;

  const sortedBookList = books.sort((a, b) => b.id - a.id);

  const bookList = sortedBookList.map((book) => (
    <RecentlyAddedBook book={book} key={book.id} />
  ));

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{
          marginTop: "1em",
        }}
      >
        <Carousel
        // autoPlay={false}
        // indicators={false}
        >
          {bookList}
        </Carousel>
      </Grid>
    </>
  );
};

export default RecentlyAddedList;
