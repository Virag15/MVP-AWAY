/**
 * AWAY - Shop Page JavaScript
 * Handles product rendering, filtering, sorting, and filter toggle interactions
 */

// ========================================
// PRODUCT DATA
// ========================================

const products = [
  {
    id: 1,
    name: 'Roofbox 540L Glossy',
    subtitle: 'Premium hard-shell carrier',
    price: 24999,
    originalPrice: 29999,
    badge: 'SAVE ₹5,000',
    badgeType: 'sale',
    image: '../assets/product-roofbox-1.png',
    category: 'roofbox',
    color: 'Black',
    size: 'large',
    inStock: true,
    colors: ['#1a1a1a', '#6b6b6b'],
  },
  {
    id: 2,
    name: 'Roofbox 540L Textured',
    subtitle: 'Durable textured finish',
    price: 26999,
    originalPrice: null,
    badge: 'STAFF PICK',
    badgeType: 'pick',
    image: '../assets/product-roofbox-2.png',
    category: 'roofbox',
    color: 'Matte Gray',
    size: 'large',
    inStock: true,
    colors: ['#6b6b6b', '#1a1a1a'],
  },
  {
    id: 3,
    name: 'Roofbox 450L Glossy',
    subtitle: 'Mid-size versatile carrier',
    price: 19999,
    originalPrice: 23999,
    badge: 'SAVE ₹4,000',
    badgeType: 'sale',
    image: '../assets/product-roofbox-1.png',
    category: 'roofbox',
    color: 'Black',
    size: 'medium',
    inStock: true,
    colors: ['#1a1a1a', '#c0c0c0'],
  },
  {
    id: 4,
    name: 'Roofbox 450L Textured',
    subtitle: 'Textured mid-size box',
    price: 21999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofbox-2.png',
    category: 'roofbox',
    color: 'Matte Gray',
    size: 'medium',
    inStock: true,
    colors: ['#6b6b6b'],
  },
  {
    id: 5,
    name: 'Roofbag Explorer XL',
    subtitle: 'Waterproof 600D fabric',
    price: 7999,
    originalPrice: 9999,
    badge: 'SAVE 20%',
    badgeType: 'sale',
    image: '../assets/product-roofbag-1.png',
    category: 'roofbag',
    color: 'Black',
    size: 'xl',
    inStock: true,
    colors: ['#1a1a1a', '#36454f'],
  },
  {
    id: 6,
    name: 'Roofbag Adventure Pro',
    subtitle: 'Heavy-duty adventure bag',
    price: 8999,
    originalPrice: null,
    badge: 'STAFF PICK',
    badgeType: 'pick',
    image: '../assets/product-roofbag-2.png',
    category: 'roofbag',
    color: 'Charcoal',
    size: 'large',
    inStock: true,
    colors: ['#36454f', '#1a1a1a'],
  },
  {
    id: 7,
    name: 'Roofbag Compact',
    subtitle: 'Perfect for small trips',
    price: 4999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofbag-1.png',
    category: 'roofbag',
    color: 'Black',
    size: 'compact',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 8,
    name: 'Roofbag Sport',
    subtitle: 'Sleek aerodynamic design',
    price: 6499,
    originalPrice: 7999,
    badge: 'SAVE ₹1,500',
    badgeType: 'sale',
    image: '../assets/product-roofbag-2.png',
    category: 'roofbag',
    color: 'Charcoal',
    size: 'medium',
    inStock: false,
    colors: ['#36454f'],
  },
  {
    id: 9,
    name: 'Aero Crossbars Black',
    subtitle: 'Low-drag aluminium profile',
    price: 6999,
    originalPrice: null,
    badge: 'STAFF PICK',
    badgeType: 'pick',
    image: '../assets/product-crossbar-1.png',
    category: 'crossbar',
    color: 'Black',
    size: 'medium',
    inStock: true,
    colors: ['#1a1a1a', '#c0c0c0'],
  },
  {
    id: 10,
    name: 'Aero Crossbars Silver',
    subtitle: 'Low-drag aluminium profile',
    price: 6999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-crossbar-1.png',
    category: 'crossbar',
    color: 'Silver',
    size: 'medium',
    inStock: true,
    colors: ['#c0c0c0', '#1a1a1a'],
  },
  {
    id: 11,
    name: 'Heavy Duty Crossbars',
    subtitle: 'Reinforced for heavy loads',
    price: 8499,
    originalPrice: 9999,
    badge: 'SAVE 15%',
    badgeType: 'sale',
    image: '../assets/product-crossbar-1.png',
    category: 'crossbar',
    color: 'Black',
    size: 'large',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 12,
    name: 'Universal Fit Crossbars',
    subtitle: 'Fits most car models',
    price: 5499,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-crossbar-1.png',
    category: 'crossbar',
    color: 'Silver',
    size: 'medium',
    inStock: true,
    colors: ['#c0c0c0'],
  },
  {
    id: 13,
    name: 'Platform Rack Standard',
    subtitle: 'Modular aluminium platform',
    price: 14999,
    originalPrice: null,
    badge: 'STAFF PICK',
    badgeType: 'pick',
    image: '../assets/product-roofrack-1.png',
    category: 'roofrack',
    color: 'Silver',
    size: 'medium',
    inStock: true,
    colors: ['#c0c0c0', '#1a1a1a'],
  },
  {
    id: 14,
    name: 'Platform Rack Large',
    subtitle: 'Extra-wide cargo platform',
    price: 18999,
    originalPrice: 22999,
    badge: 'SAVE ₹4,000',
    badgeType: 'sale',
    image: '../assets/product-roofrack-1.png',
    category: 'roofrack',
    color: 'Silver',
    size: 'large',
    inStock: true,
    colors: ['#c0c0c0'],
  },
  {
    id: 15,
    name: 'Basket Rack Pro',
    subtitle: 'Open basket for versatile use',
    price: 12999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofrack-1.png',
    category: 'roofrack',
    color: 'Black',
    size: 'large',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 16,
    name: 'Low Profile Rack',
    subtitle: 'Streamlined roof rack',
    price: 11499,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofrack-1.png',
    category: 'roofrack',
    color: 'Black',
    size: 'medium',
    inStock: false,
    colors: ['#1a1a1a', '#c0c0c0'],
  },
  {
    id: 17,
    name: 'Roofbox 380L Compact',
    subtitle: 'Space-saving city carrier',
    price: 16999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofbox-1.png',
    category: 'roofbox',
    color: 'Black',
    size: 'compact',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 18,
    name: 'Anti-Theft Lock Set',
    subtitle: 'Universal security locks',
    price: 1499,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-crossbar-1.png',
    category: 'crossbar',
    color: 'Black',
    size: 'compact',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 19,
    name: 'Protective Mat Liner',
    subtitle: 'Non-slip cargo mat',
    price: 999,
    originalPrice: 1499,
    badge: 'SAVE 33%',
    badgeType: 'sale',
    image: '../assets/product-roofbag-1.png',
    category: 'roofbox',
    color: 'Black',
    size: 'medium',
    inStock: true,
    colors: ['#1a1a1a'],
  },
  {
    id: 20,
    name: 'Ratchet Strap Set (4pc)',
    subtitle: 'Heavy-duty cargo straps',
    price: 1999,
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: '../assets/product-roofbag-2.png',
    category: 'roofbag',
    color: 'Black',
    size: 'compact',
    inStock: true,
    colors: ['#1a1a1a', '#36454f'],
  },
];

