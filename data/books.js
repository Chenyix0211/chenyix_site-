// ============================================================
// CHENYIX PUBLICATIONS – Book Catalog Data
// ============================================================
// HOW TO ADD A NEW BOOK:
//   1. Copy one { ... } block below
//   2. Paste after the last }, in the array (before the closing ])
//   3. Fill in the details
//   4. Save the book cover image in the assets/ folder
//   5. Save this file — the website updates automatically
// ============================================================

const BOOKS = [
  {
    id: 1,
    title: "ICSE Environmental Applications",
    subtitle: "A Textbook for ICSE Class X — Environmental Applications",
    author: "Er. Vel Vignesh, M.Tech, MBA",
    editor: "Dr. K. P. Bakhya Seema",
    price: 699,             // Price in INR
    cover: "assets/book-cover.jpg",
    badge: "For ICSE — Year 2027 Examination Onwards",
    isbn: "",               // Add ISBN if available
    description: "ICSE Environmental Applications — a comprehensive, examination-focused textbook for ICSE Class X by Er. Vel Vignesh. Perfectly aligned with the CISCE 2027 syllabus for Environmental Applications, this book combines conceptual clarity with extensive practice questions to help students excel in ICSE Environmental Applications.",
    boardTag: "ICSE",
    classTag: "Class X",
    inStock: true
  }

  // ---- ADD MORE BOOKS BELOW (copy the block above) ----
  // ,
  // {
  //   id: 2,
  //   title: "Next Book Title",
  //   subtitle: "A Textbook for ...",
  //   author: "Author Name",
  //   editor: "Dr. K. P. Bakhya Seema",
  //   price: 400,
  //   cover: "assets/book2-cover.jpg",
  //   badge: "New Arrival",
  //   isbn: "",
  //   description: "Book description here.",
  //   boardTag: "CBSE",
  //   classTag: "Class IX",
  //   inStock: true
  // }
];
