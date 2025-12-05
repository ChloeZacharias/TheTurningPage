import { useState } from "react";
import { books, Book } from "@/data/books";
import BookCard from "./BookCard";
import BookModal from "./BookModal";

const BookGrid = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  // Sort books to show currently reading first
  const sortedBooks = [...books].sort((a, b) => {
    if (a.currentlyReading && !b.currentlyReading) return -1;
    if (!a.currentlyReading && b.currentlyReading) return 1;
    return 0;
  });

  return (
    <section id="books" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
            Our Book Collection
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-xl mx-auto">
            Browse through our reading list. Click on any book to see schedules,
            discussion questions, and meeting details.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8">
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
      <BookModal
        book={selectedBook}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default BookGrid;
