import './styles.css';

const kits = [
  {
    id: 'sg-aeroknox',
    brand: 'SG',
    name: 'Aeroknox Pro Strike',
    category: 'Batting',
    price: 3499,
    rating: 4.7,
    level: 'Starter',
    weight: '2.09 kg',
    material: 'Kashmir Willow',
    color: 'Amber Oak',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-bat',
    imageAlt: 'Cricket bat on a textured surface',
    buyUrl: 'https://www.google.com/search?q=SG+Aeroknox+Pro+Strike+buy',
    purchaseUrl: 'https://www.google.com/search?q=SG+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=SG+Aeroknox+Pro+Strike',
    highlights: ['Balanced pickup', 'Wide sweet spot', 'Tour grip', 'Player-friendly profile']
  },
  {
    id: 'kookaburra-kahuna',
    brand: 'Kookaburra',
    name: 'Kahuna Elite Flux',
    category: 'All-round',
    price: 17499,
    rating: 4.8,
    level: 'Elite',
    weight: '2.09 kg',
    material: 'English Willow',
    color: 'Forest Ash',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-helmet',
    imageAlt: 'Cricket helmet and kit accessories',
    buyUrl: 'https://www.google.com/search?q=Kookaburra+Kahuna+Elite+Flux+buy',
    purchaseUrl: 'https://www.google.com/search?q=Kookaburra+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=Kookaburra+Kahuna+Elite+Flux',
    highlights: ['High spine', 'Impact foam', 'Premium finish', 'Tour-ready stability']
  },
  {
    id: 'ss-tonner',
    brand: 'SS',
    name: 'Tonner Signature Reserve',
    category: 'Batting',
    price: 129999,
    rating: 5.0,
    level: 'Pro',
    weight: '2.06 kg',
    material: 'Grade 1 English Willow',
    color: 'Cricket Cream',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-gloves',
    imageAlt: 'Cricket batting gloves on a studio surface',
    buyUrl: 'https://www.google.com/search?q=SS+Tonner+Signature+Reserve+buy',
    purchaseUrl: 'https://www.google.com/search?q=SS+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=SS+Tonner+Signature+Reserve',
    highlights: ['Light pickup', 'Traditional profile', 'Pro padding', 'Collector grade']
  },
  {
    id: 'mrf-vault',
    brand: 'MRF',
    name: 'Vault Match Day Rush',
    category: 'Starter',
    price: 2499,
    rating: 4.5,
    level: 'Entry',
    weight: '2.18 kg',
    material: 'Poplar Blend',
    color: 'Sandy Gold',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-ball',
    imageAlt: 'Red cricket ball on turf',
    buyUrl: 'https://www.google.com/search?q=MRF+Vault+Match+Day+Rush+buy',
    purchaseUrl: 'https://www.google.com/search?q=MRF+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=MRF+Vault+Match+Day+Rush',
    highlights: ['Budget friendly', 'Comfort grip', 'Balanced face', 'Weekend-ready']
  },
  {
    id: 'gray-nicolls-ventus',
    brand: 'Gray-Nicolls',
    name: 'Ventus Signature Crown',
    category: 'Performance',
    price: 89999,
    rating: 5.0,
    level: 'Pro',
    weight: '2.07 kg',
    material: 'Premium English Willow',
    color: 'Smoke Bronze',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-equipment',
    imageAlt: 'Assorted cricket equipment laid out for a match',
    buyUrl: 'https://www.google.com/search?q=Gray-Nicolls+Ventus+Signature+Crown+buy',
    purchaseUrl: 'https://www.google.com/search?q=Gray-Nicolls+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=Gray-Nicolls+Ventus+Signature+Crown',
    highlights: ['Explosive pickup', 'Crisp edges', 'Tour feel', 'Luxury grade']
  },
  {
    id: 'ton-roya',
    brand: 'TON',
    name: 'Roya Limited Heritage',
    category: 'Batting',
    price: 320000,
    rating: 5.0,
    level: 'Collector',
    weight: '2.05 kg',
    material: 'Hand Selected English Willow',
    color: 'Desert Brass',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-stadium',
    imageAlt: 'Cricket stadium with lights at dusk',
    buyUrl: 'https://www.google.com/search?q=TON+Roya+Limited+Heritage+buy',
    purchaseUrl: 'https://www.google.com/search?q=TON+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=TON+Roya+Limited+Heritage',
    highlights: ['Large sweet spot', 'Fast swing', 'Leather toe guard', 'Museum-piece finish']
  },
  {
    id: 'dsc-intense',
    brand: 'DSC',
    name: 'Intense Training Edge',
    category: 'Training',
    price: 6999,
    rating: 4.5,
    level: 'Starter',
    weight: '2.18 kg',
    material: 'Hardwood Composite',
    color: 'Warm Sand',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-practice',
    imageAlt: 'Cricket practice gear on the ground',
    buyUrl: 'https://www.google.com/search?q=DSC+Intense+Training+Edge+buy',
    purchaseUrl: 'https://www.google.com/search?q=DSC+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=DSC+Intense+Training+Edge',
    highlights: ['Practice ready', 'Forgiving profile', 'All weather', 'Training focused']
  },
  {
    id: 'new-balance-chase',
    brand: 'New Balance',
    name: 'Chase Pro Gear Apex',
    category: 'Performance',
    price: 24999,
    rating: 4.8,
    level: 'Elite',
    weight: '2.06 kg',
    material: 'Grade 1 English Willow',
    color: 'Graphite Sand',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-player',
    imageAlt: 'Cricket player holding a bat during a match',
    buyUrl: 'https://www.google.com/search?q=New+Balance+Chase+Pro+Gear+Apex+buy',
    purchaseUrl: 'https://www.google.com/search?q=New+Balance+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=New+Balance+Chase+Pro+Gear+Apex',
    highlights: ['Sharp pickup', 'Modern cut', 'Pro-ready', 'Performance tuned']
  },
  {
    id: 'adidas-velocity',
    brand: 'Adidas',
    name: 'Velocity Prime Kit',
    category: 'Performance',
    price: 5799,
    rating: 4.4,
    level: 'Club',
    weight: '2.12 kg',
    material: 'Hybrid Willow',
    color: 'Graphite Silver',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-gear',
    imageAlt: 'Modern cricket gear spread on grass',
    buyUrl: 'https://www.google.com/search?q=Adidas+Velocity+Prime+Kit+buy',
    purchaseUrl: 'https://www.google.com/search?q=Adidas+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=Adidas+Velocity+Prime+Kit',
    highlights: ['Quick pickup', 'Street-sport look', 'Modern balance', 'Club friendly']
  },
  {
    id: 'puma-supreme',
    brand: 'Puma',
    name: 'Supreme Match Vault',
    category: 'Premium',
    price: 149999,
    rating: 5.0,
    level: 'Pro',
    weight: '2.04 kg',
    material: 'Reserve English Willow',
    color: 'Midnight Gold',
    image: 'https://source.unsplash.com/featured/1200x900/?cricket-bat,ball',
    imageAlt: 'Cricket bat and ball arranged for a showcase',
    buyUrl: 'https://www.google.com/search?q=Puma+Supreme+Match+Vault+buy',
    purchaseUrl: 'https://www.google.com/search?q=Puma+cricket+kit+purchase',
    productUrl: 'https://www.google.com/search?q=Puma+Supreme+Match+Vault',
    highlights: ['Reserve grade', 'Elite finish', 'Match-day power', 'Luxury packaging']
  }
];

