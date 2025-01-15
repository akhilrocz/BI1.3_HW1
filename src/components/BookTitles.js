import { useState } from "react";
import useFetch from "../useFetch";

const BookTitles = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("https://be4-assignment1.vercel.app/books");

  // console.log(data);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`https://be4-assignment1.vercel.app/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();

      if (data) {
        setSuccessMessage("Book deleted succesfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.map((movie) => (
          <li>
            {movie.title}{" "}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};

export default BookTitles;
