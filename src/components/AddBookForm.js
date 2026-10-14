import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://be4-assignment1.vercel.app/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add book.");
      }
      const data = await response.json();
      console.log("Added Book", data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <h2>Add New Book</h2>
      <form style={{width:"100%", maxWidth:"500px"}} onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Author: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Published Year: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Genre: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Language: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Country: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Rating: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Summary: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Cover Image URL: </label>
        <br />
        <input
         style={{ width: "100%", boxSizing: "border-box" }}
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddBookForm;