const app = document.querySelector('#app');
const storageKey = 'crickit-theme';
const compareKey = 'crickit-compare';
const maxCompare = 3;
const brands = ['All', ...new Set(kits.map((kit) => kit.brand))];
const disclaimerText = 'Fan-made educational showcase. Brand names, logos, and product references belong to their respective owners. External links open search results or official sources for reference only.';
const loaderDelay = 900;
let activeBrand = 'All';
let activeQuery = '';
let compareIds = loadCompare();
let theme = loadTheme();
let selectedKit = null;
let portalEntered = false;
let loaderReady = false;

document.documentElement.dataset.theme = theme;

app.innerHTML = `
  <a class="skip-link" href="#catalog">Skip to kits</a>
  <div class="loading-screen" id="loadingScreen" aria-hidden="true">
    <div class="loading-ball" aria-hidden="true"></div>
    <p>Charging the pitch...</p>
  </div>
  <section class="start-screen" id="startScreen" aria-labelledby="startTitle">
    <div class="start-card">
      <p class="start-kicker">Fan portal</p>
      <h1 id="startTitle">Enter into the world of Cricket Kits</h1>
      <p>Open a world of SG, Kookaburra, SS, MRF, Gray-Nicolls, TON, DSC, New Balance, Adidas, and Puma kits.</p>
      <button class="start-button" id="enterPortal" type="button">Enter portal</button>
    </div>
  </section>
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar">
        <div class="brand-lockup">
          <div class="brand-mark">CK</div>
          <div>
            <p class="eyebrow">Live fan portal</p>
            <h1>Crickit Kit Arena</h1>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="theme-toggle" type="button" aria-label="Toggle theme" aria-pressed="${theme === 'dark'}">${theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
        </div>
      </nav>

      <section class="hero-grid">
        <div class="hero-copy">
          <p class="hero-badge">Stadium energy · Compare mode · Safe fan links</p>
          <h2>Big swings, bold kits, and a full-screen portal for cricket obsessives.</h2>
          <p class="hero-text">Click enter, browse the kit wall, compare up to three picks, and open any card for a closer look with image, details, and purchase links.</p>
          <div class="hero-metrics">
            <article><strong>10</strong><span>Kit options</span></article>
            <article><strong>₹2k</strong><span>To lakhs</span></article>
            <article><strong>3</strong><span>Compare slots</span></article>
          </div>
        </div>
        <div class="hero-panel">
          <div class="hero-panel-card">
            <span class="panel-label">Featured zone</span>
            <h3>Tap into the most electric cricket kit lineup.</h3>
            <p>Flip the theme, filter by brand, and open any kit card to see the full-screen details.</p>
            <div class="panel-pills">
              <span>Light + dark mode</span>
              <span>Open-source images</span>
              <span>Modal details</span>
            </div>
          </div>
        </div>
      </section>
    </header>

    <main class="content-grid">
      <section class="catalog-card" id="catalog" aria-labelledby="catalogTitle">
        <div class="section-head">
          <div>
            <p class="section-kicker">Browse kits</p>
            <h3 id="catalogTitle">Popular cricket brands</h3>
          </div>
          <label class="search-box" aria-label="Search cricket kits">
            <span>Search</span>
            <input type="search" id="searchInput" placeholder="Bat, gloves, elite, SG..." autocomplete="off" spellcheck="false" />
          </label>
        </div>

        <div class="brand-filter" id="brandFilter"></div>
        <p class="catalog-status" id="catalogStatus" aria-live="polite"></p>
        <div class="kit-grid" id="kitGrid"></div>
      </section>

      <aside class="compare-card" aria-labelledby="compareTitle">
        <div class="section-head compact">
          <div>
            <p class="section-kicker">Compare</p>
            <h3 id="compareTitle">Side-by-side selection</h3>
          </div>
          <button class="ghost-button" id="clearCompare" type="button">Clear</button>
        </div>
        <div class="compare-empty" id="compareEmpty" aria-live="polite"></div>
        <div class="compare-board" id="compareBoard"></div>
      </aside>
    </main>

    <footer class="site-footer">
      <p>${escapeHTML(disclaimerText)}</p>
      <p>Licensed under the MIT License.</p>
    </footer>
  </div>

  <div class="kit-modal" id="kitModal" hidden>
    <div class="kit-modal-backdrop" data-close-modal="true"></div>
    <section class="kit-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="kitModalTitle">
      <button class="modal-close" type="button" data-close-modal="true" aria-label="Close details">×</button>
      <div class="kit-modal-media">
        <img id="kitModalImage" alt="" />
      </div>
      <div class="kit-modal-body">
        <div class="kit-modal-head">
          <span class="pill" id="kitModalBrand"></span>
          <span class="rating" id="kitModalRating"></span>
        </div>
        <h3 id="kitModalTitle"></h3>
        <p id="kitModalMeta"></p>
        <p class="kit-modal-price" id="kitModalPrice"></p>
        <div class="kit-modal-grid" id="kitModalGrid"></div>
        <div class="kit-modal-links">
          <a id="kitModalBuy" class="primary-link" target="_blank" rel="noopener noreferrer">Buy now</a>
          <a id="kitModalPurchase" class="secondary-link" target="_blank" rel="noopener noreferrer">Purchase options</a>
          <a id="kitModalProduct" class="ghost-link" target="_blank" rel="noopener noreferrer">Open product reference</a>
        </div>
      </div>
    </section>
  </div>
`;

