document.addEventListener('DOMContentLoaded', () => {
    // Slider Logic
    const sliderImages = document.getElementById('sliderImages');
    const images = sliderImages.querySelectorAll('.product-img');
    const thumbs = document.querySelectorAll('.thumb-btn');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');

    let currentIndex = 0;

    function updateSlider(index) {
        currentIndex = index;

        // Update main images
        images.forEach((img, i) => {
            if (i === currentIndex) {
                img.classList.add('is-active');
            } else {
                img.classList.remove('is-active');
            }
        });

        // Update thumbnails
        thumbs.forEach((thumb, i) => {
            if (i === currentIndex) {
                thumb.classList.add('is-active');
            } else {
                thumb.classList.remove('is-active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        let nextIndex = currentIndex - 1;
        if (nextIndex < 0) nextIndex = images.length - 1;
        updateSlider(nextIndex);
    });

    nextBtn.addEventListener('click', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= images.length) nextIndex = 0;
        updateSlider(nextIndex);
    });

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.getAttribute('data-index'));
            updateSlider(index);
        });
    });

    // Options Selection Logic
    const optionSwatches = document.querySelectorAll('.filter-swatch[data-type="color"]');
    const colorSelectedText = document.getElementById('colorSelectedText');

    optionSwatches.forEach((swatch) => {
        swatch.addEventListener('click', () => {
            optionSwatches.forEach((s) => s.classList.remove('is-selected'));
            swatch.classList.add('is-selected');
            colorSelectedText.textContent = swatch.getAttribute('data-value');
        });
    });

    const finishToggles = document.querySelectorAll('.box-toggle[data-type="finish"]');
    const finishSelectedText = document.getElementById('finishSelectedText');

    finishToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            finishToggles.forEach((t) => t.classList.remove('is-active'));
            toggle.classList.add('is-active');
            finishSelectedText.textContent = toggle.getAttribute('data-value');
        });
    });

    const sizeToggles = document.querySelectorAll('.box-toggle[data-type="size"]');
    sizeToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            sizeToggles.forEach((t) => t.classList.remove('is-active'));
            toggle.classList.add('is-active');
        });
    });

    // Quantity Logic
    const qtyInput = document.getElementById('qtyInput');
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const basePrice = 45000;
    const btnPriceDisplay = document.getElementById('btnPriceDisplay');

    function updatePriceDisplay() {
        const qty = parseInt(qtyInput.value) || 1;
        const total = basePrice * qty;
        // Format to INR with commas
        btnPriceDisplay.textContent = '₹' + total.toLocaleString('en-IN') + '.00';
    }

    qtyMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
            qtyInput.value = val - 1;
            updatePriceDisplay();
        }
    });

    qtyPlus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val < 99) {
            qtyInput.value = val + 1;
            updatePriceDisplay();
        }
    });

    qtyInput.addEventListener('change', () => {
        let val = parseInt(qtyInput.value);
        if (isNaN(val) || val < 1) val = 1;
        if (val > 99) val = 99;
        qtyInput.value = val;
        updatePriceDisplay();
    });

    // Options Accordion Logic
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((acc) => {
        const header = acc.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = acc.classList.contains('is-open');

            // Close all accordions (optional)
            // accordions.forEach((a) => a.classList.remove('is-open'));
            // accordions.forEach((a) => {
            //   const icon = a.querySelector('.lucide-minus');
            //   if (icon) {
            //     lucide.createIcons({
            //       icons: { minus: 0 },
            //       nameAttr: "data-lucide",
            //       attrs: { class: "accordion-icon" },
            //     });
            //   }
            // });

            if (!isOpen) {
                acc.classList.add('is-open');
                // Icon logic handled via CSS or recreation
            } else {
                acc.classList.remove('is-open');
            }
        });
    });

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        setTimeout(() => lucide.createIcons(), 100);
    }
});
