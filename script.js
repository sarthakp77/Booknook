
/* =========================================
   BOOK NOOK - Main JavaScript
   Beginner-friendly bookstore application
   ========================================= */

// 1. BOOK DATA
// ISBN cover URLs use Open Library's public cover service.

const books = [
  {
    id: 1, title: "Atomic Habits", author: "James Clear",
    category: "Self-Help & Personal Development",
    isbn: "9780735211292", price: 399, original: 599,
    rating: 4.8, popularity: 100, year: 2025, stock: 12,
    best: true, trending: true, newest: false,
    description: "A practical guide to building good habits, breaking bad ones and making small changes that lead to remarkable results."
  },
  {
    id: 2, title: "The Alchemist", author: "Paulo Coelho",
    category: "Fiction", isbn: "9780062315007",
    price: 249, original: 350, rating: 4.7,
    popularity: 98, year: 2024, stock: 15,
    best: true, trending: true, newest: false,
    description: "Follow Santiago, a young shepherd, on an inspiring journey to discover his personal legend and the meaning of his dreams."
  },
  {
    id: 3, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki",
    category: "Non-Fiction", isbn: "9781612681139",
    price: 349, original: 499, rating: 4.6,
    popularity: 97, year: 2024, stock: 10,
    best: true, trending: true, newest: false,
    description: "Explore different approaches to money, financial education, assets and building long-term wealth."
  },
  {
    id: 4, title: "Ikigai", author: "Héctor García & Francesc Miralles",
    category: "Self-Help & Personal Development",
    isbn: "9780143130727", price: 279, original: 399,
    rating: 4.5, popularity: 94, year: 2025, stock: 14,
    best: true, trending: true, newest: false,
    description: "Discover Japanese ideas about purpose, daily routines, longevity and finding joy in everyday life."
  },
  {
    id: 5, title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling", category: "Science Fiction & Fantasy",
    isbn: "9780590353427", price: 399, original: 499,
    rating: 4.9, popularity: 99, year: 2024, stock: 9,
    best: true, trending: true, newest: false,
    description: "Enter the magical world of Hogwarts as Harry discovers his identity, friendship and the beginnings of an extraordinary adventure."
  },
  {
    id: 6, title: "The Psychology of Money",
    author: "Morgan Housel", category: "Non-Fiction",
    isbn: "9780857197689", price: 329, original: 450,
    rating: 4.7, popularity: 96, year: 2025, stock: 11,
    best: true, trending: true, newest: false,
    description: "Learn how behaviour, patience, risk and personal experiences influence the way people save, spend and invest."
  },
  {
    id: 7, title: "Clean Code", author: "Robert C. Martin",
    category: "Programming & Technology",
    isbn: "9780132350884", price: 699, original: 899,
    rating: 4.6, popularity: 88, year: 2025, stock: 6,
    best: false, trending: true, newest: false,
    description: "Learn principles and practices for writing readable, maintainable and well-structured software."
  },
  {
    id: 8, title: "The Great Gatsby", author: "F. Scott Fitzgerald",
    category: "Fiction", isbn: "9780743273565",
    price: 199, original: 299, rating: 4.3,
    popularity: 75, year: 2023, stock: 10,
    best: false, trending: false, newest: false,
    description: "A classic American novel exploring ambition, wealth, love and the elusive promise of the American Dream."
  },
  {
    id: 9, title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson", category: "Mystery & Thriller",
    isbn: "9780307454546", price: 349, original: 499,
    rating: 4.4, popularity: 82, year: 2024, stock: 7,
    best: false, trending: true, newest: false,
    description: "A journalist and a brilliant hacker investigate a decades-old disappearance in a gripping mystery."
  },
  {
    id: 10, title: "Dune", author: "Frank Herbert",
    category: "Science Fiction & Fantasy",
    isbn: "9780441172719", price: 449, original: 599,
    rating: 4.7, popularity: 91, year: 2025, stock: 8,
    best: false, trending: true, newest: false,
    description: "Journey to the desert planet Arrakis, where political intrigue, prophecy and a valuable resource shape humanity's future."
  },
  {
    id: 11, title: "Pride and Prejudice", author: "Jane Austen",
    category: "Romance", isbn: "9780141439518",
    price: 229, original: 299, rating: 4.6,
    popularity: 86, year: 2023, stock: 13,
    best: false, trending: false, newest: false,
    description: "A witty classic about Elizabeth Bennet, Mr Darcy, misunderstandings, family and the unexpected nature of love."
  },
  {
    id: 12, title: "The Notebook", author: "Nicholas Sparks",
    category: "Romance", isbn: "9780446605236",
    price: 299, original: 399, rating: 4.4,
    popularity: 79, year: 2024, stock: 9,
    best: false, trending: false, newest: false,
    description: "A moving romantic story about enduring love, shared memories and the passage of time."
  },
  {
    id: 13, title: "Deep Work", author: "Cal Newport",
    category: "Self-Help & Personal Development",
    isbn: "9781455586691", price: 379, original: 499,
    rating: 4.5, popularity: 89, year: 2025, stock: 8,
    best: false, trending: true, newest: false,
    description: "Learn how focused, distraction-free work can improve productivity and help you develop valuable skills."
  },
  {
    id: 14, title: "Think and Grow Rich", author: "Napoleon Hill",
    category: "Non-Fiction", isbn: "9781585424337",
    price: 249, original: 350, rating: 4.4,
    popularity: 84, year: 2023, stock: 10,
    best: false, trending: false, newest: false,
    description: "A classic personal-development book about goals, persistence, mindset and principles for pursuing success."
  },
  {
    id: 15, title: "The Silent Patient", author: "Alex Michaelides",
    category: "Mystery & Thriller", isbn: "9781250301697",
    price: 349, original: 499, rating: 4.5,
    popularity: 90, year: 2025, stock: 5,
    best: false, trending: true, newest: true,
    description: "A psychological thriller about a famous painter who stops speaking after a shocking crime."
  },
  {
    id: 16, title: "The Hobbit", author: "J. R. R. Tolkien",
    category: "Science Fiction & Fantasy",
    isbn: "9780547928227", price: 349, original: 449,
    rating: 4.8, popularity: 92, year: 2024, stock: 7,
    best: false, trending: true, newest: false,
    description: "Join Bilbo Baggins on an unexpected adventure filled with dwarves, dragons, riddles and courage."
  },
  {
    id: 17, title: "Wings of Fire", author: "A. P. J. Abdul Kalam",
    category: "Non-Fiction", isbn: "9788173711466",
    price: 299, original: 399, rating: 4.7,
    popularity: 93, year: 2025, stock: 12,
    best: false, trending: true, newest: false,
    description: "The autobiography of A. P. J. Abdul Kalam, tracing his journey from childhood to becoming a leading aerospace scientist."
  },
  {
    id: 18, title: "Introduction to Algorithms",
    author: "Thomas H. Cormen et al.",
    category: "Academic & Educational Books",
    isbn: "9780262046305", price: 899, original: 1199,
    rating: 4.6, popularity: 83, year: 2025, stock: 4,
    best: false, trending: false, newest: true,
    description: "A comprehensive textbook covering essential algorithms, data structures and computational problem-solving techniques."
  },
  {
    id: 19, title: "The Very Hungry Caterpillar",
    author: "Eric Carle", category: "Children's Books",
    isbn: "9780399226908", price: 249, original: 325,
    rating: 4.8, popularity: 87, year: 2024, stock: 10,
    best: false, trending: false, newest: false,
    description: "A colourful picture-book adventure that introduces young readers to counting, food, days of the week and transformation."
  },
  {
    id: 20, title: "Charlotte's Web", author: "E. B. White",
    category: "Children's Books", isbn: "9780064400558",
    price: 279, original: 349, rating: 4.7,
    popularity: 80, year: 2024, stock: 9,
    best: false, trending: false, newest: false,
    description: "A heartwarming tale of friendship between Wilbur the pig and Charlotte the spider."
  },
  {
    id: 21, title: "The Lean Startup", author: "Eric Ries",
    category: "Non-Fiction", isbn: "9780307887894",
    price: 399, original: 549, rating: 4.4,
    popularity: 81, year: 2025, stock: 6,
    best: false, trending: true, newest: true,
    description: "Discover a practical approach to building businesses, testing ideas and learning from customer feedback."
  },
  {
    id: 22, title: "Computer Networking: A Top-Down Approach",
    author: "James Kurose & Keith Ross",
    category: "Programming & Technology",
    isbn: "9780136681557", price: 799, original: 999,
    rating: 4.6, popularity: 78, year: 2025, stock: 5,
    best: false, trending: false, newest: true,
    description: "Study computer networks through practical examples of Internet architecture, protocols and network applications."
  },
  {
    id: 23, title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "Mystery & Thriller",
    isbn: "9780141439556", price: 229, original: 299,
    rating: 4.5, popularity: 85, year: 2024, stock: 11,
    best: false, trending: false, newest: false,
    description: "Enjoy classic detective stories featuring Sherlock Holmes and Dr Watson as they solve intriguing mysteries."
  },
  {
    id: 24, title: "The Fault in Our Stars",
    author: "John Green", category: "Romance",
    isbn: "9780142424179", price: 299, original: 399,
    rating: 4.5, popularity: 88, year: 2025, stock: 8,
    best: false, trending: true, newest: false,
    description: "A moving young-adult novel about love, friendship, illness and finding meaning in unexpected places."
  }
];