setTimeout(() => {
  loaderReady = true;
  renderLoaderAndStart();
}, loaderDelay);

const themeButton = document.querySelector('.theme-toggle');
const searchInput = document.querySelector('#searchInput');
const brandFilter = document.querySelector('#brandFilter');
const kitGrid = document.querySelector('#kitGrid');
const compareBoard = document.querySelector('#compareBoard');
const compareEmpty = document.querySelector('#compareEmpty');
const clearCompare = document.querySelector('#clearCompare');
const catalogStatus = document.querySelector('#catalogStatus');
const enterPortalButton = document.querySelector('#enterPortal');
const startScreen = document.querySelector('#startScreen');
const loadingScreen = document.querySelector('#loadingScreen');
const kitModal = document.querySelector('#kitModal');
const kitModalTitle = document.querySelector('#kitModalTitle');
const kitModalBrand = document.querySelector('#kitModalBrand');
const kitModalRating = document.querySelector('#kitModalRating');
const kitModalMeta = document.querySelector('#kitModalMeta');
const kitModalPrice = document.querySelector('#kitModalPrice');
const kitModalGrid = document.querySelector('#kitModalGrid');
const kitModalImage = document.querySelector('#kitModalImage');
const kitModalBuy = document.querySelector('#kitModalBuy');
const kitModalPurchase = document.querySelector('#kitModalPurchase');
const kitModalProduct = document.querySelector('#kitModalProduct');
const modalCloseButtons = kitModal.querySelectorAll('[data-close-modal="true"]');

