import midnightLibraryCover from "@/assets/book-midnight-library.jpg";
import circeCover from "@/assets/book-circe.jpg";
import projectHailMaryCover from "@/assets/book-project-hail-mary.jpg";
import ceruleanSeaCover from "@/assets/book-cerulean-sea.jpg";
import klaraSunCover from "@/assets/book-klara-sun.jpg";
import pachinkoCover from "@/assets/book-pachinko.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  currentlyReading: boolean;
  schedule: ScheduleItem[];
  discussionQuestions: string[];
  meetingDate?: string;
  meetingTime?: string;
  meetingLocation?: string;
}

export interface ScheduleItem {
  week: number;
  chapters: string;
  date: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: midnightLibraryCover,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices.",
    currentlyReading: true,
    meetingDate: "December 15, 2024",
    meetingTime: "7:00 PM",
    meetingLocation: "Community Center Room B",
    schedule: [
      { week: 1, chapters: "Chapters 1-10", date: "Dec 1-7" },
      { week: 2, chapters: "Chapters 11-20", date: "Dec 8-14" },
      { week: 3, chapters: "Chapters 21-30", date: "Dec 15-21" },
      { week: 4, chapters: "Chapters 31-End", date: "Dec 22-28" },
    ],
    discussionQuestions: [
      "What would your 'Book of Regrets' contain?",
      "How does the concept of the Midnight Library relate to the choices we make in our own lives?",
      "What life would you have chosen to explore if you were Nora?",
      "How does Nora's relationship with her cat, Voltaire, symbolize her connection to her root life?",
      "What does the novel suggest about the nature of happiness and fulfillment?",
    ],
  },
  {
    id: "2",
    title: "Circe",
    author: "Madeline Miller",
    coverUrl: circeCover,
    description: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother.",
    currentlyReading: false,
    schedule: [
      { week: 1, chapters: "Chapters 1-8", date: "Jan 5-11" },
      { week: 2, chapters: "Chapters 9-16", date: "Jan 12-18" },
      { week: 3, chapters: "Chapters 17-24", date: "Jan 19-25" },
      { week: 4, chapters: "Chapters 25-End", date: "Jan 26-Feb 1" },
    ],
    discussionQuestions: [
      "How does Circe's character evolve throughout the novel?",
      "What role does isolation play in Circe's development?",
      "How does Miller reimagine the traditional portrayal of Circe from Greek mythology?",
    ],
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: projectHailMaryCover,
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that.",
    currentlyReading: false,
    schedule: [
      { week: 1, chapters: "Chapters 1-8", date: "Feb 2-8" },
      { week: 2, chapters: "Chapters 9-16", date: "Feb 9-15" },
      { week: 3, chapters: "Chapters 17-24", date: "Feb 16-22" },
      { week: 4, chapters: "Chapters 25-End", date: "Feb 23-Mar 1" },
    ],
    discussionQuestions: [
      "How does the memory loss narrative device affect your reading experience?",
      "What does the novel say about the importance of scientific cooperation?",
      "How does the relationship between Grace and Rocky develop?",
    ],
  },
  {
    id: "4",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    coverUrl: ceruleanSeaCover,
    description: "A magical island. A dangerous task. A story about the profound experience of discovering an unlikely family in an unexpected place.",
    currentlyReading: false,
    schedule: [
      { week: 1, chapters: "Chapters 1-7", date: "Mar 2-8" },
      { week: 2, chapters: "Chapters 8-14", date: "Mar 9-15" },
      { week: 3, chapters: "Chapters 15-21", date: "Mar 16-22" },
      { week: 4, chapters: "Chapters 22-End", date: "Mar 23-29" },
    ],
    discussionQuestions: [
      "What real-world issues does the novel address through its fantasy setting?",
      "How does Linus's character change throughout his time on the island?",
      "What role does found family play in the narrative?",
    ],
  },
  {
    id: "5",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverUrl: klaraSunCover,
    description: "From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside.",
    currentlyReading: false,
    schedule: [
      { week: 1, chapters: "Part One - Two", date: "Apr 6-12" },
      { week: 2, chapters: "Part Three - Four", date: "Apr 13-19" },
      { week: 3, chapters: "Part Five - Six", date: "Apr 20-26" },
    ],
    discussionQuestions: [
      "What does Klara's perspective reveal about human nature?",
      "How does Ishiguro explore themes of love and sacrifice?",
      "What ethical questions does the novel raise about artificial intelligence?",
    ],
  },
  {
    id: "6",
    title: "Pachinko",
    author: "Min Jin Lee",
    coverUrl: pachinkoCover,
    description: "Pachinko follows one Korean family through the generations, beginning in early 1900s Korea with Sunja, the prized daughter of a poor yet proud family.",
    currentlyReading: false,
    schedule: [
      { week: 1, chapters: "Book One", date: "May 4-10" },
      { week: 2, chapters: "Book Two", date: "May 11-17" },
      { week: 3, chapters: "Book Three", date: "May 18-24" },
    ],
    discussionQuestions: [
      "How does the concept of identity evolve across generations?",
      "What role does the theme of belonging play in the novel?",
      "How does Lee portray the experience of being an immigrant?",
    ],
  },
];
