// ============================================================
// CHENYIX PUBLICATIONS – Main JavaScript
// Edit only if you know what you're doing.
// To change content, edit data/books.js and data/authors.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  renderTeam();
  initNavigation();
  initTestimonialsCarousel();
  initBackToTop();
  initScrollAnimations();
  setYear();
  initVisitorCounter();
  initStatCounters();
  initAnnouncementBar();
});

// ─────────────────────────────────────────────
//  RENDER BOOKS
// ─────────────────────────────────────────────
function renderBooks() {
  const grid = document.getElementById('books-grid');
  if (!grid || typeof BOOKS === 'undefined') return;

  grid.innerHTML = BOOKS.map(book => `
    <div class="book-card animate-on-scroll">
      ${book.badge ? `<div class="book-badge">${book.badge}</div>` : ''}
      <div class="book-cover-wrap">
        <img
          src="${book.cover}"
          alt="${book.title} by ${book.author} – CHENYIX PUBLICATIONS"
          class="book-cover"
          onerror="this.src='';this.alt='Cover Image Coming Soon';this.style.background='var(--cream)';this.style.color='var(--navy)';this.style.display='flex';this.style.alignItems='center';this.style.justifyContent='center';this.style.fontSize='0.85rem';this.onerror=null;"
        >
        <div class="book-hover-overlay">
          <button class="btn btn-overlay-order" onclick="openEnquiryModal('${book.title}')">
            <i class="fas fa-shopping-cart"></i> Order Now
          </button>
        </div>
      </div>
      <div class="book-tags-row">
        ${book.boardTag ? `<span class="tag tag-board">${book.boardTag}</span>` : ''}
        ${book.classTag ? `<span class="tag tag-class">${book.classTag}</span>` : ''}
        ${book.inStock ? '<span class="tag tag-stock">In Stock</span>' : '<span class="tag tag-preorder">Pre-order</span>'}
      </div>
      <div class="book-body">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-subtitle">${book.subtitle}</p>
        <p class="book-author"><i class="fas fa-pen-nib"></i> ${book.author}</p>
        <p class="book-editor"><i class="fas fa-edit"></i> Edited by ${book.editor}</p>
        <p class="book-desc">${book.description}</p>
        ${book.isbn ? `<p class="book-isbn"><strong>ISBN:</strong> ${book.isbn}</p>` : ''}
        ${book.price ? `<p class="book-price">₹ ${book.price}/-</p>` : '<p class="book-price-note">Price on enquiry</p>'}
      </div>
      <div class="book-actions">
        <button class="btn btn-order-now" onclick="openEnquiryModal('${book.title}')">
          <i class="fas fa-shopping-cart"></i> Order Now
        </button>
        <button class="btn btn-enquire-book" onclick="openEnquiryModal('${book.title}')">
          <i class="fas fa-info-circle"></i> Enquire
        </button>
      </div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────
//  RENDER TEAM
// ─────────────────────────────────────────────
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid || typeof TEAM === 'undefined') return;

  grid.innerHTML = TEAM.map(member => `
    <div class="team-card animate-on-scroll">
      <div class="team-avatar-wrap">
        <img
          src="${member.avatar}"
          alt="${member.name} – ${member.role}"
          class="team-avatar"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="team-initials" style="display:none;">${member.initials}</div>
      </div>
      <div class="team-body">
        <span class="team-role-badge">${member.role}</span>
        <h3 class="team-name">${member.name}</h3>
        ${member.qualifications ? `<p class="team-quals">${member.qualifications}</p>` : ''}
        <p class="team-desc">${member.description}</p>
      </div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const header    = document.getElementById('site-header');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        match?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

// ─────────────────────────────────────────────
//  ENQUIRY MODAL
// ─────────────────────────────────────────────
function openEnquiryModal(bookName) {
  const modal = document.getElementById('enquiry-modal');
  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (bookName) {
    const note = document.getElementById('modal-book-note');
    if (note) note.textContent = `Enquiry for: ${bookName}`;
  }
}

function closeEnquiryModal() {
  document.getElementById('enquiry-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeEnquiryModal(); });
document.getElementById('enquiry-modal')?.addEventListener('click', e => {
  if (e.target.id === 'enquiry-modal') closeEnquiryModal();
});

// ─────────────────────────────────────────────
//  TESTIMONIALS CAROUSEL
// ─────────────────────────────────────────────
function initTestimonialsCarousel() {
  const slides       = document.querySelectorAll('.t-slide');
  const dotsWrap     = document.getElementById('t-dots');
  const prevBtn      = document.getElementById('t-prev');
  const nextBtn      = document.getElementById('t-next');
  if (!slides.length || !dotsWrap) return;

  let current = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'cdot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to review ${i + 1}`);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });

  function go(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => go(current + 1), 5000);
  }

  prevBtn?.addEventListener('click', () => go(current - 1));
  nextBtn?.addEventListener('click', () => go(current + 1));
  resetTimer();
}

// ─────────────────────────────────────────────
//  BACK TO TOP
// ─────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => btn?.classList.toggle('show', window.scrollY > 450));
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─────────────────────────────────────────────
//  SCROLL ANIMATIONS (fade-in)
// ─────────────────────────────────────────────
function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
}

// ─────────────────────────────────────────────
//  STAT COUNTERS (animated numbers)
// ─────────────────────────────────────────────
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// ─────────────────────────────────────────────
//  YEAR & VISITOR COUNTER
// ─────────────────────────────────────────────
function setYear() {
  const el = document.getElementById('yr');
  if (el) el.textContent = new Date().getFullYear();
}

function initVisitorCounter() {
  let v = parseInt(localStorage.getItem('cx_visits') || '0') + 1;
  localStorage.setItem('cx_visits', v);
  const el = document.getElementById('visitor-count');
  if (el) el.textContent = (1000 + v).toLocaleString('en-IN');
}

// ─────────────────────────────────────────────
//  ANNOUNCEMENT BAR CLOSE
// ─────────────────────────────────────────────
function initAnnouncementBar() {
  const bar = document.getElementById('ann-bar');
  const closeBtn = document.getElementById('ann-close');
  closeBtn?.addEventListener('click', () => {
    bar?.classList.add('hidden');
  });
}