loadingScreen.hidden = false;
startScreen.hidden = true;

renderBrands();
renderCatalog();
renderCompare();
updateThemeButton();
renderLoaderAndStart();

brandFilter.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-brand]');
  if (!button) return;
  activeBrand = button.dataset.brand;
  renderBrands();
  renderCatalog();
});

searchInput.addEventListener('input', (event) => {
  activeQuery = event.target.value.trim().toLowerCase();
  renderCatalog();
});

themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);
  updateThemeButton();
});

enterPortalButton.addEventListener('click', () => {
  portalEntered = true;
  renderLoaderAndStart();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

clearCompare.addEventListener('click', () => {
  compareIds = [];
  saveCompare();
  renderCatalog();
  renderCompare();
});

kitGrid.addEventListener('click', (event) => {
  if (event.target.closest('a,button')) return;

  const card = event.target.closest('[data-kit-id]');
  if (!card) return;
  openKitModal(card.dataset.kitId);
});

kitGrid.addEventListener('keydown', (event) => {
  const card = event.target.closest('[data-kit-id]');
  if (!card) return;

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openKitModal(card.dataset.kitId);
  }
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeKitModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !kitModal.hidden) {
    closeKitModal();
  }
});

function renderBrands() {
  brandFilter.innerHTML = brands
    .map((brand) => `
      <button class="chip ${brand === activeBrand ? 'active' : ''}" type="button" data-brand="${escapeHTML(brand)}" aria-pressed="${brand === activeBrand}">${escapeHTML(brand)}</button>
    `)
    .join('');
}

