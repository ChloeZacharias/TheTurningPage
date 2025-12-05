import midnightLibraryCover from "@/assets/book-midnight-library.jpg";
import circeCover from "@/assets/book-circe.jpg";
import projectHailMaryCover from "@/assets/book-project-hail-mary.jpg";
import ceruleanSeaCover from "@/assets/book-cerulean-sea.jpg";
import klaraSunCover from "@/assets/book-klara-sun.jpg";
import pachinkoCover from "@/assets/book-pachinko.jpg";

export const familyTreeData = {
  generations: [
    {
      label: "Grandparents",
      members: [
        { name: "Michael Cunningham", relation: "Grandfather", deceased: true, info: "Patriarch of the family. Died before the reunion." },
        { name: "Audrey Cunningham", relation: "Grandmother", deceased: false, info: "Matriarch who organized the fateful reunion." }
      ]
    },
    {
      label: "Parents & Their Siblings",
      members: [
        { name: "Robert (Bob)", relation: "Ernest's Uncle", deceased: true, info: "Police officer. Michael's eldest son." },
        { name: "Katherine (Katie)", relation: "Ernest's Aunt", deceased: false, info: "Bob's wife. Former athlete." },
        { name: "Frank", relation: "Ernest's Father", deceased: true, info: "Second son. Ernest's biological father." },
        { name: "Sofia", relation: "Ernest's Stepmother", deceased: false, info: "Frank's second wife. A mystery writer herself." },
        { name: "Lucy", relation: "Ernest's Aunt", deceased: false, info: "Michael's only daughter. Black sheep of the family." }
      ]
    },
    {
      label: "Ernest's Generation",
      members: [
        { name: "Ernest", relation: "Narrator", deceased: false, info: "Mystery author. Our protagonist piecing together the truth." },
        { name: "Michael Jr.", relation: "Cousin", deceased: false, info: "Bob and Katie's son. Named after grandfather." },
        { name: "Amy", relation: "Half-sister", deceased: false, info: "Frank and Sofia's daughter. Ernest's half-sister." },
        { name: "Jeremy", relation: "Cousin", deceased: true, info: "Lucy's son. The 'bad apple' of the family." }
      ]
    },
    {
      label: "Others",
      members: [
        { name: "Erin", relation: "Michael Jr.'s Wife", deceased: false, info: "Married into the family. A veterinarian." },
        { name: "Marcelo", relation: "Amy's Partner", deceased: false, info: "Amy's longtime boyfriend attending the reunion." },
        { name: "Andy", relation: "Victim", deceased: true, info: "A stranger found dead at the reunion. But who killed him?" }
      ]
    }
  ]
};

export const books = [
  {
    id: "1",
    title: "Everyone in My Family Has Killed Someone",
    author: "Benjamin Stevenson",
    coverUrl: "", // Will use placeholder
    description: "Ernest Cunningham is not a typical mystery protagonist. He's a self-proclaimed mystery writer who knows all the rules of the genre—and he's about to break them all. At a family reunion at a remote ski resort, a body is discovered in the snow. But here's the catch: everyone in Ernest's family has killed someone. Now it's up to him to figure out which family member committed this particular murder, while the blizzard keeps everyone trapped together.",
    currentlyReading: true,
    meetingDate: "December 20, 2024",
    meetingTime: "7:00 PM",
    meetingLocation: "Community Center Room A",
    hasFamilyTree: true,
    schedule: [
      { week: 1, chapters: "Chapters 1-8", date: "Dec 1-7" },
      { week: 2, chapters: "Chapters 9-16", date: "Dec 8-14" },
      { week: 3, chapters: "Chapters 17-24", date: "Dec 15-21" },
      { week: 4, chapters: "Chapters 25-End", date: "Dec 22-28" }
    ],
    discussionQuestions: [
      "How does the author's use of mystery genre 'rules' enhance or subvert your expectations?",
      "What did you think of Ernest as a narrator? Did his knowledge of mystery conventions make him more or less reliable?",
      "Which family member's 'kill' surprised you the most?",
      "How does the isolated ski resort setting contribute to the tension?",
      "Did you guess the killer before the reveal? What clues led you there?",
      "How does the book explore themes of family loyalty versus moral responsibility?"
    ]
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
      { week: 4, chapters: "Chapters 25-End", date: "Jan 26-Feb 1" }
    ],
    discussionQuestions: [
      "How does Circe's character evolve throughout the novel?",
      "What role does isolation play in Circe's development?",
      "How does Miller reimagine the traditional portrayal of Circe from Greek mythology?"
    ]
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
      { week: 4, chapters: "Chapters 25-End", date: "Feb 23-Mar 1" }
    ],
    discussionQuestions: [
      "How does the memory loss narrative device affect your reading experience?",
      "What does the novel say about the importance of scientific cooperation?",
      "How does the relationship between Grace and Rocky develop?"
    ]
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
      { week: 4, chapters: "Chapters 22-End", date: "Mar 23-29" }
    ],
    discussionQuestions: [
      "What real-world issues does the novel address through its fantasy setting?",
      "How does Linus's character change throughout his time on the island?",
      "What role does found family play in the narrative?"
    ]
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
      { week: 3, chapters: "Part Five - Six", date: "Apr 20-26" }
    ],
    discussionQuestions: [
      "What does Klara's perspective reveal about human nature?",
      "How does Ishiguro explore themes of love and sacrifice?",
      "What ethical questions does the novel raise about artificial intelligence?"
    ]
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
      { week: 3, chapters: "Book Three", date: "May 18-24" }
    ],
    discussionQuestions: [
      "How does the concept of identity evolve across generations?",
      "What role does the theme of belonging play in the novel?",
      "How does Lee portray the experience of being an immigrant?"
    ]
  }
];