// 2. APPLICATION SETTINGS

const FREE_SHIPPING_MINIMUM = 999;
const SHIPPING_CHARGE = 60;

const categories = [
  { name: "Fiction", icon: "fa-feather-pointed" },
  { name: "Non-Fiction", icon: "fa-lightbulb" },
  { name: "Mystery & Thriller", icon: "fa-user-secret" },
  { name: "Science Fiction & Fantasy", icon: "fa-dragon" },
  { name: "Romance", icon: "fa-heart" },
  { name: "Self-Help & Personal Development", icon: "fa-seedling" },
  { name: "Academic & Educational Books", icon: "fa-graduation-cap" },
  { name: "Programming & Technology", icon: "fa-laptop-code" },
  { name: "Children's Books", icon: "fa-puzzle-piece" }
];

const coupons = {
  READ10: { percent: 10, minimum: 0 },
  BOOK20: { percent: 20, minimum: 1000 }
};

// 3. SAFE LOCALSTORAGE HELPERS

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    console.warn("Could not read saved data:", key);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save data:", key);
    showToast("Browser storage is unavailable. Changes may not persist.");
  }
}

function validIdArray(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter(id =>
    Number.isInteger(id) && books.some(book => book.id === id)
  ))];
}

function loadCart() {
  const saved = readStorage("bookNookCart", []);
  if (!Array.isArray(saved)) return [];

  const result = [];
  saved.forEach(item => {
    const id = Number(item.id);
    const book = books.find(b => b.id === id);
    if (!book || !Number.isInteger(item.qty) || item.qty < 1) return;

    const existing = result.find(row => row.id === id);
    if (existing) {
      existing.qty = Math.min(book.stock, existing.qty + item.qty);
    } else {
      result.push({ id, qty: Math.min(book.stock, item.qty) });
    }
  });
  return result;
}

