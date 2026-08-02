// js/cart.js - ÚNIQVE® Cart & Checkout Calculation Engine

class CartController {
    constructor() {
        this.couponDiscount = 0;
        this.activeCoupon = null;
    }

    renderCartView() {
        const container = document.getElementById('cart-items-container');
        if (!container) return;

        if (!app.cart || app.cart.length === 0) {
            container.innerHTML = `
                <div style="text-align:center; padding: 60px 20px; color:var(--text-muted);">
                    <p style="font-size:1.2rem; margin-bottom:15px;">Your ÚNIQVE shopping bag is empty.</p>
                    <a href="shop.html" class="btn-primary">Explore 200+ Releases</a>
                </div>
            `;
            this.updateSummary(0);
            return;
        }

        container.innerHTML = app.cart.map(item => `
            <div class="cart-item-row" style="display:flex; align-items:center; justify-content:space-between; padding:20px 0; border-bottom:1px solid var(--border-grey); gap:20px;">
                <img src="${item.image}" alt="${item.name}" style="width:85px; height:85px; object-fit:cover; background:var(--light-grey); border:1px solid var(--border-grey);">
                <div style="flex:1;">
                    <h4 style="font-size: 0.95rem; text-transform:uppercase; margin-bottom: 5px; color:var(--text-main); font-weight:700;">${item.name}</h4>
                    <p style="font-size: 0.85rem; color:var(--text-muted);">Size: ${item.size} | Color: ${item.color}</p>
                    <p style="font-size: 0.85rem; color:var(--accent-gold); font-weight:bold; margin-top:4px;">$${item.price.toFixed(2)}</p>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <button onclick="cartCtrl.updateQty('${item.id}', '${item.size}', '${item.color}', ${item.quantity - 1})" style="padding:4px 12px; background:var(--light-grey); border:1px solid var(--border-grey); cursor:pointer; font-weight:bold;">-</button>
                    <span style="font-size:0.95rem; font-weight:bold;">${item.quantity}</span>
                    <button onclick="cartCtrl.updateQty('${item.id}', '${item.size}', '${item.color}', ${item.quantity + 1})" style="padding:4px 12px; background:var(--light-grey); border:1px solid var(--border-grey); cursor:pointer; font-weight:bold;">+</button>
                </div>
                <div style="font-weight:bold; font-size:1rem; min-width:80px; text-align:right; color:var(--text-main);">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
                <button onclick="cartCtrl.removeItem('${item.id}', '${item.size}', '${item.color}')" style="background:none; border:none; cursor:pointer; color:#999; font-size:1.2rem;" title="Remove">✕</button>
            </div>
        `).join('');

        const subtotal = app.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.updateSummary(subtotal);
    }

    updateQty(productId, size, color, newQty) {
        if (newQty <= 0) {
            this.removeItem(productId, size, color);
            return;
        }
        const target = app.cart.find(i => i.id === productId && i.size === size && i.color === color);
        if (target) {
            target.quantity = newQty;
            app.saveState();
            this.renderCartView();
        }
    }

    removeItem(productId, size, color) {
        app.removeFromCart(productId, size, color);
        this.renderCartView();
    }

    applyCoupon(couponCode) {
        const code = couponCode.trim().toUpperCase();
        if (code === 'UNIQVE10' || code === 'UNIQUE10') {
            this.couponDiscount = 0.10; // 10% Off
            this.activeCoupon = code;
            app.showToast("Coupon 'UNIQVE10' applied! 10% discount added.");
        } else if (code === 'VIP20') {
            this.couponDiscount = 0.20; // 20% Off
            this.activeCoupon = code;
            app.showToast("VIP Coupon applied! 20% discount added.");
        } else {
            app.showToast("Invalid promo code. Try 'UNIQVE10'");
            return;
        }
        const subtotal = app.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.updateSummary(subtotal);
    }

    updateSummary(subtotal) {
        const discountAmount = subtotal * this.couponDiscount;
        const subtotalAfterDiscount = subtotal - discountAmount;
        const tax = subtotalAfterDiscount > 0 ? subtotalAfterDiscount * 0.08 : 0;
        const shipping = subtotalAfterDiscount > 0 ? 15.00 : 0;
        const total = subtotalAfterDiscount > 0 ? subtotalAfterDiscount + tax + shipping : 0;

        const subtotalEl = document.getElementById('summary-subtotal');
        const taxEl = document.getElementById('summary-tax');
        const discountEl = document.getElementById('summary-discount');
        const totalEl = document.getElementById('summary-total');

        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
        if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

const cartCtrl = new CartController();
