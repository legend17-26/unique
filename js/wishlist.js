// js/wishlist.js - ÚNIQVE® Wishlist Controller Engine

class WishlistController {
    renderWishlistView() {
        const grid = document.getElementById('wishlist-grid');
        if (!grid) return;

        if (!app.wishlist || app.wishlist.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; color:var(--text-muted);">
                    <p style="font-size:1.2rem; margin-bottom:15px;">Your ÚNIQVE wishlist is empty.</p>
                    <a href="shop.html" class="btn-primary">Discover 200+ Products</a>
                </div>
            `;
            return;
        }

        grid.innerHTML = app.wishlist.map(product => app.createProductCardHTML(product)).join('');
    }

    moveToCart(productId) {
        app.addToCart(productId);
        app.toggleWishlist(productId);
        this.renderWishlistView();
    }
}

const wishlistCtrl = new WishlistController();
