import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import "./SingleBook.css";
//url
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

function Books() {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    }, []);
    console.log(books);

    return (
        <div>
            <ul>
                {books &&
                    books.map((book, i) => (
                        <li className="book" key={i}>
                            <SingleBook book={book} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Books;