function renderCatalog() {
  const filtered = kits.filter((kit) => {
    const brandMatch = activeBrand === 'All' || kit.brand === activeBrand;
    const searchBlob = `${kit.brand} ${kit.name} ${kit.category} ${kit.level} ${kit.material} ${kit.color}`.toLowerCase();
    const searchMatch = !activeQuery || searchBlob.includes(activeQuery);
    return brandMatch && searchMatch;
  });

  const minPrice = filtered.length ? Math.min(...filtered.map((kit) => kit.price)) : 0;
  const maxPrice = filtered.length ? Math.max(...filtered.map((kit) => kit.price)) : 0;
  catalogStatus.textContent = filtered.length
    ? `${filtered.length} kits shown. Range: ₹${formatPrice(minPrice)} to ₹${formatPrice(maxPrice)}. Select up to ${maxCompare} for comparison.`
    : 'No kits found for that search. Try a different brand or keyword.';

  kitGrid.innerHTML = filtered
    .map((kit) => {
      const compareActive = compareIds.includes(kit.id);
      return `
        <article class="kit-card ${compareActive ? 'selected' : ''}" data-kit-id="${escapeHTML(kit.id)}" tabindex="0" role="button" aria-label="Open details for ${escapeHTML(kit.name)}">
          <div class="kit-art">
            <img src="${escapeHTML(kit.image)}" alt="${escapeHTML(kit.imageAlt)}" loading="lazy" data-kit-image="${escapeHTML(kit.id)}" />
            <span>${escapeHTML(kit.brand)}</span>
          </div>
          <div class="kit-body">
            <div class="kit-topline">
              <span class="pill">${escapeHTML(kit.category)}</span>
              <span class="rating" aria-label="Rating ${kit.rating} out of 5">★ ${escapeHTML(String(kit.rating))}</span>
            </div>
            <h4>${escapeHTML(kit.name)}</h4>
            <p class="kit-meta">${escapeHTML(kit.material)} · ${escapeHTML(kit.weight)} · ${escapeHTML(kit.level)}</p>
            <div class="kit-highlights">
              ${kit.highlights.map((point) => `<span>${escapeHTML(point)}</span>`).join('')}
            </div>
            <div class="kit-footer">
              <div>
                <span class="price">₹${kit.price.toLocaleString('en-IN')}</span>
                <small>${escapeHTML(kit.color)}</small>
              </div>
              <div class="kit-actions">
                <a class="product-link" href="${escapeHTML(kit.productUrl)}" target="_blank" rel="noopener noreferrer">View product</a>
                <button class="compare-button" type="button" data-compare="${escapeHTML(kit.id)}" data-open-kit="false" aria-pressed="${compareActive}" aria-label="${compareActive ? 'Remove' : 'Compare'} ${escapeHTML(kit.name)}">${compareActive ? 'Remove' : 'Compare'}</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  kitGrid.querySelectorAll('[data-compare]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.compare;
      toggleCompare(id);
    });
  });

  kitGrid.querySelectorAll('[data-kit-image]').forEach((image) => {
    image.addEventListener('error', () => {
      image.src = makeFallbackImage(image.closest('[data-kit-id]').dataset.kitId);
    }, { once: true });
  });
}

function renderCompare() {
  const selectedKits = compareIds.map((id) => kits.find((kit) => kit.id === id)).filter(Boolean);

  compareEmpty.innerHTML = selectedKits.length
    ? ''
    : '<p>Select up to three kits to see the differences in price, weight, level, and materials.</p>';

  compareBoard.innerHTML = selectedKits.length
    ? `
      <div class="compare-table">
        ${selectedKits
          .map(
            (kit) => `
              <article class="compare-column">
                <span class="pill">${escapeHTML(kit.brand)}</span>
                <h4>${escapeHTML(kit.name)}</h4>
                <dl>
                  <div><dt>Price</dt><dd>₹${kit.price.toLocaleString('en-IN')}</dd></div>
                  <div><dt>Weight</dt><dd>${escapeHTML(kit.weight)}</dd></div>
                  <div><dt>Level</dt><dd>${escapeHTML(kit.level)}</dd></div>
                  <div><dt>Material</dt><dd>${escapeHTML(kit.material)}</dd></div>
                  <div><dt>Category</dt><dd>${escapeHTML(kit.category)}</dd></div>
                </dl>
              </article>
            `
          )
          .join('')}
      </div>
    `
    : '';
}

function toggleCompare(id) {
  if (compareIds.includes(id)) {
    compareIds = compareIds.filter((item) => item !== id);
  } else if (compareIds.length < maxCompare) {
    compareIds = [...compareIds, id];
  } else {
    compareIds = [...compareIds.slice(1), id];
  }

  saveCompare();
  renderCatalog();
  renderCompare();
}

function loadCompare() {
  try {
    return JSON.parse(localStorage.getItem(compareKey)) ?? [];
  } catch {
    return [];
  }
}

function saveCompare() {
  localStorage.setItem(compareKey, JSON.stringify(compareIds));
}

function loadTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeButton() {
  themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}

function renderLoaderAndStart() {
  loadingScreen.hidden = loaderReady;
  startScreen.hidden = !loaderReady || portalEntered;
  if (loaderReady) {
    loadingScreen.hidden = true;
  }
}

function openKitModal(kitId) {
  selectedKit = kits.find((kit) => kit.id === kitId);
  if (!selectedKit) return;

  kitModal.hidden = false;
  kitModal.setAttribute('aria-hidden', 'false');
  kitModalTitle.textContent = selectedKit.name;
  kitModalBrand.textContent = selectedKit.brand;
  kitModalRating.textContent = `★ ${selectedKit.rating}`;
  kitModalMeta.textContent = `${selectedKit.category} · ${selectedKit.level} · ${selectedKit.material} · ${selectedKit.weight}`;
  kitModalPrice.textContent = `₹${selectedKit.price.toLocaleString('en-IN')}`;
  kitModalImage.src = selectedKit.image;
  kitModalImage.alt = selectedKit.imageAlt;
  kitModalBuy.href = selectedKit.buyUrl;
  kitModalPurchase.href = selectedKit.purchaseUrl;
  kitModalProduct.href = selectedKit.productUrl;
  kitModalGrid.innerHTML = selectedKit.highlights
    .map((point) => `<div class="detail-chip">${escapeHTML(point)}</div>`)
    .join('');
  kitModal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeKitModal() {
  selectedKit = null;
  kitModal.classList.remove('is-open');
  kitModal.hidden = true;
  kitModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function formatPrice(value) {
  return value.toLocaleString('en-IN');
}

function makeFallbackImage(kitId) {
  const kit = kits.find((entry) => entry.id === kitId);
  const label = encodeURIComponent(`${kit?.brand ?? 'Cricket'} ${kit?.name ?? 'Kit'}`);
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2a2015"/>
          <stop offset="100%" stop-color="#c79b43"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#g)"/>
      <circle cx="600" cy="450" r="170" fill="rgba(255,255,255,0.10)"/>
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#fff7e6" font-family="Arial, sans-serif" font-size="58" font-weight="700">${label}</text>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#fff7e6" font-family="Arial, sans-serif" font-size="26">Cricket kit preview</text>
    </svg>
  `)}`;
}


function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