// ========================================
// FORMAT PRICE
// ========================================

const formatPrice = (price) => {
  return '₹' + price.toLocaleString('en-IN');
};

// ========================================
// CREATE PRODUCT CARD HTML
// ========================================

const createProductCard = (product) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const colorsHtml = product.colors
    .map(
      (c) =>
        `<span class="shop-card-swatch" style="background-color: ${c};${c === '#f5f5f5' || c === '#c0c0c0' ? ' border: 1px solid #ddd;' : ''}"></span>`
    )
    .join('');

  const badgeClass = product.badgeType === 'pick' ? 'badge-pick' : 'badge-sale';

  return `
    <div class="shop-product-card" data-id="${product.id}" data-category="${product.category}" data-color="${product.color}" data-size="${product.size}" data-stock="${product.inStock}">
      <a href="../product" class="shop-product-link">
        <div class="shop-product-img-wrapper">
          ${product.badge ? `<span class="shop-product-badge ${badgeClass}">${product.badge}</span>` : ''}
          <img src="${product.image}" alt="${product.name}" class="shop-product-img" loading="lazy" />
        </div>
        <div class="shop-product-info">
          <h3 class="shop-product-name">${product.name}</h3>
          <p class="shop-product-subtitle">${product.subtitle}</p>
          <div class="shop-product-pricing">
            <span class="shop-product-price${hasDiscount ? ' has-discount' : ''}">${formatPrice(product.price)}</span>
            ${hasDiscount ? `<span class="shop-product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          ${product.colors.length > 1 ? `<div class="shop-product-colors">${colorsHtml}<span class="shop-color-count">${product.colors.length} colors</span></div>` : ''}
        </div>
      </a>
    </div>
  `;
};

// ========================================
// RENDER PRODUCTS
// ========================================

let filteredProducts = [...products];

const renderProducts = () => {
  const grid = document.getElementById('shop-product-grid');
  const countEl = document.getElementById('product-count');
  if (!grid) return;

  grid.innerHTML = filteredProducts.map(createProductCard).join('');
  if (countEl) {
    countEl.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
  }
};

// ========================================
// FILTER LOGIC
// ========================================

const getActiveFilters = () => {
  const filters = {
    availability: [],
    color: [],
    size: [],
    finish: [],
    type: [],
    priceMin: null,
    priceMax: null,
  };

  // Availability
  document.querySelectorAll('input[name="availability"]:checked').forEach((cb) => {
    filters.availability.push(cb.value);
  });

  // Color swatches
  document.querySelectorAll('.filter-swatch.is-selected').forEach((btn) => {
    filters.color.push(btn.dataset.color);
  });

  // Size
  document.querySelectorAll('input[name="size"]:checked').forEach((cb) => {
    filters.size.push(cb.value);
  });

  // Finish
  document.querySelectorAll('input[name="finish"]:checked').forEach((cb) => {
    filters.finish.push(cb.value);
  });

  // Type
  document.querySelectorAll('input[name="type"]:checked').forEach((cb) => {
    filters.type.push(cb.value);
  });

  // Price
  const minInput = document.getElementById('price-min');
  const maxInput = document.getElementById('price-max');
  if (minInput && minInput.value) filters.priceMin = parseInt(minInput.value);
  if (maxInput && maxInput.value) filters.priceMax = parseInt(maxInput.value);

  return filters;
};

const applyFilters = () => {
  const filters = getActiveFilters();

  filteredProducts = products.filter((product) => {
    // Availability
    if (filters.availability.length > 0) {
      const matchesAvailability = filters.availability.some((a) => {
        if (a === 'in-stock') return product.inStock;
        if (a === 'out-of-stock') return !product.inStock;
        return true;
      });
      if (!matchesAvailability) return false;
    }

    // Color
    if (filters.color.length > 0) {
      if (!filters.color.includes(product.color)) return false;
    }

    // Size
    if (filters.size.length > 0) {
      if (!filters.size.includes(product.size)) return false;
    }

    // Type
    if (filters.type.length > 0) {
      if (!filters.type.includes(product.category)) return false;
    }

    // Finish
    if (filters.finish.length > 0) {
      const isGlossy = product.name.toLowerCase().includes('glossy') || product.subtitle.toLowerCase().includes('glossy');
      const isTextured = product.name.toLowerCase().includes('textured') || product.subtitle.toLowerCase().includes('textured');

      const pFinish = isGlossy ? 'glossy' : isTextured ? 'textured' : null;
      if (!filters.finish.includes(pFinish)) return false;
    }

    // Price
    if (filters.priceMin !== null && product.price < filters.priceMin) return false;
    if (filters.priceMax !== null && product.price > filters.priceMax) return false;

    return true;
  });

  applySorting();
  renderProducts();
  renderActiveFilterBadges(filters);
};

// ========================================
// ACTIVE FILTER BADGES
// ========================================

const renderActiveFilterBadges = (filters) => {
  const container = document.getElementById('active-filters');
  if (!container) return;

  container.innerHTML = '';

  // Create a badge helper
  const createBadge = (label, type, value) => {
    const badge = document.createElement('div');
    badge.className = 'active-filter-badge';
    badge.innerHTML = `
      <span>${label}</span>
      <button class="remove-filter-btn" data-type="${type}" data-value="${value}">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    return badge;
  };

  // 1. Checkbox filters (Availability, Size, Finish, Type)
  const checkboxFilters = ['availability', 'size', 'finish', 'type'];
  checkboxFilters.forEach((filterType) => {
    if (filters[filterType] && filters[filterType].length > 0) {
      filters[filterType].forEach((val) => {
        const checkbox = document.querySelector(`input[name="${filterType}"][value="${val}"]`);
        if (checkbox) {
          const labelElement = checkbox.closest('.filter-checkbox').querySelector('.filter-label-text');
          const label = labelElement ? labelElement.textContent : val;
          container.appendChild(createBadge(label, filterType, val));
        }
      });
    }
  });

  // 2. Color filter
  if (filters.color && filters.color.length > 0) {
    filters.color.forEach((col) => {
      container.appendChild(createBadge(col, 'color', col));
    });
  }

  // 3. Price filter
  if (filters.priceMin !== null || filters.priceMax !== null) {
    let priceLabel = '';
    if (filters.priceMin !== null && filters.priceMax !== null) {
      priceLabel = `₹${filters.priceMin} - ₹${filters.priceMax}`;
    } else if (filters.priceMin !== null) {
      priceLabel = `₹${filters.priceMin} +`;
    } else if (filters.priceMax !== null) {
      priceLabel = `Up to ₹${filters.priceMax}`;
    }

    container.appendChild(createBadge(priceLabel, 'price', 'range'));
  }

  // Add click handlers for removal
  container.querySelectorAll('.remove-filter-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const type = btn.dataset.type;
      const value = btn.dataset.value;

      if (['availability', 'size', 'finish', 'type'].includes(type)) {
        const cb = document.querySelector(`input[name="${type}"][value="${value}"]`);
        if (cb) cb.checked = false;

        // If it's a category type, also remove active state from category cards
        if (type === 'type') {
          document.querySelectorAll(`.shop-category-card[data-category="${value}"]`).forEach(card => card.classList.remove('is-active'));
        }
      } else if (type === 'color') {
        const swatch = document.querySelector(`.filter-swatch[data-color="${value}"]`);
        if (swatch) swatch.classList.remove('is-selected');
      } else if (type === 'price') {
        const minInput = document.getElementById('price-min');
        const maxInput = document.getElementById('price-max');
        if (minInput) minInput.value = '';
        if (maxInput) maxInput.value = '';
      }

      applyFilters();
    });
  });
};



