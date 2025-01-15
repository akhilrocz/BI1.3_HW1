
import './App.css';
import AddBookForm from './components/AddBookForm';
import BookByShoeDog from './components/BookByShoeDog';
import BooksByHarperLee from './components/BooksByHarperlee';
import BookTitles from './components/BookTitles';

function App() {
  return (
    <main>
      <BookTitles/>
      <BookByShoeDog title="To Kill a Mockingbird" />
      <BooksByHarperLee author="Harper Lee" />
      <AddBookForm/>
    </main>
  );
}

export default App;
