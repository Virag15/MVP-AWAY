/**
 * ROOFBAG - Main JavaScript
 * Handles interactive features and user interactions
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// ========================================
// HEADER STATE MANAGEMENT
// ========================================

const initHeader = () => {
  const header = document.getElementById('siteHeader');
  const heroSection = document.getElementById('heroSection');
  if (!header) return;

  if (!heroSection) {
    // For pages without a hero section, the header should be sticky by default
    header.classList.add('header--sticky');
    return;
  }

  const updateHeaderState = () => {
    // If the window is scrolled down slightly, switch to sticky white
    if (window.scrollY < 50) {
      header.classList.add('header--transparent');
      header.classList.remove('header--sticky');
    } else {
      // Past the slight scroll threshold
      header.classList.remove('header--transparent');
      header.classList.add('header--sticky');
    }
  };

  // Set initial state
  updateHeaderState();

  // Update on scroll
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  // Also update on resize
  window.addEventListener('resize', debounce(updateHeaderState, 100));
};

// ========================================
// MEGA MENU
// ========================================

const initMegaMenu = () => {
  const header = document.getElementById('siteHeader');
  const backdrop = document.getElementById('megaBackdrop');
  const navItems = document.querySelectorAll('.nav-item[data-dropdown]');
  if (!header || !navItems.length) return;

  let closeTimeout = null;

  const openMenu = (navItem) => {
    clearTimeout(closeTimeout);

    // Close all other menus
    navItems.forEach(item => {
      if (item !== navItem) item.classList.remove('is-active');
    });

    navItem.classList.add('is-active');
    header.classList.add('header--menu-open');
    backdrop.classList.add('is-visible');
  };

  const closeAllMenus = () => {
    closeTimeout = setTimeout(() => {
      navItems.forEach(item => item.classList.remove('is-active'));
      header.classList.remove('header--menu-open');
      backdrop.classList.remove('is-visible');
    }, 100);
  };

  navItems.forEach(navItem => {
    const megaMenu = navItem.querySelector('.mega-menu');

    navItem.addEventListener('mouseenter', () => openMenu(navItem));
    navItem.addEventListener('mouseleave', () => closeAllMenus());

    if (megaMenu) {
      megaMenu.addEventListener('mouseenter', () => {
        clearTimeout(closeTimeout);
      });
      megaMenu.addEventListener('mouseleave', () => closeAllMenus());
    }

    // Keyboard accessibility
    const link = navItem.querySelector('.nav-link');
    if (link) {
      link.addEventListener('focus', () => openMenu(navItem));
    }
  });

  // Close on backdrop click
  backdrop.addEventListener('click', () => {
    clearTimeout(closeTimeout);
    navItems.forEach(item => item.classList.remove('is-active'));
    header.classList.remove('header--menu-open');
    backdrop.classList.remove('is-visible');
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearTimeout(closeTimeout);
      navItems.forEach(item => item.classList.remove('is-active'));
      header.classList.remove('header--menu-open');
      backdrop.classList.remove('is-visible');
    }
  });
};

// ========================================
// SMOOTH SCROLL FUNCTIONALITY
// ========================================

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// ========================================
// PRODUCT CAROUSEL
// ========================================

const initProductCarousel = () => {
  const carousel = document.getElementById('productCarousel');
  if (!carousel) return;

  const cards = carousel.querySelectorAll('.product-card');
  let currentIndex = 0;

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      currentIndex = Math.max(0, currentIndex - 1);
      scrollToCard(currentIndex);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      currentIndex = Math.min(cards.length - 1, currentIndex + 1);
      scrollToCard(currentIndex);
    }
  });

  function scrollToCard(index) {
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  carousel.addEventListener('scroll', debounce(() => {
    const scrollLeft = carousel.scrollLeft;
    const cardWidth = cards[0]?.offsetWidth || 0;
    currentIndex = Math.round(scrollLeft / cardWidth);
  }, 100));
};

// ========================================
// VIDEO PLAYER
// ========================================

const initVideoPlayer = () => {
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(button => {
    button.addEventListener('click', function () {
      console.log('Play button clicked - Video player would open here');
      alert('Video player functionality would be implemented here.\\nIn production, this would open a video modal or redirect to video content.');
    });
  });
};

// ========================================
// FAQ ACCORDION
// ========================================

const initFaqAccordion = () => {
  const faqAccordions = document.querySelectorAll('.faq-section .accordion');
  if (!faqAccordions.length) return;

  faqAccordions.forEach((acc) => {
    const header = acc.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      const isOpen = acc.classList.contains('is-open');

      if (!isOpen) {
        acc.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
      } else {
        acc.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
      }
    });
  });
};

// ========================================
// EMAIL FORM VALIDATION
// ========================================

const isValidEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

const initEmailForm = () => {
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailInput');

  if (!emailForm || !emailInput) return;

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showFormMessage('Please enter an email address', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address', 'error');
      return;
    }

    submitEmail(email);
  });
};

const submitEmail = async (email) => {
  const emailInput = document.getElementById('emailInput');
  const submitButton = document.querySelector('.email-submit');

  emailInput.disabled = true;
  submitButton.disabled = true;

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    showFormMessage('Thanks for subscribing!', 'success');
    emailInput.value = '';
  } catch (error) {
    console.error('Error submitting email:', error);
    showFormMessage('Something went wrong. Please try again.', 'error');
  } finally {
    emailInput.disabled = false;
    submitButton.disabled = false;
  }
};

const showFormMessage = (message, type = 'info') => {
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message--${type}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    background-color: ${type === 'success' ? '#d4edda' : '#f8d7da'};
    color: ${type === 'success' ? '#155724' : '#721c24'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

  const emailSection = document.querySelector('.email-section');
  if (emailSection) {
    emailSection.appendChild(messageDiv);
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
};

// ========================================
// COLOR SWATCHES
// ========================================

const initColorSwatches = () => {
  const swatches = document.querySelectorAll('.swatch');

  swatches.forEach(swatch => {
    swatch.setAttribute('tabindex', '0');
    swatch.setAttribute('role', 'button');

    const color = swatch.style.backgroundColor;
    swatch.setAttribute('aria-label', `Select color ${color}`);

    swatch.addEventListener('click', function () {
      selectSwatch(this);
    });

    swatch.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSwatch(this);
      }
    });
  });
};

const selectSwatch = (swatch) => {
  const siblings = swatch.parentElement.querySelectorAll('.swatch');
  siblings.forEach(s => {
    s.classList.remove('swatch--active');
    s.style.transform = '';
  });

  swatch.classList.add('swatch--active');
  swatch.style.transform = 'scale(1.2)';

  console.log('Color selected:', swatch.style.backgroundColor);
};

// ========================================
// LAZY LOADING IMAGES
// ========================================

const initLazyLoading = () => {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
};

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================

const initSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  `;

  skipLink.addEventListener('focus', function () {
    this.style.top = '0';
  });

  skipLink.addEventListener('blur', function () {
    this.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
};

// ========================================
// ANALYTICS (PLACEHOLDER)
// ========================================

const trackPageView = () => {
  console.log('Page view tracked:', window.location.pathname);
};

const trackEvent = (category, action, label) => {
  console.log('Event tracked:', { category, action, label });
};

// ========================================
// PERFORMANCE MONITORING
// ========================================

const logPerformanceMetrics = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
      }, 0);
    });
  }
};

// ========================================
// COMPONENT LOADING
// ========================================

const loadComponents = async () => {
  try {
    const inSubDir = window.location.pathname.includes('/shop/') || window.location.pathname.includes('/home/') || window.location.pathname.includes('/product/');
    const basePath = inSubDir ? '../' : '';

    const [navRes, footerRes] = await Promise.all([
      fetch(`${basePath}components/navbar.html`),
      fetch(`${basePath}components/footer.html`)
    ]);

    if (navRes.ok) {
      let navHtml = await navRes.text();
      if (inSubDir) {
        navHtml = navHtml.replace(/src="assets\//g, 'src="../assets/');
      }
      const navPlaceholder = document.getElementById('navbar-placeholder');
      if (navPlaceholder) navPlaceholder.outerHTML = navHtml;
    }

    if (footerRes.ok) {
      let footerHtml = await footerRes.text();
      if (inSubDir) {
        footerHtml = footerHtml.replace(/src="assets\//g, 'src="../assets/');
      }
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) footerPlaceholder.outerHTML = footerHtml;
    }

    if (typeof lucide !== 'undefined') {
      setTimeout(() => lucide.createIcons(), 50);
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
};

// ========================================
// INITIALIZATION
// ========================================

// ========================================
// MOBILE SIDEBAR MENU
// ========================================

const initMobileMenu = () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const mobileSidebarBackdrop = document.getElementById('mobileSidebarBackdrop');
  const mobileSidebarClose = document.getElementById('mobileSidebarClose');

  if (!hamburgerBtn || !mobileSidebar) return;

  const openMenu = () => {
    mobileSidebar.classList.add('is-open');
    if (mobileSidebarBackdrop) mobileSidebarBackdrop.classList.add('is-active');
    document.body.classList.add('mobile-menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileSidebar.classList.remove('is-open');
    if (mobileSidebarBackdrop) mobileSidebarBackdrop.classList.remove('is-active');
    document.body.classList.remove('mobile-menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  hamburgerBtn.addEventListener('click', openMenu);

  if (mobileSidebarClose) {
    mobileSidebarClose.addEventListener('click', closeMenu);
  }

  if (mobileSidebarBackdrop) {
    mobileSidebarBackdrop.addEventListener('click', closeMenu);
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSidebar.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close on window resize to desktop
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768 && mobileSidebar.classList.contains('is-open')) {
      closeMenu();
    }
  }, 100));
};

// ========================================
// DRAG TO SCROLL (DESKTOP)
// ========================================

const initDragToScroll = () => {
  const sliders = document.querySelectorAll('.trending-scroll-container, .spec-highlights');

  sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      // Temporarily disable scroll snapping for smooth dragging
      slider.style.scrollSnapType = 'none';
      slider.style.scrollBehavior = 'auto';
    });

    slider.addEventListener('mouseleave', () => {
      if (!isDown) return;
      isDown = false;
      slider.style.cursor = 'grab';

      // Re-enable scroll snapping
      slider.style.scrollSnapType = '';
      slider.style.scrollBehavior = '';
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.style.cursor = 'grab';

      // Re-enable scroll snapping
      slider.style.scrollSnapType = '';
      slider.style.scrollBehavior = '';
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll multiplier
      slider.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor states
    slider.addEventListener('mouseenter', () => {
      if (!isDown) slider.style.cursor = 'grab';
    });

    // Prevent default drag behaviors on links and images to ensure drag-to-scroll works properly
    slider.querySelectorAll('img, a').forEach(el => {
      el.addEventListener('dragstart', (e) => e.preventDefault());
    });
  });
};

const init = async () => {
  console.log('ROOFBAG website initialized');

  await loadComponents();

  // Header & Navigation
  initHeader();
  initMegaMenu();
  initMobileMenu();

  // Core functionality
  initSmoothScroll();
  initProductCarousel();
  initDragToScroll();
  initVideoPlayer();
  initFaqAccordion();
  initEmailForm();
  initColorSwatches();
  initLazyLoading();

  // Accessibility
  initSkipLink();

  // Analytics
  trackPageView();
  logPerformanceMetrics();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isValidEmail,
    debounce,
    isInViewport,
    trackEvent
  };
}