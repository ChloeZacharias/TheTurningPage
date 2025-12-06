import everyoneInMyFamilyCover from "@/assets/everyone-in-my-family.png";

export const familyTreeData = {
  name: "The Cunningham Family",
  children: [
    {
      // Top parent group (Robert + Audrey + Marcelo)
      name: "Parent Group",
      relation: "Parents",
      isGroup: true, // helps styling if needed
      children: [
        // Parents shown horizontally
        {
          name: "Robert Cunningham",
          relation: "Father",
          deceased: true,
          info: "Killed a police officer then was killed",
        },
        {
          name: "Audrey Cunningham",
          relation: "Mother",
          deceased: false,
          info: "Married Marcelo after Robert died.\nScar above her right eye.\nBlames Ernest for tensions in the family.",
        },
        {
          name: "Marcelo Garcia",
          relation: "Stepfather",
          deceased: false,
          info: "Lawyer.\nDefended Michael at his murder trial.\nHeavy-set bald man.\nWears a late 1980s platinum Presidential Rolex.",
        },
      ],

      // Children of this unified parent group
      descendants: [
        {
          name: "Ernest Cunningham",
          relation: "Son",
          deceased: false,
          info: "Mystery author. Our protagonist piecing together the truth. Separated from Erin",
          children: [
            {
              name: "Erin Cunningham",
              relation: "Ex-wife",
              deceased: false,
              info: "TBD",
            },
          ],
        },

        {
          name: "Michael Cunningham",
          relation: "Son",
          deceased: false,
          info: "Jailed for three years after being convicted of murder. Lucy's ex-husband",
          children: [
            {
              name: "Lucy Cunningham",
              relation: "Ex-wife",
              deceased: false,
              info: "Preened blonde hair cut into a bob. Runs independent online business. Tries to sell you anything.",
            },
          ],
        },

        {
          name: "Sofia Garcia-Cunningham",
          relation: "Stepsister",
          deceased: false,
          info: "Daughter of Marcelo. Recently suspended from her job as a surgeon",
        },
      ],
    },

    // Aunt + Uncle group (Katherine + Andrew)
    {
      name: "Aunt + Uncle Group",
      relation: "Aunt & Uncle",
      isGroup: true,
      children: [
        {
          name: "Katherine Millot",
          relation: "Aunt",
          deceased: false,
          info: "Has a slight limp after a car accident in her 20s.\nNon-drinker.\nHyper-organised.",
        },
        {
          name: "Andrew Millot",
          relation: "Uncle",
          deceased: false,
          info: "Self-proclaimed feminist.\nTries hard to bond with everyone.",
        },
      ],
      descendants: [
        {
          name: "Amy Millot",
          relation: "Cousin",
          deceased: false,
          info: "Daughter of Katherine and Andrew.\nIs not attending the family reunion.",
        },
      ],
    },
  ],
};

export const books = [
  {
    id: "1",
    title: "Everyone in My Family Has Killed Someone",
    author: "Benjamin Stevenson",
    coverUrl: everyoneInMyFamilyCover,
    currentlyReading: true,
    meetingDate: "December 6, 2025",
    meetingTime: "6:00 PM",
    meetingLocation: "Living Room",
    hasFamilyTree: true,
    schedule: [
      // WEEK 1
      { week: 1, chapters: "Prologue + Ch. 1", date: "Dec 1" },
      { week: 1, chapters: "Ch. 2–3", date: "Dec 2" },
      { week: 1, chapters: "Ch. 4–5", date: "Dec 3" },
      { week: 1, chapters: "Ch. 6–7", date: "Dec 4" },
      { week: 1, chapters: "Ch. 8–10", date: "Dec 5" },
      { week: 1, chapters: "Ch. 11–12", date: "Dec 6" },
      { week: 1, chapters: "Ch. 13–14", date: "Dec 7" },

      // WEEK 2
      { week: 2, chapters: "Ch. 14.5–15", date: "Dec 8" },
      { week: 2, chapters: "Ch. 16", date: "Dec 9" },
      { week: 2, chapters: "Ch. 17", date: "Dec 10" },
      { week: 2, chapters: "Ch. 18–19", date: "Dec 11" },
      { week: 2, chapters: "Ch. 20", date: "Dec 12" },
      { week: 2, chapters: "Ch. 21–22", date: "Dec 13" },
      { week: 2, chapters: "Ch. 23–24", date: "Dec 14" },

      // WEEK 3
      { week: 3, chapters: "Ch. 25", date: "Dec 15" },
      { week: 3, chapters: "Ch. 26", date: "Dec 16" },
      { week: 3, chapters: "Ch. 27–27.5–28", date: "Dec 17" },
      { week: 3, chapters: "Ch. 29–30", date: "Dec 18" },
      { week: 3, chapters: "Ch. 31–32", date: "Dec 19" },
      { week: 3, chapters: "Ch. 33", date: "Dec 20" },
      { week: 3, chapters: "Ch. 34–35", date: "Dec 21" },

      // WEEK 4
      { week: 4, chapters: "Ch. 36–37", date: "Dec 28" },
      { week: 4, chapters: "Ch. 38", date: "Dec 29" },
      { week: 4, chapters: "Ch. 39", date: "Dec 30" },
      { week: 4, chapters: "Ch. 40–41 + Epilogue", date: "Dec 31" },
    ],
    discussionQuestions: [
      "How do you feel about Ernest as a narrator so far? Do you trust him?",
      "Which family member do you trust the most/least — and why?",
      "What themes or patterns are emerging?",
      "What predictions do you have for the midpoint of the book?",
      "What clues or details feel “Chekhov’s gun”-ish?",
    ],
    rating: 0,
    review: "The review will be updated once finished the book",
  },
];
