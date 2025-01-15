import useFetch from "../useFetch";

const BooksByHarperLee = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be4-assignment1.vercel.app/books/author/${author}`
  );

  return data && data.length > 0 ? (
    <div>
      <h2>Books by Harper Lee</h2>
      <ul>
        {data.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BooksByHarperLee;
