(function () {
  'use strict';

  var container = document.getElementById('site-footer');
  if (!container) return;

  container.innerHTML =
    /* ── Trust Badges ── */
    '<div class="home-trust">' +
      '<div class="home-trust__item"><svg viewBox="0 0 24 24"><path d="M1 12l5-5v3h8V7l5 5-5 5v-3H6v3z" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="home-trust__label">Express Shipping from India</span></div>' +
      '<div class="home-trust__item"><svg viewBox="0 0 24 24"><rect x="1" y="6" width="22" height="13" rx="2"/><path d="M1 10h22"/></svg><span class="home-trust__label">Free Shipping</span></div>' +
      '<div class="home-trust__item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span class="home-trust__label">30 Days Return Policy</span></div>' +
      '<div class="home-trust__item"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v4l3 3"/><path d="M7 3v2M17 3v2"/></svg><span class="home-trust__label">100% Secure Payment</span></div>' +
      '<div class="home-trust__item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg><span class="home-trust__label">1 Year Warranty</span></div>' +
    '</div>' +

    /* ── Footer ── */
    '<footer class="home-footer">' +
      '<div class="home-footer__main">' +
        '<div class="home-footer__brand">' +
          '<a href="../home/" class="home-footer__logo"><img src="../assets/away-light.svg" alt="AWAY" /></a>' +
          '<div class="home-footer__socials">' +
            '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
            '<a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></a>' +
            '<a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="home-footer__columns">' +
          '<div><h4 class="home-footer__col-title">Brand</h4><div class="home-footer__col-links"><a href="../about/">About Us</a><a href="#">Sustainability</a></div></div>' +
          '<div><h4 class="home-footer__col-title">Help</h4><div class="home-footer__col-links"><a href="../support/#faq">FAQs</a><a href="../support/#contact">Contact</a><a href="#">Shipping</a></div></div>' +
        '</div>' +
      '</div>' +
      '<div class="home-footer__stats">' +
        '<div class="home-footer__stat"><span class="home-footer__stat-label">Happy Customers</span><span class="home-footer__stat-value">10,000+</span></div>' +
        '<div class="home-footer__stat"><span class="home-footer__stat-label">Google Reviews</span><span class="home-footer__stat-value">4.5<span class="home-footer__stars"><svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg><svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg><svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg><svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg><svg class="empty" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg></span></span></div>' +
      '</div>' +
      '<div class="home-footer__bottom">' +
        '<div class="home-footer__payments"><img src="../assets/amex.webp" alt="Amex"/><img src="../assets/gpay.webp" alt="Google Pay"/><img src="../assets/mastercard.webp" alt="Mastercard"/><img src="../assets/visa.webp" alt="Visa"/><img src="../assets/upi.webp" alt="UPI"/></div>' +
        '<span class="home-footer__copy">&copy; 2026 AWAY. All rights reserved.</span>' +
      '</div>' +
    '</footer>';
})();
