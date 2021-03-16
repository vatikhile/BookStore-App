import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../Service/productService/productService";
import bookImg from "../../Assets/Image11.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import Pagination from "../Pagination/Pagination";
import "./DisplayBooks.css";
const services = new Services();

const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: "12px",
  },
  bookQuantity: {
    fontSize: "12px",
  },
  bookPrize: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  addToBagButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "85px",
    fontSize: "11px",
    backgroundColor: "#A03037",
    color: "#ffff",
    borderRadius: "2px",
  },
  addedBagButton: {
    backgroundColor: "#1976D2",
    width: "170px",
    margin: "5px",
    color: "#ffff",
    borderRadius: "2px",
    fontSize: "11px",
  },
  wishListButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "80px",
    fontSize: "13px",
    borderRadius: "2px",
    fontWeight: "bold",
  },

  optionSelect: {
    padding: "5px 5px",
  },
}));

export default function DisplayNotes() {
  const classes = useStyles();
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    services
      .getBooks()
      .then((data) => {
        console.log("datasr", data);
        setBooks(data.data.result);
        books.map((data) => (data.isCart = false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="displayBook">
      <span className="topContent">
        <div>
          Books <font className="bookSize"> ({books.length} items) </font>{" "}
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.optionSelect}
              native
              inputProps={{
                name: "type",
              }}
            >
              <option value={0}>Sort by relevance</option>
              <option value={1}>Price: low to high</option>
              <option value={2}>Price: high to low</option>
              <option value={3}>Newest Arrival</option>
            </Select>
          </FormControl>
        </div>
      </span>
      <div className="allBooks">
        {books.map((data) => (
          <div className="bookContainer">
            <div className="imageContainer">
              <img className="bookImage" src={bookImg} alt="" />
            </div>
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.author}
              </Typography>
              <Typography className={classes.bookQuantity}>
                {data.quantity}
              </Typography>
              <Typography className={classes.bookPrize}>
                Rs. {data.price}
              </Typography>
            </div>

            <div className="descClass">
              <Typography className={classes.bookName}>Book Detail</Typography>
              {data.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