// ========================================
// SORT LOGIC
// ========================================

const applySorting = () => {
  const sortSelect = document.getElementById('shop-sort');
  if (!sortSelect) return;

  const sortValue = sortSelect.value;

  switch (sortValue) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    default:
      // featured order — keep original
      break;
  }
};

// ========================================
// INIT SHOP INTERACTIONS
// ========================================

const initShop = () => {
  // Render initial products
  renderProducts();

  // Category card click → trigger product type filter
  document.querySelectorAll('.shop-category-card[data-category]').forEach((card) => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      const checkbox = document.querySelector(`input[name="type"][value="${category}"]`);
      if (!checkbox) return;

      // Check if this category is already the only active one
      const isAlreadyActive = card.classList.contains('is-active');

      if (isAlreadyActive) {
        // Deselect: uncheck and remove active state
        checkbox.checked = false;
        card.classList.remove('is-active');
      } else {
        // Uncheck all type checkboxes first
        document.querySelectorAll('input[name="type"]').forEach((cb) => (cb.checked = false));
        // Remove active from all category cards
        document.querySelectorAll('.shop-category-card').forEach((c) => c.classList.remove('is-active'));

        // Check this one and mark active
        checkbox.checked = true;
        card.classList.add('is-active');
      }

      // Apply the filter
      applyFilters();

      // Scroll to product grid
      const grid = document.getElementById('shop-product-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Filter group toggle (collapse/expand) with Lucide icon swap
  document.querySelectorAll('.filter-heading').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterGroup = btn.closest('.filter-group');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      filterGroup.classList.toggle('is-collapsed', isExpanded);

      // Swap the icon: find the current SVG rendered by Lucide or the <i> element
      const oldIcon = btn.querySelector('svg') || btn.querySelector('i');
      if (oldIcon) {
        const newIconName = isExpanded ? 'plus' : 'minus';
        // Create a fresh <i> element for Lucide to process
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', newIconName);
        newIcon.className = 'filter-toggle-icon';
        oldIcon.replaceWith(newIcon);
        // Re-render
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  });

  // Checkbox filters
  document.querySelectorAll('.filter-checkbox input').forEach((cb) => {
    cb.addEventListener('change', applyFilters);
  });

  // Color swatch filters
  document.querySelectorAll('.filter-swatch').forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatch.classList.toggle('is-selected');
      applyFilters();
    });
  });

  // Price range filter (debounced)
  const priceInputs = document.querySelectorAll('.price-input');
  let priceTimeout;
  priceInputs.forEach((input) => {
    input.addEventListener('input', () => {
      clearTimeout(priceTimeout);
      priceTimeout = setTimeout(applyFilters, 500);
    });
  });

  // Custom Sort Dropdown
  const sortDropdown = document.getElementById('sort-dropdown');
  const sortTrigger = document.getElementById('sort-trigger');
  const sortMenu = document.getElementById('sort-menu');
  const sortValueDisplay = document.getElementById('sort-value');
  const sortHiddenInput = document.getElementById('shop-sort');

  if (sortTrigger && sortMenu) {
    // Toggle dropdown
    sortTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = sortDropdown.classList.toggle('is-open');
      sortTrigger.setAttribute('aria-expanded', isOpen);
    });

    // Select item
    sortMenu.querySelectorAll('.custom-dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        const value = item.dataset.value;
        const label = item.textContent;

        // Update display
        sortValueDisplay.textContent = label;

        // Update hidden input
        sortHiddenInput.value = value;

        // Update active state
        sortMenu.querySelectorAll('.custom-dropdown-item').forEach((i) => i.classList.remove('is-active'));
        item.classList.add('is-active');

        // Close dropdown
        sortDropdown.classList.remove('is-open');
        sortTrigger.setAttribute('aria-expanded', 'false');

        // Apply sorting
        applySorting();
        renderProducts();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!sortDropdown.contains(e.target)) {
        sortDropdown.classList.remove('is-open');
        sortTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sortDropdown.classList.contains('is-open')) {
        sortDropdown.classList.remove('is-open');
        sortTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initialize mobile filter drawer
  initMobileFilterDrawer();

  // Initialize Lucide icons (after DOM is ready)
  initLucideIcons();
};

