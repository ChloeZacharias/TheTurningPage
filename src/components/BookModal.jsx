import React, { useEffect } from "react";
import { X, Calendar, Clock, MapPin, BookOpen, MessageCircle, Users } from "lucide-react";
import FamilyTree from "./FamilyTree.jsx";

const BookModal = ({ book, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <X />
        </button>

        <div className="modal__header">
          {/* Book Cover Thumbnail */}
          <div className="modal__cover book-shadow">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={`${book.title} cover`} />
            ) : (
              <div className="modal__cover-placeholder">
                <span>{book.title}</span>
              </div>
            )}
          </div>

          {/* Book Title & Author */}
          <div className="modal__title-section">
            <h2 className="modal__title">{book.title}</h2>
            <p className="modal__author">by {book.author}</p>
            {book.currentlyReading && (
              <span className="badge">Currently Reading</span>
            )}
          </div>
        </div>

        <div className="modal__content">
          {/* Description */}
          <p className="modal__description">{book.description}</p>

          {/* Family Tree (for the murder mystery book) */}
          {book.hasFamilyTree && (
            <div className="modal__section">
              <h3 className="modal__section-title">
                <Users />
                Family Tree
              </h3>
              <FamilyTree />
            </div>
          )}

          {/* Meeting Details (if currently reading) */}
          {book.currentlyReading && book.meetingDate && (
            <div className="modal__section">
              <div className="modal__meeting-info">
                <h3 className="modal__section-title">
                  <Calendar />
                  Next Meeting
                </h3>
                <div className="modal__meeting-info-grid">
                  <div className="modal__meeting-info-item">
                    <Calendar />
                    <span>{book.meetingDate}</span>
                  </div>
                  {book.meetingTime && (
                    <div className="modal__meeting-info-item">
                      <Clock />
                      <span>{book.meetingTime}</span>
                    </div>
                  )}
                  {book.meetingLocation && (
                    <div className="modal__meeting-info-item">
                      <MapPin />
                      <span>{book.meetingLocation}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Reading Schedule */}
          <div className="modal__section">
            <h3 className="modal__section-title">
              <BookOpen />
              Reading Schedule
            </h3>
            <div className="modal__schedule-grid">
              {book.schedule.map((item) => (
                <div key={item.week} className="modal__schedule-item">
                  <p className="modal__schedule-item-week">Week {item.week}</p>
                  <p className="modal__schedule-item-chapters">{item.chapters}</p>
                  <p className="modal__schedule-item-date">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion Questions */}
          <div className="modal__section">
            <h3 className="modal__section-title">
              <MessageCircle />
              Discussion Questions
            </h3>
            <ul className="modal__questions">
              {book.discussionQuestions.map((question, index) => (
                <li key={index}>
                  <span className="modal__question-number">{index + 1}</span>
                  <span className="modal__question-text">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
