import './styles.css';

console.log('Crickit app initializing...');

const kits = [
  { id: 'sg-aeroknox', brand: 'SG', name: 'Aeroknox Pro Strike', price: 3499, rating: 4.7, level: 'Starter', material: 'Kashmir Willow', weight: '2.09 kg', image: 'https://images.unsplash.com/photo-1461614841746-0f70c4cea6c4?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Balanced pickup', 'Wide sweet spot', 'Tour grip', 'Player-friendly'] },
  { id: 'kookaburra-kahuna', brand: 'Kookaburra', name: 'Kahuna Elite Flux', price: 17499, rating: 4.8, level: 'Elite', material: 'English Willow', weight: '2.09 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['High spine', 'Impact foam', 'Premium finish', 'Tour-ready'] },
  { id: 'ss-tonner', brand: 'SS', name: 'Tonner Signature Reserve', price: 129999, rating: 5.0, level: 'Pro', material: 'Grade 1 English Willow', weight: '2.06 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Light pickup', 'Traditional profile', 'Pro padding', 'Collector grade'] },
  { id: 'mrf-vault', brand: 'MRF', name: 'Vault Match Day Rush', price: 2499, rating: 4.5, level: 'Entry', material: 'Poplar Blend', weight: '2.18 kg', image: 'https://images.unsplash.com/photo-1461614841746-0f70c4cea6c4?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Budget friendly', 'Comfort grip', 'Balanced face', 'Weekend-ready'] },
  { id: 'gray-nicolls-ventus', brand: 'Gray-Nicolls', name: 'Ventus Signature Crown', price: 89999, rating: 5.0, level: 'Pro', material: 'Premium English Willow', weight: '2.07 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Explosive pickup', 'Crisp edges', 'Tour feel', 'Luxury grade'] },
  { id: 'ton-roya', brand: 'TON', name: 'Roya Limited Heritage', price: 320000, rating: 5.0, level: 'Collector', material: 'Hand Selected English Willow', weight: '2.05 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Large sweet spot', 'Fast swing', 'Leather toe guard', 'Museum-piece'] },
  { id: 'dsc-intense', brand: 'DSC', name: 'Intense Training Edge', price: 6999, rating: 4.5, level: 'Starter', material: 'Hardwood Composite', weight: '2.18 kg', image: 'https://images.unsplash.com/photo-1461614841746-0f70c4cea6c4?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Practice ready', 'Forgiving profile', 'All weather', 'Training focused'] },
  { id: 'new-balance-chase', brand: 'New Balance', name: 'Chase Pro Gear Apex', price: 24999, rating: 4.8, level: 'Elite', material: 'Grade 1 English Willow', weight: '2.06 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Sharp pickup', 'Modern cut', 'Pro-ready', 'Performance tuned'] },
  { id: 'adidas-velocity', brand: 'Adidas', name: 'Velocity Prime Kit', price: 5799, rating: 4.4, level: 'Club', material: 'Hybrid Willow', weight: '2.12 kg', image: 'https://images.unsplash.com/photo-1461614841746-0f70c4cea6c4?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Quick pickup', 'Street-sport look', 'Modern balance', 'Club friendly'] },
  { id: 'puma-supreme', brand: 'Puma', name: 'Supreme Match Vault', price: 149999, rating: 5.0, level: 'Pro', material: 'Reserve English Willow', weight: '2.04 kg', image: 'https://images.unsplash.com/photo-1535232066290-c102fde9b035?w=600&h=400&fit=crop', buyUrl: 'https://google.com', highlights: ['Reserve grade', 'Elite finish', 'Match-day power', 'Luxury packaging'] }
];

let appContainer = null;
let state = {
  theme: localStorage.getItem('theme') || 'light',
  brand: 'All',
  search: '',
  compare: JSON.parse(localStorage.getItem('compare') || '[]')
};

function init() {
  appContainer = document.getElementById('app');
  if (!appContainer) return console.error('App container not found');

  document.documentElement.setAttribute('data-theme', state.theme);
  render();
  attachListeners();
  console.log('Crickit app loaded successfully');
}

