// js/product.js - ÚNIQVE® Standalone Product Detail Page Renderer

class ProductDetailController {
    loadProductPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id') || STORE_PRODUCTS[0].id;

        const product = STORE_PRODUCTS.find(p => p.id === productId);
        const container = document.getElementById('product-detail-view');
        if (!container || !product) return;

        let selectedSize = product.sizes?.[0] || 'Standard';
        let selectedColor = product.colors?.[0] || 'Default';

        container.innerHTML = `
            <!-- Top Image Showcase Gallery with Zoom -->
            <div class="product-gallery-top" style="position:relative; width:100%; height:520px; background:var(--light-grey); border:1px solid var(--border-grey); overflow:hidden;">
                <img id="main-product-zoom-img" src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; cursor:zoom-in;">
                <span class="brand-tag-overlay">ÚNIQVE ORIGINAL</span>
            </div>

            <!-- Product Info Content -->
            <div class="product-details-content">
                <h1 style="font-size: 2.4rem; color:var(--text-main); margin-bottom: 12px; letter-spacing: 1px;">${product.name}</h1>
                <div class="price" style="font-size:1.6rem; color:var(--accent-gold); font-weight:700; margin-bottom:20px;">
                    $${product.price.toFixed(2)} &nbsp;&nbsp;<span style="font-size:1rem; color:var(--text-muted);">★ ${product.rating} / 5.0</span>
                </div>
                <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.6; margin-bottom:30px;">${product.description}</p>

                <!-- Size Options -->
                <div class="options-group" style="margin-bottom:25px;">
                    <label style="display:block; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-weight:700;">Select Size</label>
                    <div class="size-buttons" style="display:flex; gap:10px; flex-wrap:wrap;">
                        ${product.sizes.map((size, index) => `
                            <button class="modal-opt-btn size-option ${index === 0 ? 'active' : ''}" onclick="prodDetailCtrl.selectSize(this, '${size}')">${size}</button>
                        `).join('')}
                    </div>
                </div>

                <!-- Color Options -->
                <div class="options-group" style="margin-bottom:25px;">
                    <label style="display:block; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-weight:700;">Available Color</label>
                    <div class="size-buttons" style="display:flex; gap:10px; flex-wrap:wrap;">
                        ${product.colors.map((color, index) => `
                            <button class="modal-opt-btn color-option ${index === 0 ? 'active' : ''}" onclick="prodDetailCtrl.selectColor(this, '${color}')">${color}</button>
                        `).join('')}
                    </div>
                </div>

                <!-- Specifications Table (Placed Below Image) -->
                <div class="showcase-specs-section" style="margin-top: 30px;">
                    <h3 class="specs-heading">Product Specifications</h3>
                    <div class="specs-grid-table">
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <div class="spec-row">
                                <span class="spec-key">${key}</span>
                                <span class="spec-val">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 15px; margin-top: 30px; flex-wrap:wrap;">
                    <button class="btn-primary" onclick="app.addToCart('${product.id}', '${selectedSize}', '${selectedColor}')" style="flex:1; padding:16px;">Add To Shopping Bag</button>
                    <button class="btn-primary btn-gold" onclick="prodDetailCtrl.buyNow('${product.id}', '${selectedSize}', '${selectedColor}')" style="flex:1; padding:16px;">Buy Now</button>
                </div>
            </div>
        `;

        // Bind image zoom interaction
        const zoomImg = document.getElementById('main-product-zoom-img');
        if (zoomImg) {
            zoomImg.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = zoomImg.getBoundingClientRect();
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;
                zoomImg.style.transformOrigin = `${x}% ${y}%`;
                zoomImg.style.transform = 'scale(1.6)';
            });
            zoomImg.addEventListener('mouseleave', () => {
                zoomImg.style.transformOrigin = 'center center';
                zoomImg.style.transform = 'scale(1)';
            });
        }
    }

    selectSize(btn, size) {
        document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedSize = size;
    }

    selectColor(btn, color) {
        document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedColor = color;
    }

    buyNow(productId, size, color) {
        app.addToCart(productId, size, color);
        window.location.href = 'checkout.html';
    }
}

const prodDetailCtrl = new ProductDetailController();
