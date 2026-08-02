// js/search.js - ÚNIQVE® Real-Time Live Search Engine

class SearchController {
    renderSearchResults(query = "") {
        const grid = document.getElementById('search-results-grid');
        if (!grid) return;

        const cleanQuery = query.toLowerCase().trim();
        const results = STORE_PRODUCTS.filter(product => 
            product.name.toLowerCase().includes(cleanQuery) || 
            product.category.toLowerCase().includes(cleanQuery) ||
            product.subcategory.toLowerCase().includes(cleanQuery) ||
            product.description.toLowerCase().includes(cleanQuery)
        );

        if (results.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 60px; color:var(--text-muted); font-size:1.1rem;">No matching ÚNIQVE releases found for "${query}".</p>`;
            return;
        }

        grid.innerHTML = results.map(product => app.createProductCardHTML(product)).join('');
        if (typeof window.refreshAnimations === 'function') window.refreshAnimations();
    }

    handleLiveSearch() {
        const query = document.getElementById('live-search-input').value;
        this.renderSearchResults(query);
    }

    setSearchQuery(term) {
        const input = document.getElementById('live-search-input');
        if (input) {
            input.value = term;
            this.renderSearchResults(term);
        }
    }
}

const searchCtrl = new SearchController();