// 4. APPLICATION STATE

let cart = loadCart();
let wishlist = validIdArray(readStorage("bookNookWishlist", []));
let appliedCoupon = "";
let currentQuickFilter = "All";
let toastTimer;
let previousFocus = null;

// 5. DOM HELPERS

const $ = selector => document.querySelector(selector);

const bookGrid = $("#bookGrid");
const bestSellerGrid = $("#bestSellerGrid");
const categoryGrid = $("#categoryGrid");
const cartPanel = $("#cartPanel");
const wishlistPanel = $("#wishlistPanel");
const overlay = $("#overlay");
const detailsModal = $("#detailsModal");
const checkoutModal = $("#checkoutModal");

const money = amount => "₹" + amount.toLocaleString("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getBook(id) {
  return books.find(book => book.id === Number(id));
}

function bookCover(book) {
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
}

// A local generated SVG is used if a remote cover cannot load.
function fallbackCover(book) {
  const title = escapeHTML(book.title);
  const author = escapeHTML(book.author);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="500">
      <rect width="100%" height="100%" fill="#3b281f"/>
      <rect x="15" y="15" width="330" height="470"
        rx="5" fill="none" stroke="#c49a45" stroke-width="3"/>
      <text x="180" y="115" fill="#e4c47d" font-size="20"
        text-anchor="middle">BOOK NOOK</text>
      <path d="M65 150 H295" stroke="#c49a45" stroke-width="2"/>
      <foreignObject x="30" y="175" width="300" height="180">
        <div xmlns="http://www.w3.org/1999/xhtml"
          style="font:bold 25px Georgia;color:#fff8e9;text-align:center;
          overflow-wrap:break-word;">
          ${title}
        </div>
      </foreignObject>
      <text x="180" y="405" fill="#e4c47d" font-size="15"
        text-anchor="middle">${author}</text>
    </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function attachImageFallback(img, book) {
  img.addEventListener("error", function () {
    if (this.dataset.fallbackUsed === "true") return;
    this.dataset.fallbackUsed = "true";
    this.src = fallbackCover(book);
  });
}

function renderBookImage(book, className = "book-cover") {
  return `<img class="${className}" src="${bookCover(book)}"
    alt="Cover of ${escapeHTML(book.title)}"
    data-book-id="${book.id}" loading="lazy">`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// 6. CATEGORY SETUP

function renderCategories() {
  categoryGrid.innerHTML = categories.map(category => {
    const count = books.filter(book => book.category === category.name).length;
    return `
      <button class="category-card" data-category="${escapeHTML(category.name)}">
        <span class="category-icon"><i class="fa-solid ${category.icon}"></i></span>
        <strong>${escapeHTML(category.name)}</strong>
        <small>${count} books to explore</small>
      </button>`;
  }).join("");

  $("#categoryFilter").innerHTML =
    `<option value="All">All Categories</option>` +
    categories.map(category =>
      `<option value="${escapeHTML(category.name)}">${escapeHTML(category.name)}</option>`
    ).join("");
}

// 7. BOOK CARDS

function bookCard(book) {
  const discount = Math.round((1 - book.price / book.original) * 100);
  const saved = wishlist.includes(book.id);

  return `
    <article class="book-card">
      <div class="book-cover-wrap">
        <span class="book-badge ${discount > 0 ? "sale" : ""}">
          ${book.newest ? "NEW ARRIVAL" : discount > 0 ? `${discount}% OFF` : "POPULAR"}
        </span>
        <button class="wishlist-toggle ${saved ? "active" : ""}"
          data-action="wishlist" data-id="${book.id}"
          aria-label="${saved ? "Remove from wishlist" : "Add to wishlist"}"
          aria-pressed="${saved}">
          <i class="${saved ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
        ${renderBookImage(book)}
      </div>
      <div class="book-info">
        <span class="book-category">${escapeHTML(book.category)}</span>
        <h3 class="book-title">${escapeHTML(book.title)}</h3>
        <p class="book-author">by ${escapeHTML(book.author)}</p>
        <p class="book-description">${escapeHTML(book.description)}</p>
        <div class="rating" aria-label="Rated ${book.rating} out of 5 stars">
          <i class="fa-solid fa-star"></i> ${book.rating.toFixed(1)}
          <span>(${book.popularity} readers)</span>
        </div>
        <p class="availability ${book.stock ? "" : "unavailable"}">
          <i class="fa-solid ${book.stock ? "fa-circle-check" : "fa-circle-xmark"}"></i>
          ${book.stock ? `In Stock (${book.stock})` : "Out of Stock"}
        </p>
        <div class="price-row">
          <span class="current-price">${money(book.price)}</span>
          <span class="original-price">${money(book.original)}</span>
          <span class="discount-label">${discount}% OFF</span>
        </div>
        <div class="book-actions">
          <button class="btn btn-primary" data-action="add" data-id="${book.id}"
            ${book.stock ? "" : "disabled"}>
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>
          <button class="btn btn-outline" data-action="wishlist"
            data-id="${book.id}">
            <i class="fa-regular fa-heart"></i> Wishlist
          </button>
          <button class="btn details-btn" data-action="details" data-id="${book.id}">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>`;
}

function setupImages(root) {
  root.querySelectorAll("img[data-book-id]").forEach(img => {
    const book = getBook(img.dataset.bookId);
    if (book) attachImageFallback(img, book);
  });
}

function renderBestSellers() {
  bestSellerGrid.innerHTML = books.filter(book => book.best)
    .slice(0, 4).map(bookCard).join("");
  setupImages(bestSellerGrid);
}

// 8. SEARCH, CATEGORY FILTERS, PRICE FILTERS AND SORTING

function getFilteredBooks() {
  let result = [...books];
  const query = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const minRaw = $("#minPrice").value;
  const maxRaw = $("#maxPrice").value;
  const min = minRaw === "" ? 0 : Number(minRaw);
  const max = maxRaw === "" ? Infinity : Number(maxRaw);

  result = result.filter(book => {
    const searchable = [
      book.title, book.author, book.category, book.description
    ].join(" ").toLowerCase();

    const matchesQuery = searchable.includes(query);
    const matchesCategory = category === "All" || book.category === category;
    const matchesPrice = book.price >= min && book.price <= max;

    let matchesQuick = true;
    if (currentQuickFilter === "Trending") matchesQuick = book.trending;
    if (currentQuickFilter === "New") matchesQuick = book.newest;
    if (currentQuickFilter === "Offers") matchesQuick = book.original > book.price;
    if (currentQuickFilter === "Wishlist") matchesQuick = wishlist.includes(book.id);

    return matchesQuery && matchesCategory && matchesPrice && matchesQuick;
  });

  switch ($("#sortFilter").value) {
    case "low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      result.sort((a, b) => Number(b.newest) - Number(a.newest) ||
        b.year - a.year || b.id - a.id);
      break;
    default:
      result.sort((a, b) => b.popularity - a.popularity);
  }

  return result;
}

function renderBooks() {
  const result = getFilteredBooks();
  bookGrid.innerHTML = result.map(bookCard).join("");
  $("#resultCount").textContent =
    `Showing ${result.length} of ${books.length} books`;

  $("#noResults").classList.toggle("hidden", result.length !== 0);
  bookGrid.classList.toggle("hidden", result.length === 0);

  document.querySelectorAll(".quick-filter").forEach(button => {
    button.classList.toggle("active",
      button.dataset.quick === currentQuickFilter);
  });

  setupImages(bookGrid);
}

function refreshBookDisplays() {
  renderBooks();
  renderBestSellers();
}

function resetFilters() {
  $("#searchInput").value = "";
  $("#categoryFilter").value = "All";
  $("#minPrice").value = "";
  $("#maxPrice").value = "";
  $("#sortFilter").value = "popular";
  currentQuickFilter = "All";
  renderBooks();
}

function applyCategory(category) {
  $("#categoryFilter").value = category;
  currentQuickFilter = "All";
  renderBooks();
  $("#shop").scrollIntoView({ behavior: "smooth" });
}

// 9. SHOPPING CART

function saveCart() {
  saveStorage("bookNookCart", cart);
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function cartSubtotal() {
  return cart.reduce((total, item) => {
    const book = getBook(item.id);
    return total + (book ? book.price * item.qty : 0);
  }, 0);
}

function getTotals() {
  const subtotal = cartSubtotal();
  const coupon = coupons[appliedCoupon];
  const couponValid = coupon && subtotal >= coupon.minimum;
  const discount = couponValid ? subtotal * coupon.percent / 100 : 0;
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_MINIMUM
    ? 0 : SHIPPING_CHARGE;
  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function addToCart(id) {
  const book = getBook(id);
  if (!book || book.stock < 1) {
    showToast("This book is currently unavailable.");
    return;
  }

  const existing = cart.find(item => item.id === book.id);
  if (existing) {
    if (existing.qty >= book.stock) {
      showToast("You have reached the available stock limit.");
      return;
    }
    existing.qty++;
  } else {
    cart.push({ id: book.id, qty: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${book.title} added to your cart.`);
}

function changeQuantity(id, change) {
  const item = cart.find(row => row.id === Number(id));
  const book = getBook(id);
  if (!item || !book) return;

  const nextQuantity = item.qty + change;

  if (nextQuantity <= 0) {
    removeFromCart(id);
    return;
  }

  if (nextQuantity > book.stock) {
    showToast("No more stock is available for this book.");
    return;
  }

  item.qty = nextQuantity;
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  const book = getBook(id);
  cart = cart.filter(item => item.id !== Number(id));
  saveCart();
  renderCart();
  showToast(book ? `${book.title} removed from your cart.` : "Book removed.");
}

function clearCart() {
  if (!cart.length) {
    showToast("Your cart is already empty.");
    return;
  }

  cart = [];
  appliedCoupon = "";
  $("#couponInput").value = "";
  $("#couponMessage").textContent = "";
  saveCart();
  renderCart();
  showToast("Your cart has been cleared.");
}

function renderCart() {
  $("#cartCount").textContent = cartQuantity();
  $("#cartSubtitle").textContent =
    `${cartQuantity()} book${cartQuantity() === 1 ? "" : "s"}`;

  const itemsContainer = $("#cartItems");
  const empty = cart.length === 0;

  $("#emptyCart").classList.toggle("hidden", !empty);
  $("#cartSummary").classList.toggle("hidden", empty);
  itemsContainer.classList.toggle("hidden", empty);

  itemsContainer.innerHTML = cart.map(item => {
    const book = getBook(item.id);
    if (!book) return "";

    return `
      <div class="cart-item">
        ${renderBookImage(book, "cart-cover")}
        <div>
          <h4>${escapeHTML(book.title)}</h4>
          <p class="item-author">${escapeHTML(book.author)}</p>
          <p class="item-price">${money(book.price * item.qty)}</p>
          <div class="cart-item-bottom">
            <div class="quantity-control">
              <button data-action="quantity" data-id="${book.id}"
                data-change="-1" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-action="quantity" data-id="${book.id}"
                data-change="1" aria-label="Increase quantity"
                ${item.qty >= book.stock ? "disabled" : ""}>+</button>
            </div>
            <button class="remove-btn" data-action="remove" data-id="${book.id}">
              <i class="fa-regular fa-trash-can"></i> Remove
            </button>
          </div>
        </div>
      </div>`;
  }).join("");

  setupImages(itemsContainer);

  const totals = getTotals();
  $("#subtotal").textContent = money(totals.subtotal);
  $("#discount").textContent = "−" + money(totals.discount);
  $("#shipping").textContent =
    totals.shipping === 0 && totals.subtotal > 0
      ? "FREE" : money(totals.shipping);
  $("#grandTotal").textContent = money(totals.total);

  const remaining = Math.max(0, FREE_SHIPPING_MINIMUM - totals.subtotal);
  $("#shippingMessage").textContent = empty
    ? "Add books to your cart to get started."
    : remaining > 0
      ? `Add ${money(remaining)} more for free shipping!`
      : "Congratulations! Your order qualifies for free shipping.";

  $("#shippingProgress").style.width =
    Math.min(100, totals.subtotal / FREE_SHIPPING_MINIMUM * 100) + "%";

  $("#checkoutBtn").disabled = empty;
  $("#clearCart").disabled = empty;

  if (appliedCoupon) {
    const coupon = coupons[appliedCoupon];
    const valid = coupon && totals.subtotal >= coupon.minimum;

    $("#couponMessage").textContent = valid
      ? `${appliedCoupon} applied: ${coupon.percent}% off.`
      : `${appliedCoupon} needs a minimum order of ${money(coupon.minimum)}.`;

    $("#couponMessage").className =
      "form-message " + (valid ? "success" : "error");
  }
}

// 10. COUPON CODE VALIDATION

function applyCoupon(event) {
  event.preventDefault();
  const code = $("#couponInput").value.trim().toUpperCase();

  if (!code) {
    $("#couponMessage").textContent = "Please enter a coupon code.";
    $("#couponMessage").className = "form-message error";
    return;
  }

  if (!coupons[code]) {
    appliedCoupon = "";
    $("#couponMessage").textContent = "Invalid coupon code.";
    $("#couponMessage").className = "form-message error";
    renderCart();
    return;
  }

  if (cart.length === 0) {
    $("#couponMessage").textContent = "Add a book before applying a coupon.";
    $("#couponMessage").className = "form-message error";
    return;
  }

  if (cartSubtotal() < coupons[code].minimum) {
    $("#couponMessage").textContent =
      `Minimum order for ${code} is ${money(coupons[code].minimum)}.`;
    $("#couponMessage").className = "form-message error";
    return;
  }

  appliedCoupon = code;
  $("#couponInput").value = code;
  renderCart();
  showToast(`${code} coupon applied successfully!`);
}

// 11. WISHLIST

function saveWishlist() {
  saveStorage("bookNookWishlist", wishlist);
}

function toggleWishlist(id) {
  const book = getBook(id);
  if (!book) return;

  if (wishlist.includes(book.id)) {
    wishlist = wishlist.filter(itemId => itemId !== book.id);
    showToast("Removed from your wishlist.");
  } else {
    wishlist.push(book.id);
    showToast("Added to your wishlist.");
  }

  saveWishlist();
  renderWishlist();
  refreshBookDisplays();
}

function renderWishlist() {
  $("#wishlistCount").textContent = wishlist.length;
  $("#wishlistSubtitle").textContent =
    `${wishlist.length} saved book${wishlist.length === 1 ? "" : "s"}`;

  const container = $("#wishlistItems");
  container.innerHTML = wishlist.map(id => {
    const book = getBook(id);
    if (!book) return "";

    return `
      <div class="cart-item">
        ${renderBookImage(book, "wishlist-cover")}
        <div>
          <h4>${escapeHTML(book.title)}</h4>
          <p class="item-author">${escapeHTML(book.author)}</p>
          <p class="item-price">${money(book.price)}</p>
          <button class="btn btn-primary" data-action="add" data-id="${book.id}"
            ${book.stock ? "" : "disabled"}>Add to Cart</button>
          <button class="remove-btn" data-action="wishlist"
            data-id="${book.id}">Remove</button>
        </div>
      </div>`;
  }).join("");

  setupImages(container);
  $("#emptyWishlist").classList.toggle("hidden", wishlist.length > 0);
  container.classList.toggle("hidden", wishlist.length === 0);
}

// 12. BOOK DETAILS AND RELATED BOOKS

function openDetails(id) {
  const book = getBook(id);
  if (!book) return;

  previousFocus = document.activeElement;

  const related = books.filter(item =>
    item.id !== book.id && item.category === book.category
  ).slice(0, 3);

  $("#detailsContent").innerHTML = `
    <div class="details-layout">
      ${renderBookImage(book, "details-cover")}
      <div>
        <span class="book-category">${escapeHTML(book.category)}</span>
        <h2 id="detailTitle">${escapeHTML(book.title)}</h2>
        <p class="detail-author">by ${escapeHTML(book.author)}</p>
        <div class="rating"><i class="fa-solid fa-star"></i>
          ${book.rating.toFixed(1)} / 5</div>
        <p class="detail-description">${escapeHTML(book.description)}</p>
        <p class="availability ${book.stock ? "" : "unavailable"}">
          ${book.stock ? "In Stock" : "Out of Stock"}
        </p>
        <p class="current-price">${money(book.price)}</p>
        <p><span class="original-price">${money(book.original)}</span>
          <span class="discount-label">
            ${Math.round((1 - book.price / book.original) * 100)}% OFF
          </span></p>
        <button class="btn btn-primary" data-action="add" data-id="${book.id}"
          ${book.stock ? "" : "disabled"}>Add to Cart</button>
        <button class="btn btn-outline" data-action="wishlist" data-id="${book.id}">
          <i class="fa-regular fa-heart"></i> Wishlist</button>
      </div>
    </div>
    ${related.length ? `
      <div class="related-section">
        <h3>More books in this genre</h3>
        <div class="related-list">
          ${related.map(item => `
            <button class="related-book" data-action="details" data-id="${item.id}">
              ${escapeHTML(item.title)} <span>${money(item.price)}</span>
            </button>
          `).join("")}
        </div>
      </div>` : ""}
  `;

  setupImages($("#detailsContent"));
  openModal(detailsModal);
}

// 13. SIDEBARS AND MODALS

function closeSidePanels() {
  cartPanel.classList.remove("open");
  wishlistPanel.classList.remove("open");
  overlay.classList.remove("active");
  cartPanel.setAttribute("aria-hidden", "true");
  wishlistPanel.setAttribute("aria-hidden", "true");
  updateBodyScroll();
}

function openSidePanel(panel) {
  closeModals();
  closeSidePanels();

  panel.classList.add("open");
  overlay.classList.add("active");
  panel.setAttribute("aria-hidden", "false");
  updateBodyScroll();

  const closeButton = panel.querySelector("[data-close]");
  if (closeButton) closeButton.focus();
}

function openModal(modal) {
  closeSidePanels();
  closeModals();
  previousFocus = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  updateBodyScroll();

  const closeButton = modal.querySelector("[data-close]");
  if (closeButton) closeButton.focus();
}

function closeModals() {
  [detailsModal, checkoutModal].forEach(modal => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
  updateBodyScroll();
}

function closeAllPanels() {
  closeSidePanels();
  closeModals();
  $("#navLinks").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  $("#menuToggle").innerHTML = '<i class="fa-solid fa-bars"></i>';
}

function updateBodyScroll() {
  const anyOpen =
    cartPanel.classList.contains("open") ||
    wishlistPanel.classList.contains("open") ||
    detailsModal.classList.contains("open") ||
    checkoutModal.classList.contains("open");

  document.body.classList.toggle("no-scroll", anyOpen);
}

function closeAndRestoreFocus() {
  closeAllPanels();
  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

// 14. CHECKOUT DEMONSTRATION

function startCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }

  const totals = getTotals();
  previousFocus = document.activeElement;

  $("#checkoutContent").innerHTML = `
    <div class="checkout-form">
      <span class="eyebrow">YOUR NEXT CHAPTER</span>
      <h2 id="checkoutTitle">Demo Checkout</h2>
      <p>Enter sample details to demonstrate an order. No payment
        is collected and no real order is placed.</p>
      <form id="checkoutForm">
        <label for="checkoutName">Full name</label>
        <input id="checkoutName" name="name" required minlength="2"
          maxlength="80" autocomplete="name" placeholder="Your full name">
        <label for="checkoutEmail">Email address</label>
        <input id="checkoutEmail" name="email" type="email"
          required autocomplete="email" placeholder="you@example.com">
        <label for="checkoutAddress">Delivery address</label>
        <textarea id="checkoutAddress" name="address" required
          minlength="8" maxlength="300" rows="3"
          autocomplete="street-address" placeholder="Enter a sample address"></textarea>
        <div class="checkout-total">
          <span>Demo order total</span>
          <strong>${money(totals.total)}</strong>
        </div>
        <button class="btn btn-primary" type="submit" style="width:100%">
          Confirm Demo Order
        </button>
      </form>
    </div>`;

  openModal(checkoutModal);
  $("#checkoutName").focus();
}

function completeCheckout(event) {
  event.preventDefault();

  if (!cart.length) {
    showToast("Your cart is empty.");
    closeModals();
    return;
  }

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const totals = getTotals();
  const orderId = "BN" + Date.now().toString().slice(-8);

  // Save only a demonstration order, not payment or sensitive details.
  const demoOrder = {
    orderId,
    itemCount: cartQuantity(),
    total: totals.total,
    date: new Date().toLocaleDateString("en-IN")
  };

  $("#checkoutContent").innerHTML = `
    <div class="checkout-success">
      <i class="fa-solid fa-circle-check"></i>
      <h2 id="checkoutTitle">Order Successful!</h2>
      <p>Your BOOK NOOK demo order has been created successfully.</p>
      <p><strong>Demo Order ID:</strong> ${escapeHTML(orderId)}</p>
      <p><strong>Books:</strong> ${demoOrder.itemCount}</p>
      <p><strong>Total:</strong> ${money(demoOrder.total)}</p>
      <p>This is a front-end demonstration. No real payment or delivery
        has been arranged.</p>
      <button class="btn btn-primary" id="finishOrder">Continue Shopping</button>
    </div>`;

  // Reset the cart only after the demo order succeeds.
  cart = [];
  appliedCoupon = "";
  $("#couponInput").value = "";
  saveCart();
  renderCart();
  renderBooks();

  $("#finishOrder").addEventListener("click", () => {
    closeAndRestoreFocus();
    $("#shop").scrollIntoView({ behavior: "smooth" });
    showToast("Thank you for exploring BOOK NOOK!");
  });

  $("#finishOrder").focus();
}

// 15. NEWSLETTER AND CONTACT FORMS

function handleNewsletter(event) {
  event.preventDefault();

  const emailInput = $("#newsletterEmail");
  const message = $("#newsletterMessage");

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  // Front-end demonstration only: no email is actually sent.
  message.textContent = "Thank you for subscribing! (Demo only)";
  message.className = "form-message success";
  event.currentTarget.reset();
}

function handleContact(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const feedback = $("#contactFeedback");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // No backend exists, so the message is not transmitted.
  feedback.textContent =
    "Thank you! Your sample message passed validation. No message was sent.";
  feedback.className = "form-message success";
  form.reset();
}

// 16. EVENT LISTENERS

// Event delegation lets product buttons work after every re-render.
document.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");

  if (actionButton) {
    const id = Number(actionButton.dataset.id);
    const action = actionButton.dataset.action;

    if (action === "add") addToCart(id);
    if (action === "wishlist") toggleWishlist(id);
    if (action === "details") openDetails(id);
    if (action === "remove") removeFromCart(id);

    if (action === "quantity") {
      changeQuantity(id, Number(actionButton.dataset.change));
    }
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    applyCategory(categoryButton.dataset.category);
  }

  const quickButton = event.target.closest("[data-quick]");
  if (quickButton) {
    currentQuickFilter = quickButton.dataset.quick;
    renderBooks();
  }

  const footerFilter = event.target.closest("[data-footer-filter]");
  if (footerFilter) {
    currentQuickFilter = footerFilter.dataset.footerFilter;
    renderBooks();
  }
});

$("#cartBtn").addEventListener("click", () => {
  openSidePanel(cartPanel);
});

$("#wishlistBtn").addEventListener("click", () => {
  renderWishlist();
  openSidePanel(wishlistPanel);
});

$("#headerSearchBtn").addEventListener("click", () => {
  $("#shop").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => $("#searchInput").focus(), 350);
});

$("#overlay").addEventListener("click", closeSidePanels);

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closeAndRestoreFocus);
});

[detailsModal, checkoutModal].forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeAndRestoreFocus();
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAndRestoreFocus();
  }
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navLinks");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

$("#navLinks").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("#navLinks").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Search and filters
$("#searchInput").addEventListener("input", renderBooks);
$("#categoryFilter").addEventListener("change", renderBooks);
$("#sortFilter").addEventListener("change", renderBooks);
$("#minPrice").addEventListener("input", renderBooks);
$("#maxPrice").addEventListener("input", renderBooks);

$("#clearSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  renderBooks();
  $("#searchInput").focus();
});

$("#resetFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);

$("#continueShopping").addEventListener("click", () => {
  closeAndRestoreFocus();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

$("#browseWishlist").addEventListener("click", () => {
  closeAndRestoreFocus();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

$("#clearCart").addEventListener("click", clearCart);
$("#couponForm").addEventListener("submit", applyCoupon);
$("#checkoutBtn").addEventListener("click", startCheckout);

$("#checkoutContent").addEventListener("submit", event => {
  if (event.target.id === "checkoutForm") completeCheckout(event);
});

$("#newsletterForm").addEventListener("submit", handleNewsletter);
$("#contactForm").addEventListener("submit", handleContact);

$("#copyCoupon").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("READ10");
    showToast("Coupon READ10 copied!");
  } catch (error) {
    // Clipboard access may be blocked for local files or insecure contexts.
    $("#couponInput").value = "READ10";
    openSidePanel(cartPanel);
    $("#couponInput").focus();
    showToast("READ10 is ready in the cart coupon field.");
  }
});

$("#footerCartLink").addEventListener("click", event => {
  event.preventDefault();
  openSidePanel(cartPanel);
});

// 17. INITIALIZE THE APPLICATION

function initializeApp() {
  $("#year").textContent = new Date().getFullYear();

  renderCategories();
  renderBestSellers();
  renderBooks();
  renderCart();
  renderWishlist();

  // Keep the UI updated if the same site is open in another browser tab.
  window.addEventListener("storage", event => {
    if (event.key === "bookNookCart") cart = loadCart();

    if (event.key === "bookNookWishlist") {
      wishlist = validIdArray(readStorage("bookNookWishlist", []));
    }

    renderCart();
    renderWishlist();
    refreshBookDisplays();
  });
}

initializeApp();
