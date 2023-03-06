import React from "react";
import { useState } from "react";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [addedMovie, setAddedMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = isEditing
      ? `https://sinemazone.onrender.com/movies/${addedMovie.id}`
      : "https://sinemazone.onrender.com/movies";

    const method = isEditing ? "PATCH" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        year: year,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setAddedMovie(data);
        setIsEditing(false);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTitle(addedMovie.title);
    setYear(addedMovie.year);
  };

  const handleDelete = () => {
    fetch(`https://sinemazone.onrender.com/movies/${addedMovie.id}`, {
      method: "DELETE",
    }).then(() => {
      setAddedMovie(null);
      setTitle("");
      setYear("");
    });
  };

  return (
    <div className="form_container">
      <div className="register_forms">
        <h2>{isEditing ? "Edit Movie" : "Add New Movie"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            placeholder="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <button type="submit">{isEditing ? "Save" : "Submit"}</button>
        </form>

        {addedMovie && (
          <div className="movie-list">
            <h2>{isEditing ? "Edit Movie" : "Added Movie"}</h2>
            <h4>Movie Title: {addedMovie.title}</h4>
            <h4>Year: {addedMovie.year}</h4>

            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddMovie;
