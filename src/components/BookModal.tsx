import { Book } from "@/data/books";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, BookOpen, MessageCircle } from "lucide-react";

interface BookModalProps {
  book: Book | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookModal = ({ book, open, onOpenChange }: BookModalProps) => {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-6">
            {/* Book Cover Thumbnail */}
            <div className="w-32 h-48 flex-shrink-0 rounded-lg overflow-hidden book-shadow">
              {book.coverUrl ? (
                <img
                  src={book.coverUrl}
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center p-3">
                  <span className="font-serif text-sm text-center text-foreground">
                    {book.title}
                  </span>
                </div>
              )}
            </div>

            {/* Book Title & Author */}
            <div className="flex-1 pt-2">
              <DialogTitle className="font-serif text-3xl font-bold text-foreground leading-tight">
                {book.title}
              </DialogTitle>
              <p className="text-lg text-muted-foreground mt-2 italic font-sans">
                by {book.author}
              </p>
              {book.currentlyReading && (
                <Badge className="mt-3 bg-primary text-primary-foreground border-0">
                  Currently Reading
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Description */}
          <div>
            <p className="text-foreground/90 leading-relaxed font-sans">
              {book.description}
            </p>
          </div>

          <Separator className="bg-border" />

          {/* Meeting Details (if currently reading) */}
          {book.currentlyReading && book.meetingDate && (
            <>
              <div className="bg-secondary/50 rounded-xl p-5 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Next Meeting
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-sans text-sm">{book.meetingDate}</span>
                  </div>
                  {book.meetingTime && (
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-sans text-sm">{book.meetingTime}</span>
                    </div>
                  )}
                  {book.meetingLocation && (
                    <div className="flex items-center gap-2 text-foreground/80">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-sans text-sm">{book.meetingLocation}</span>
                    </div>
                  )}
                </div>
              </div>

              <Separator className="bg-border" />
            </>
          )}

          {/* Reading Schedule */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              Reading Schedule
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {book.schedule.map((item) => (
                <div
                  key={item.week}
                  className="bg-muted/50 rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-sans">
                    Week {item.week}
                  </p>
                  <p className="font-semibold text-foreground mt-1 font-sans">
                    {item.chapters}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 font-sans">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Discussion Questions */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              Discussion Questions
            </h3>
            <ul className="space-y-3">
              {book.discussionQuestions.map((question, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-foreground/90 font-sans"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookModal;
