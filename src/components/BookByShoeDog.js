import useFetch from "../useFetch";

const BookByShoeDog = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://be4-assignment1.vercel.app/books/${title}`
  );
  console.log(data);
  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p><strong>Author:</strong> {data.author}</p>
      <p><strong>Release Year:</strong> {data.publishedYear}</p>
      <p><strong>Genre:</strong> {data.genre.join(", ")}</p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByShoeDog;
