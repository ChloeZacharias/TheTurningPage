import React from "react";

const BookCard = ({ book, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      className="book-card animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="book-card__cover-wrapper book-shadow">
        {/* Book Cover */}
        <div className="book-card__cover">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={`${book.title} cover`}
              className="book-card__image"
            />
          ) : (
            <div className="book-card__placeholder">
              <div className="book-card__placeholder-content">
                <h3 className="book-card__placeholder-title">{book.title}</h3>
                <p className="book-card__placeholder-author">{book.author}</p>
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="book-card__overlay">
            <p>Click to view details</p>
          </div>
        </div>

        {/* Currently Reading Badge */}
        {book.currentlyReading && (
          <span className="book-card__badge">Currently Reading</span>
        )}
      </div>

      {/* Book Info */}
      <div className="book-card__info">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
