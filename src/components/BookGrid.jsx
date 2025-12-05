import React, { useState } from "react";
import { books } from "../data/books.js";
import BookCard from "./BookCard.jsx";
import BookModal from "./BookModal.jsx";

const BookGrid = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  // Sort books to show currently reading first
  const sortedBooks = [...books].sort((a, b) => {
    if (a.currentlyReading && !b.currentlyReading) return -1;
    if (!a.currentlyReading && b.currentlyReading) return 1;
    return 0;
  });

  return (
    <section id="books" className="book-grid-section">
      <div className="book-grid-section__container">
        {/* Section Header */}
        <div className="book-grid-section__header">
          <h2 className="book-grid-section__title">Our Book Collection</h2>
          <p className="book-grid-section__description">
            Browse through our reading list. Click on any book to see schedules,
            discussion questions, and meeting details.
          </p>
        </div>

        {/* Book Grid */}
        <div className="book-grid-section__grid">
          {sortedBooks.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => handleBookClick(book)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Book Modal */}
      {modalOpen && selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default BookGrid;
