import React from "react";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.image} alt="" />

        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.description}</p>
        <h3>{props.publishedDate}</h3>
        <a href={props.previewLink}>Visit book here</a>
      </div>
    </div>
  );
};

export default BookCard;
