# CHENYIX PUBLICATIONS – Website Editing Guide

> A plain-English guide for staff and management to edit website content without coding knowledge.

---

## 📁 Folder Structure

```
chenyix_site/
├── index.html          ← The main website page (open in browser)
├── css/
│   └── style.css       ← All styles / colors (advanced edits only)
├── js/
│   └── main.js         ← Website logic (do not edit)
├── data/
│   ├── books.js        ← ⭐ EDIT THIS to add/remove books
│   └── authors.js      ← ⭐ EDIT THIS to add/remove team members
└── assets/
    ├── logo.png        ← Your company logo image
    ├── book-cover.jpg  ← Cover of Environmental Applications
    ├── chief-editor.jpg← Photo of Dr. K. P. Bakhya Seema
    └── author-velvignesh.jpg  ← Photo of Er. Vel Vignesh
```

---

## ✏️ How to Add a New Book

1. Open `data/books.js` in Notepad (or any text editor)
2. Find the line that says `// ---- ADD MORE BOOKS BELOW ----`
3. Copy this and add it after the last book's closing `}`:

```js
,
{
  id: 2,
  title: "Your Book Title",
  subtitle: "A Textbook for CBSE Class IX",
  author: "Author Name",
  editor: "Dr. K. P. Bakhya Seema",
  price: 350,
  cover: "assets/book2-cover.jpg",
  badge: "New Arrival",
  isbn: "978-XXX-XXXXX-X",
  description: "Brief description of the book.",
  boardTag: "CBSE",
  classTag: "Class IX",
  inStock: true
}
```

4. Save the file. Refresh your browser — book appears automatically.
5. Place the book cover image in the `assets/` folder with the same name you put in `cover:`.

---

## ✏️ How to Add a Team Member

1. Open `data/authors.js` in Notepad
2. Add a new block after the last team member (same pattern)
3. Place their photo in `assets/` folder

---

## 🖼️ How to Add Your Logo & Photos

1. Open the `assets/` folder
2. Place your files with these exact names:
   - **Logo**: `logo.png`
   - **Book cover**: `book-cover.jpg`
   - **Chief Editor photo**: `chief-editor.jpg`
   - **Author photo**: `author-velvignesh.jpg`

If the file is missing, the site shows initials (e.g., "BS") automatically — so nothing breaks.

---

## 📋 How to Add the Google Form (Enquiry Form)

**Step 1: Create a Google Form**
- Go to [forms.google.com](https://forms.google.com)
- Create your form with the required questions
- Link it to a Google Sheet (so responses go to Excel)

**Step 2: Get the Embed URL**
- In Google Forms, click the ⋮ (three dots) → "Embed"
- Copy the URL inside `src="..."`

**Step 3: Update the website**
- Open `index.html` in Notepad
- Find the section with the comment: `<!-- STEP 1 (NOW): The placeholder below... -->`
- **Delete** the entire `<div class="gform-placeholder">...</div>` block
- **Uncomment** (remove `<!--` and `-->` from) the `<iframe ...>` block
- Replace `YOUR_GOOGLE_FORM_EMBED_URL` with your actual URL
- Save and re-upload to GitHub

---

## 🌐 How to Host on GitHub Pages (Free)

### First Time Setup:

1. **Create a GitHub account** at [github.com](https://github.com) (free)

2. **Create a new repository**:
   - Click "New" → name it `chenyixpublications` (or your domain)
   - Set it to **Public**
   - Click "Create repository"

3. **Upload your files**:
   - Open the repository
   - Drag and drop the entire `chenyix_site/` folder contents (NOT the folder itself, the files inside)
   - Commit (save)

4. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Source" select: **Deploy from a branch**
   - Branch: `main` → Folder: `/ (root)`
   - Click **Save**

5. **Your site is live!**
   - URL: `https://yourusername.github.io/chenyixpublications/`
   - Takes 1–2 minutes to go live

### GitHub's Role:
- GitHub acts as your **free web server** and **file host**
- GitHub Pages converts your HTML files into a live website
- Every time you update a file, the website updates within ~2 minutes
- You can point a custom domain (e.g., `www.chenyixpublications.com`) to it later

---

## 🔄 How to Update the Website (After Initial Upload)

1. Edit the files locally (e.g., add a book in `data/books.js`)
2. Go to your GitHub repository
3. Navigate to the file
4. Click the ✏️ edit icon → paste your changes → commit
5. Site updates in ~2 minutes

---

## 🏫 How to Add Client Schools

1. Open `index.html` in Notepad
2. Find the section: `<!-- ── EDIT THESE to add real school names ── -->`
3. Replace `Your Partner School` with real school names
4. Copy and paste more `<div class="client-card">` blocks for more schools

---

## 📞 Contact Info (Already in the site)
- **Phone**: 88704 37350 / 84893 99017
- **WhatsApp**: https://wa.me/918870437350
- **Email**: ChenyixPublications@outlook.com / chenyixpublications@gmail.com
- **Madurai**: Ramasamy Nagar Extension, Goundar Nagar, Siruthur – 625014
- **Bangalore**: White Rose Layout, Whitefield – 560066

---

*For technical help, contact the website developer or re-open this guide.*
