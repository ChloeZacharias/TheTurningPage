import { Book } from "@/data/books";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
  onClick: () => void;
  index: number;
}

const BookCard = ({ book, onClick, index }: BookCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg book-shadow transition-all duration-500 group-hover:scale-[1.02] group-hover:book-shadow">
        {/* Book Cover */}
        <div className="aspect-[2/3] relative overflow-hidden bg-secondary">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center p-6">
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground leading-tight mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground italic">{book.author}</p>
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <p className="text-primary-foreground text-sm font-sans">Click to view details</p>
          </div>
        </div>

        {/* Currently Reading Badge */}
        {book.currentlyReading && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground border-0 font-sans text-xs">
            Currently Reading
          </Badge>
        )}
      </div>

      {/* Book Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 font-sans">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