function render() {
  const brands = ['All', ...new Set(kits.map(k => k.brand))];
  const filtered = filterKits();

  appContainer.innerHTML = `
    <div class="container">
      <header class="header">
        <div class="header-content">
          <h1>⚽ Crickit Kit Arena</h1>
          <p>Explore Premium Cricket Equipment</p>
        </div>
        <button id="themeBtn" class="theme-btn">${state.theme === 'dark' ? '☀️' : '🌙'}</button>
      </header>

      <div class="filters">
        <input type="text" id="search" placeholder="Search kits..." value="${state.search}" />
        <div class="brands">
          ${brands.map(b => `
            <button class="brand-btn ${b === state.brand ? 'active' : ''}" data-brand="${b}">
              ${b}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="grid">
        ${filtered.map(kit => `
          <div class="kit-card" data-id="${kit.id}">
            <img src="${kit.image}" alt="${kit.name}" loading="lazy" />
            <h3>${kit.name}</h3>
            <p class="brand">${kit.brand}</p>
            <p class="price">₹${kit.price.toLocaleString('en-IN')}</p>
            <p class="meta">${kit.material} • ${kit.weight}</p>
            <div class="card-actions">
              <button class="compare-btn" data-id="${kit.id}" data-action="compare">
                ${state.compare.includes(kit.id) ? '✓ Comparing' : 'Compare'}
              </button>
              <button class="details-btn" data-id="${kit.id}" data-action="details">Details</button>
            </div>
          </div>
        `).join('')}
      </div>

      ${state.compare.length > 0 ? `
        <div class="compare-section">
          <h2>Comparison (${state.compare.length})</h2>
          <div class="compare-grid">
            ${state.compare.map(id => {
              const kit = kits.find(k => k.id === id);
              return `
                <div class="compare-card">
                  <h4>${kit.name}</h4>
                  <p><strong>₹${kit.price.toLocaleString('en-IN')}</strong></p>
                  <p>${kit.brand} • ${kit.level}</p>
                  <p>${kit.material}</p>
                  <button class="remove-btn" data-id="${kit.id}" data-action="remove">Remove</button>
                </div>
              `;
            }).join('')}
            <button id="clearCompare" class="clear-btn">Clear All</button>
          </div>
        </div>
      ` : ''}

      <footer class="footer">
        <p>Fan-made cricket kit showcase. Educational use only.</p>
      </footer>
    </div>

    <div id="modal" class="modal" hidden>
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close" id="closeModal">&times;</button>
        <img id="modalImg" src="" alt="" />
        <div class="modal-info">
          <h2 id="modalTitle"></h2>
          <p id="modalMeta"></p>
          <p id="modalPrice"></p>
          <div id="modalHighlights"></div>
          <a id="modalBuy" href="" target="_blank" rel="noopener noreferrer" class="btn-primary">View on Google</a>
        </div>
      </div>
    </div>
  `;
}

function filterKits() {
  return kits.filter(kit => {
    const brandMatch = state.brand === 'All' || kit.brand === state.brand;
    const searchMatch = !state.search ||
      kit.name.toLowerCase().includes(state.search) ||
      kit.brand.toLowerCase().includes(state.search);
    return brandMatch && searchMatch;
  });
}

function attachListeners() {
  // Theme toggle
  document.getElementById('themeBtn')?.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
    render();
    attachListeners();
  });

  // Search
  document.getElementById('search')?.addEventListener('input', (e) => {
    state.search = e.target.value.toLowerCase();
    render();
    attachListeners();
  });

  // Brand filter
  document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.brand = e.target.dataset.brand;
      render();
      attachListeners();
    });
  });

  // Compare and details buttons
  document.querySelectorAll('.compare-btn, .details-btn, .remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const kitId = btn.dataset.id;
      const action = btn.dataset.action;

      if (action === 'compare') {
        if (state.compare.includes(kitId)) {
          state.compare = state.compare.filter(id => id !== kitId);
        } else {
          state.compare.push(kitId);
        }
        localStorage.setItem('compare', JSON.stringify(state.compare));
        render();
        attachListeners();
      } else if (action === 'details') {
        const kit = kits.find(k => k.id === kitId);
        showModal(kit);
      } else if (action === 'remove') {
        state.compare = state.compare.filter(id => id !== kitId);
        localStorage.setItem('compare', JSON.stringify(state.compare));
        render();
        attachListeners();
      }
    });
  });

  // Modal
  document.getElementById('closeModal')?.addEventListener('click', () => {
    document.getElementById('modal').hidden = true;
  });
  document.querySelector('.modal-overlay')?.addEventListener('click', () => {
    document.getElementById('modal').hidden = true;
  });

  // Clear compare
  document.getElementById('clearCompare')?.addEventListener('click', () => {
    state.compare = [];
    localStorage.setItem('compare', JSON.stringify(state.compare));
    render();
    attachListeners();
  });
}

function showModal(kit) {
  const modal = document.getElementById('modal');
  document.getElementById('modalImg').src = kit.image;
  document.getElementById('modalTitle').textContent = kit.name;
  document.getElementById('modalMeta').textContent = `${kit.brand} • ${kit.level} • ${kit.material}`;
  document.getElementById('modalPrice').textContent = `₹${kit.price.toLocaleString('en-IN')}`;
  document.getElementById('modalHighlights').innerHTML = kit.highlights.map(h => `<span class="highlight">${h}</span>`).join('');
  document.getElementById('modalBuy').href = kit.buyUrl;
  modal.hidden = false;
}

// Init when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
