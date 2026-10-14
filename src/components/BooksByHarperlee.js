import useFetch from "../useFetch";

const BooksByHarperLee = ({ author }) => {
  const { data, loading } = useFetch(
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
    loading && <p style={{ textAlign: "center" }}>Loading...</p>
  );
};

export default BooksByHarperLee;