// ========================================
// MOBILE FILTER DRAWER
// ========================================

const initMobileFilterDrawer = () => {
  const filterToggle = document.getElementById('mobileFilterToggle');
  const filterSidebar = document.getElementById('shop-filters');
  const filterClose = document.getElementById('mobileFilterClose');
  const filterBackdrop = document.getElementById('mobileFilterBackdrop');

  if (!filterToggle || !filterSidebar) return;

  const openFilters = () => {
    filterSidebar.classList.add('is-open');
    if (filterBackdrop) filterBackdrop.classList.add('is-active');
    document.body.classList.add('filter-drawer-open');
  };

  const closeFilters = () => {
    filterSidebar.classList.remove('is-open');
    if (filterBackdrop) filterBackdrop.classList.remove('is-active');
    document.body.classList.remove('filter-drawer-open');
  };

  filterToggle.addEventListener('click', openFilters);

  if (filterClose) {
    filterClose.addEventListener('click', closeFilters);
  }

  if (filterBackdrop) {
    filterBackdrop.addEventListener('click', closeFilters);
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && filterSidebar.classList.contains('is-open')) {
      closeFilters();
    }
  });

  // Auto-close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && filterSidebar.classList.contains('is-open')) {
      closeFilters();
    }
  });
};

// Initialize Lucide icons with retry for CDN loading
const initLucideIcons = () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    // Retry in case CDN hasn't loaded yet
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 500);
  }
};

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShop);
} else {
  initShop();
}
