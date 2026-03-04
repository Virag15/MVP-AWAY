(function () {
  'use strict';

  var container = document.getElementById('site-header');
  if (!container) return;

  // ══════════════════════════════════════
  //  INJECT HTML
  // ══════════════════════════════════════

  container.innerHTML =
    /* Announcement */
    '<div class="home-announcement" id="homeAnnouncement">' +
      '<div class="home-announcement__track">' +
        '<span class="home-announcement__text">Free shipping on all orders over <span>&#8377;10,000</span></span>' +
        '<span class="home-announcement__text">New arrivals \u2014 Roofbox 540L now available</span>' +
        '<span class="home-announcement__text">Engineered for the open road \u2014 Built to last</span>' +
        '<span class="home-announcement__text">Free shipping on all orders over <span>&#8377;10,000</span></span>' +
        '<span class="home-announcement__text">New arrivals \u2014 Roofbox 540L now available</span>' +
        '<span class="home-announcement__text">Engineered for the open road \u2014 Built to last</span>' +
      '</div>' +
    '</div>' +

    /* Nav */
    '<nav class="home-nav" id="homeNav">' +
      '<a href="../home/" class="home-nav__logo"><img src="../assets/away-light.svg" alt="AWAY" /></a>' +
      '<div class="home-nav__links">' +
        '<div class="home-nav__col"><a href="../home/">Home</a><a href="../about/">About</a><a href="../support/">Contact</a></div>' +
        '<div class="home-nav__col"><a href="../shop/">Roofbox</a><a href="../shop/">Roofbag</a><a href="../shop/">Roofrack</a></div>' +
        '<div class="home-nav__col"><a href="../compare/">Compare</a><a href="../support/#faq">FAQ</a><a href="#">Instagram</a></div>' +
        '<div class="home-nav__col"><a href="../dealers/" class="is-red">Dealers</a><a href="#" class="is-red">Rent</a></div>' +
      '</div>' +
      '<div class="home-nav__right">' +
        '<button class="home-nav__cart" id="openSideCart">Cart (<span class="home-nav__cart-count" id="navCartCount">0</span>)</button>' +
      '</div>' +
      '<button class="home-nav__hamburger" id="hamburgerOpen" aria-label="Open menu">' +
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></svg>' +
      '</button>' +
    '</nav>' +

    /* Mobile Menu */
    '<div class="home-mobile-menu" id="mobileMenu">' +
      '<div class="home-mobile-menu__header">' +
        '<a href="../home/" class="home-mobile-menu__logo"><img src="../assets/away-light.svg" alt="AWAY" /></a>' +
        '<button class="home-mobile-menu__close" id="hamburgerClose" aria-label="Close menu">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="home-mobile-menu__links">' +
        '<a href="../home/">Home</a><a href="../about/">About</a><a href="../shop/">Roofbox</a><a href="../shop/">Roofbag</a><a href="../shop/">Roofrack</a>' +
        '<a href="../compare/">Compare</a><a href="#" style="color:#EC0201;">Rent</a><a href="../dealers/" style="color:#EC0201;">Dealers</a><a href="../support/">Support</a>' +
      '</div>' +
      '<div class="home-mobile-menu__footer"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">Privacy</a></div>' +
    '</div>' +

    /* Side Cart Overlay */
    '<div class="side-cart-overlay" id="sideCartOverlay"></div>' +

    /* Side Cart */
    '<aside class="side-cart" id="sideCart">' +
      '<div class="side-cart__header">' +
        '<div>' +
          '<span class="side-cart__title">Your Cart</span> ' +
          '<span class="side-cart__count" id="sideCartCount">(0 items)</span>' +
        '</div>' +
        '<button class="side-cart__close" id="sideCartClose" aria-label="Close cart">' +
          '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="side-cart__body" id="sideCartBody"></div>' +
      '<div class="side-cart__footer" id="sideCartFooter"></div>' +
    '</aside>';

  // ══════════════════════════════════════
  //  SCROLL HIDE
  // ══════════════════════════════════════

  var lastScroll = 0;
  var announcement = document.getElementById('homeAnnouncement');
  var nav = document.getElementById('homeNav');
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 60 && y > lastScroll) {
      announcement.classList.add('is-hidden');
      nav.classList.add('is-hidden');
    } else {
      announcement.classList.remove('is-hidden');
      nav.classList.remove('is-hidden');
    }
    lastScroll = y;
  }, { passive: true });

  // ══════════════════════════════════════
  //  MOBILE MENU
  // ══════════════════════════════════════

  var mobileMenu = document.getElementById('mobileMenu');
  document.getElementById('hamburgerOpen').addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('hamburgerClose').addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // ══════════════════════════════════════
  //  SIDE CART
  // ══════════════════════════════════════

  var cart = JSON.parse(localStorage.getItem('awayCart') || '[]');
  var sideCart = document.getElementById('sideCart');
  var sideCartOverlay = document.getElementById('sideCartOverlay');
  var sideCartBody = document.getElementById('sideCartBody');
  var sideCartFooter = document.getElementById('sideCartFooter');
  var sideCartCount = document.getElementById('sideCartCount');
  var navCartCount = document.getElementById('navCartCount');

  function saveCart() { localStorage.setItem('awayCart', JSON.stringify(cart)); }

  function openCart() {
    sideCart.classList.add('is-open');
    sideCartOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    sideCart.classList.remove('is-open');
    sideCartOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.getElementById('openSideCart').addEventListener('click', openCart);
  document.getElementById('sideCartClose').addEventListener('click', closeCart);
  sideCartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sideCart.classList.contains('is-open')) closeCart();
  });

  function formatPrice(n) {
    return '\u20B9 ' + n.toLocaleString('en-IN');
  }

  var COUPONS = [
    { code: 'AWAY10', discount: 10, type: 'percent', desc: '10% off your order', min: 0 },
    { code: 'FIRST500', discount: 500, type: 'flat', desc: '\u20B9500 off on first order', min: 5000 },
    { code: 'FREESHIP', discount: 499, type: 'shipping', desc: 'Free shipping on any order', min: 0 }
  ];

  function updateCartUI() {
    var totalItems = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    navCartCount.textContent = totalItems;
    sideCartCount.textContent = '(' + totalItems + ' item' + (totalItems !== 1 ? 's' : '') + ')';

    if (!cart.length) {
      sideCartBody.innerHTML =
        '<div class="side-cart__empty">' +
          '<svg class="side-cart__empty-icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
          '<span class="side-cart__empty-text">Your cart is empty</span>' +
        '</div>';
      sideCartFooter.innerHTML = '';
      return;
    }

    sideCartBody.innerHTML = cart.map(function (item, i) {
      var priceHtml = item.originalPrice
        ? '<span style="color:#39FF14;font-weight:600">' + formatPrice(item.price) + '</span> <span style="font-size:0.65rem;color:#999;text-decoration:line-through">' + formatPrice(item.originalPrice) + '</span>'
        : formatPrice(item.price);
      return '<div class="side-cart__item" data-index="' + i + '">' +
        '<img class="side-cart__item-img" src="' + item.image + '" alt="' + item.name + '" />' +
        '<div class="side-cart__item-details">' +
          '<span class="side-cart__item-name">' + item.name + '</span>' +
          (item.variant ? '<span class="side-cart__item-variant">' + item.variant + '</span>' : '') +
          '<span class="side-cart__item-price">' + priceHtml + '</span>' +
          '<div class="side-cart__item-actions">' +
            '<button class="side-cart__qty-btn" data-action="minus" data-index="' + i + '">&minus;</button>' +
            '<span class="side-cart__qty">' + item.qty + '</span>' +
            '<button class="side-cart__qty-btn" data-action="plus" data-index="' + i + '">+</button>' +
            '<button class="side-cart__remove" data-index="' + i + '">Remove</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Free product offer
    var subtotal = cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
    var freeHtml = subtotal >= 15000
      ? '<div style="padding:0.6rem 1.5rem;border-bottom:1px solid #f0ecec;background:rgba(236,2,1,0.03);display:flex;align-items:center;gap:0.6rem;">' +
          '<span style="font-family:var(--font-body);font-size:0.45rem;font-weight:600;color:#fff;background:#EC0201;padding:0.2rem 0.4rem;text-transform:uppercase;letter-spacing:0.01em;line-height:1;white-space:nowrap;">Free</span>' +
          '<div style="display:flex;flex-direction:column;gap:0.1rem;">' +
            '<span style="font-family:var(--font-display);font-size:0.6rem;font-weight:600;color:#1a1a1a;text-transform:uppercase;">Cargo Net Organizer</span>' +
            '<span style="font-family:var(--font-body);font-size:0.5rem;font-weight:400;color:#9a8f8f;">Added free with your order</span>' +
          '</div>' +
          '<span style="font-family:var(--font-display);font-size:0.6rem;font-weight:600;color:#EC0201;margin-left:auto;white-space:nowrap;">FREE</span>' +
        '</div>'
      : (subtotal > 0
        ? '<div style="padding:0.5rem 1.5rem;border-bottom:1px solid #f0ecec;background:rgba(236,2,1,0.02);">' +
            '<span style="font-family:var(--font-body);font-size:0.5rem;font-weight:400;color:#9a8f8f;letter-spacing:0.01em;">Add \u20B9' + (15000 - subtotal).toLocaleString('en-IN') + ' more for a </span>' +
            '<span style="font-family:var(--font-body);font-size:0.5rem;font-weight:600;color:#EC0201;letter-spacing:0.01em;">FREE Cargo Net Organizer</span>' +
          '</div>'
        : '');
    sideCartBody.innerHTML += freeHtml;

    // Coupon state
    var savedCoupon = JSON.parse(localStorage.getItem('awayCoupon') || 'null');
    var shipping = subtotal >= 10000 ? 0 : 499;
    var discountHtml = '';
    var discountAmt = 0;

    if (savedCoupon) {
      var c = COUPONS.find(function (cp) { return cp.code === savedCoupon.code; });
      if (c) {
        if (c.type === 'percent') discountAmt = Math.round(subtotal * c.discount / 100);
        else if (c.type === 'flat') discountAmt = c.discount;
        else if (c.type === 'shipping') discountAmt = shipping;
        if (c.min && subtotal < c.min) {
          localStorage.removeItem('awayCoupon');
          discountAmt = 0;
        }
      }
    }

    if (savedCoupon && discountAmt > 0) {
      discountHtml =
        '<div class="side-cart__discount">' +
          '<span class="side-cart__discount-label">Discount (' + savedCoupon.code + ')</span>' +
          '<span class="side-cart__discount-value">-' + formatPrice(discountAmt) + '</span>' +
        '</div>';
    }

    var couponSectionHtml = savedCoupon && discountAmt > 0
      ? '<div class="side-cart__coupon">' +
          '<div class="side-cart__coupon-applied">' +
            '<span class="side-cart__coupon-applied-info">' + savedCoupon.code + ' applied \u2014 you save ' + formatPrice(discountAmt) + '</span>' +
            '<button class="side-cart__coupon-remove" id="scCouponRemove">Remove</button>' +
          '</div>' +
        '</div>'
      : '<div class="side-cart__coupon">' +
          '<div class="side-cart__coupon-row">' +
            '<input class="side-cart__coupon-input" id="scCouponIn" type="text" placeholder="Coupon code" />' +
            '<button class="side-cart__coupon-btn" id="scCouponBtn">Apply</button>' +
          '</div>' +
          '<div id="scCouponMsg"></div>' +
        '</div>' +
        '<div class="side-cart__codes">' +
          '<p class="side-cart__codes-title">Available Coupons</p>' +
          COUPONS.map(function (c) {
            return '<div class="side-cart__code" data-code="' + c.code + '">' +
              '<div><span class="side-cart__code-name">' + c.code + '</span><br><span class="side-cart__code-desc">' + c.desc + '</span></div>' +
              '<button class="side-cart__code-use">Apply</button>' +
            '</div>';
          }).join('') +
        '</div>';

    sideCartFooter.innerHTML =
      '<div class="side-cart__subtotal">' +
        '<span class="side-cart__subtotal-label">Subtotal</span>' +
        '<span class="side-cart__subtotal-value">' + formatPrice(subtotal) + '</span>' +
      '</div>' +
      discountHtml +
      couponSectionHtml +
      '<button class="side-cart__checkout" id="scCheckout" style="margin-top:0.75rem">Checkout</button>' +
      '<button class="side-cart__continue" id="scContinue">Continue Shopping</button>';

    document.getElementById('scCheckout').addEventListener('click', function () {
      window.location.href = '../checkout/';
    });
    document.getElementById('scContinue').addEventListener('click', closeCart);
    bindCouponEvents(subtotal, shipping);
  }

  function applyCoupon(code, subtotal, shipping) {
    var coupon = COUPONS.find(function (c) { return c.code === code; });
    if (!coupon) return { ok: false, msg: 'Invalid coupon code' };
    var amt = 0;
    if (coupon.type === 'percent') amt = Math.round(subtotal * coupon.discount / 100);
    else if (coupon.type === 'flat') amt = coupon.discount;
    else if (coupon.type === 'shipping') amt = shipping;
    if (coupon.min && subtotal < coupon.min) return { ok: false, msg: 'Min. order \u20B9' + coupon.min.toLocaleString('en-IN') + ' required' };
    localStorage.setItem('awayCoupon', JSON.stringify({ code: coupon.code, discount: amt }));
    return { ok: true, amt: amt };
  }

  function bindCouponEvents(subtotal, shipping) {
    var applyBtn = document.getElementById('scCouponBtn');
    var removeBtn = document.getElementById('scCouponRemove');
    if (applyBtn) {
      applyBtn.addEventListener('click', function () {
        var input = document.getElementById('scCouponIn');
        var msg = document.getElementById('scCouponMsg');
        var code = input.value.trim().toUpperCase();
        if (!code) { msg.innerHTML = ''; return; }
        var result = applyCoupon(code, subtotal, shipping);
        if (result.ok) { updateCartUI(); }
        else { msg.innerHTML = '<p class="side-cart__coupon-msg side-cart__coupon-msg--err">' + result.msg + '</p>'; }
      });
      sideCartFooter.querySelectorAll('.side-cart__code').forEach(function (card) {
        card.addEventListener('click', function () {
          document.getElementById('scCouponIn').value = card.dataset.code;
          applyBtn.click();
        });
      });
    }
    if (removeBtn) {
      removeBtn.addEventListener('click', function () {
        localStorage.removeItem('awayCoupon');
        updateCartUI();
      });
    }
  }

  // Delegated events for cart item actions
  sideCartBody.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    var removeBtn = e.target.closest('.side-cart__remove');
    if (btn) {
      var idx = parseInt(btn.dataset.index);
      if (btn.dataset.action === 'plus') { cart[idx].qty++; }
      else if (btn.dataset.action === 'minus') {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      }
      saveCart(); updateCartUI();
    } else if (removeBtn) {
      var idx2 = parseInt(removeBtn.dataset.index);
      cart.splice(idx2, 1);
      saveCart(); updateCartUI();
    }
  });

  // ══════════════════════════════════════
  //  ADD TO CART (global)
  // ══════════════════════════════════════

  window.addToCart = function (p) {
    var existing = cart.find(function (item) { return item.id === p.id; });
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: p.id, name: p.name, variant: p.variant || '',
        price: parseInt(p.price), originalPrice: parseInt(p.originalPrice) || 0,
        image: p.image, qty: 1
      });
    }
    saveCart(); updateCartUI(); openCart();
  };

  // Event delegation for .home-product__add buttons (shop/home pages)
  document.addEventListener('click', function (e) {
    var addBtn = e.target.closest('.home-product__add');
    if (!addBtn) return;
    e.preventDefault();
    e.stopPropagation();

    // Read product data from data-attributes on the button
    if (addBtn.dataset.id) {
      window.addToCart({
        id: addBtn.dataset.id,
        name: addBtn.dataset.name || '',
        variant: addBtn.dataset.variant || '',
        price: addBtn.dataset.price || 0,
        originalPrice: addBtn.dataset.originalPrice || 0,
        image: addBtn.dataset.image || ''
      });
      return;
    }

    // Fallback: try to extract from parent card link (product page related items)
    var card = addBtn.closest('.home-product');
    if (card) {
      var href = card.getAttribute('href') || '';
      var idMatch = href.match(/id=([^&]+)/);
      if (idMatch && window.PRODUCTS) {
        var p = window.PRODUCTS.find(function (prod) { return prod.id === idMatch[1]; });
        if (p) window.addToCart(p);
      }
    }
  });

  // Init cart UI on load
  updateCartUI();

})();
