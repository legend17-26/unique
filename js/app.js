// js/app.js - ÚNIQVE® Master Store Engine & Application Controller

class StoreApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('store_cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('store_wishlist')) || [];
        this.theme = localStorage.getItem('store_theme') || 'light';
        this.selectedSize = null;
        this.selectedColor = null;
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.updateBadges();
        this.injectToastContainer();
        this.injectModalContainer();
        this.injectScrollToTopButton();
        this.bindStickyNavbar();
        this.bindGlobalKeyboardEvents();
    }

    /* LocalStorage Persistence */
    saveState() {
        localStorage.setItem('store_cart', JSON.stringify(this.cart));
        localStorage.setItem('store_wishlist', JSON.stringify(this.wishlist));
        this.updateBadges();
    }

    /* Dark Mode Theme Controller */
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('store_theme', this.theme);
        this.applyTheme(this.theme);
        this.showToast(`Switched to ${this.theme.toUpperCase()} mode.`);
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    /* Mobile Hamburger Menu Toggle */
    toggleMobileMenu() {
        if (typeof window.toggleMobileMenu === 'function') {
            window.toggleMobileMenu();
        } else {
            const navList = document.getElementById('nav-links-list');
            if (navList) {
                navList.classList.toggle('mobile-open');
            }
        }
    }

    /* Sticky Navbar Scroll Effect */
    bindStickyNavbar() {
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('main-navbar') || document.querySelector('nav');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            const scrollTopBtn = document.getElementById('scroll-to-top');
            if (scrollTopBtn) {
                scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
            }
        });
    }

    /* Scroll To Top Button */
    injectScrollToTopButton() {
        if (document.getElementById('scroll-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'scroll-to-top';
        btn.innerHTML = '▲';
        btn.title = 'Scroll to top';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);
    }

    /* Badge Counters */
    updateBadges() {
        const cartBadges = document.querySelectorAll('#cart-badge');
        const wishlistBadges = document.querySelectorAll('#wishlist-badge');

        const totalCartItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalWishlistItems = this.wishlist.length;

        cartBadges.forEach(b => b.innerText = totalCartItems);
        wishlistBadges.forEach(b => b.innerText = totalWishlistItems);
    }

    /* Cart Operations */
    addToCart(productId, size = null, color = null) {
        const product = STORE_PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const chosenSize = size || product.sizes?.[0] || 'Standard';
        const chosenColor = color || product.colors?.[0] || 'Default';

        const existingItem = this.cart.find(item => item.id === productId && item.size === chosenSize && item.color === chosenColor);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: chosenSize,
                color: chosenColor,
                quantity: 1
            });
        }

        this.saveState();
        this.showToast(`Added "${product.name}" to your shopping bag.`);
    }

    removeFromCart(productId, size, color) {
        this.cart = this.cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
        this.saveState();
        this.showToast("Item removed from shopping bag.");
    }

    /* Wishlist Operations */
    toggleWishlist(productId) {
        const product = STORE_PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const index = this.wishlist.findIndex(item => item.id === productId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.showToast(`Removed "${product.name}" from wishlist.`);
        } else {
            this.wishlist.push(product);
            this.showToast(`Saved "${product.name}" to wishlist.`);
        }
        this.saveState();
    }

    /* Toast Notifications */
    injectToastContainer() {
        if (document.getElementById('store-toast-container')) return;
        const container = document.createElement('div');
        container.id = 'store-toast-container';
        document.body.appendChild(container);
    }

    showToast(message) {
        const container = document.getElementById('store-toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerText = message;
        container.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    /* Product Showcase Modal Injection */
    injectModalContainer() {
        if (document.getElementById('product-showcase-modal')) return;

        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'product-showcase-modal';
        modalOverlay.className = 'modal-overlay-container';
        modalOverlay.innerHTML = `
            <div class="modal-card-box">
                <button class="modal-close-btn" onclick="app.closeProductModal()">&times;</button>
                <div id="modal-content-body"></div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closeProductModal();
            }
        });
    }

    openProductModal(productId) {
        const product = STORE_PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        this.selectedSize = product.sizes?.[0] || 'Standard';
        this.selectedColor = product.colors?.[0] || 'Default';

        const modalBody = document.getElementById('modal-content-body');
        if (!modalBody) return;

        modalBody.innerHTML = `
            <div class="showcase-header">
                <span class="showcase-badge">ÚNIQVE® PRODUCT SHOWCASE</span>
            </div>
            
            <!-- Top Product Showcase Image -->
            <div class="showcase-img-top-container">
                <img src="${product.image}" alt="${product.name}" class="showcase-top-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80';">
            </div>

            <!-- Header Details -->
            <div class="showcase-main-info" style="margin-bottom:20px;">
                <h2 style="font-size:1.8rem; color:var(--text-main); margin-bottom:8px; font-weight:800;">${product.name}</h2>
                <div style="display:flex; gap:15px; align-items:center; margin-bottom:12px;">
                    <span style="font-size:1.5rem; font-weight:800; color:var(--accent-gold);">$${product.price.toFixed(2)}</span>
                    <span style="font-size:0.9rem; font-weight:600; background:var(--light-grey); padding:4px 10px;">★ ${product.rating} / 5.0</span>
                </div>
                <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem;">${product.description}</p>
            </div>

            <!-- Size & Color Options -->
            <div style="display:flex; flex-direction:column; gap:15px; margin-bottom:20px; background:var(--light-grey); padding:20px; border:1px solid var(--border-grey);">
                <div>
                    <label style="font-size:0.85rem; font-weight:700; text-transform:uppercase; display:block; margin-bottom:8px; color:var(--text-main);">
                        Select Size: <span id="modal-selected-size-label" style="color:var(--accent-gold); font-weight:800; margin-left:6px;">${this.selectedSize}</span>
                    </label>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        ${product.sizes.map((s, idx) => `
                            <button type="button" class="modal-opt-btn size-opt-btn ${idx === 0 ? 'active' : ''}" onclick="app.setModalSize(this, '${s}')">${s}</button>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <label style="font-size:0.85rem; font-weight:700; text-transform:uppercase; display:block; margin-bottom:8px; color:var(--text-main);">
                        Available Color: <span id="modal-selected-color-label" style="color:var(--accent-gold); font-weight:800; margin-left:6px;">${this.selectedColor}</span>
                    </label>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        ${product.colors.map((c, idx) => `
                            <button type="button" class="modal-opt-btn color-opt-btn ${idx === 0 ? 'active' : ''}" onclick="app.setModalColor(this, '${c}')">${c}</button>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Product Specifications Table (BELOW THE IMAGE) -->
            <div class="showcase-specs-section">
                <h4 class="specs-heading">Product Specifications</h4>
                <div class="specs-grid-table">
                    ${Object.entries(product.specs).map(([key, val]) => `
                        <div class="spec-row">
                            <span class="spec-key">${key}</span>
                            <span class="spec-val">${val}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Action Footer -->
            <div style="display:flex; gap:15px; margin-top:25px; flex-wrap:wrap;">
                <button type="button" class="btn-primary" style="flex:1;" onclick="app.addFromModal('${product.id}')">Add To Shopping Bag</button>
                <button type="button" class="btn-primary btn-gold" style="flex:1;" onclick="app.buyNowFromModal('${product.id}')">Buy Now</button>
            </div>
        `;

        const modalOverlay = document.getElementById('product-showcase-modal');
        if (modalOverlay) {
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeProductModal() {
        const modalOverlay = document.getElementById('product-showcase-modal');
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    setModalSize(btn, size) {
        document.querySelectorAll('.size-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedSize = size;
        const label = document.getElementById('modal-selected-size-label');
        if (label) label.innerText = size;
    }

    setModalColor(btn, color) {
        document.querySelectorAll('.color-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedColor = color;
        const label = document.getElementById('modal-selected-color-label');
        if (label) label.innerText = color;
    }

    addFromModal(productId) {
        this.addToCart(productId, this.selectedSize, this.selectedColor);
        this.closeProductModal();
    }

    buyNowFromModal(productId) {
        this.addToCart(productId, this.selectedSize, this.selectedColor);
        this.closeProductModal();
        window.location.href = 'checkout.html';
    }

    /* Standard Card Component Builder */
    createProductCardHTML(product) {
        return `
            <div class="product-card">
                <div class="product-img-wrapper" onclick="app.openProductModal('${product.id}')" title="View ${product.name} Showcase">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80';">
                    <span class="brand-tag-overlay">ÚNIQVE®</span>
                    <div class="quick-view-trigger">Quick View Showcase</div>
                </div>
                <div class="product-info">
                    <h3 class="product-title" onclick="app.openProductModal('${product.id}')">${product.name}</h3>
                    <div class="product-meta">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <span class="product-rating">★ ${product.rating}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-primary btn-sm" onclick="app.addToCart('${product.id}')" style="flex:1; padding:10px; font-size:0.8rem;">Add To Cart</button>
                        <button class="btn-icon" onclick="app.toggleWishlist('${product.id}')" title="Save Favorite">❤️</button>
                        <a href="product.html?id=${product.id}" class="btn-icon" title="View Product Page">🔗</a>
                    </div>
                </div>
            </div>
        `;
    }

    bindGlobalKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeProductModal();
            }
        });
    }
}

const app = new StoreApp();