// js/animations.js - ÚNIQVE® Master GSAP ScrollTrigger & Lenis Smooth Motion Engine

class MotionEngine {
    constructor() {
        this.lenis = null;
        this.initialized = false;
        this.init();
    }

    init() {
        // Run after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.initLenis();
        this.initGSAP();
        this.initMobileDrawer();
        this.initHeroAnimations();
        this.initSectionHeaderAnimations();
        this.initProductScrollAnimations();
        this.initGeneralScrollAnimations();
        this.initialized = true;
    }

    /* 1. Lenis Smooth Scrolling Engine */
    initLenis() {
        if (typeof Lenis === 'undefined') {
            console.warn('Lenis library not detected. Falling back to native scrolling.');
            return;
        }

        try {
            this.lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 1.8
            });

            window.lenis = this.lenis;

            // Connect Lenis with GSAP ScrollTrigger
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                this.lenis.on('scroll', ScrollTrigger.update);
                gsap.ticker.add((time) => {
                    this.lenis.raf(time * 1000);
                });
                gsap.ticker.lagSmoothing(0);
            } else {
                const raf = (time) => {
                    this.lenis.raf(time);
                    requestAnimationFrame(raf);
                };
                requestAnimationFrame(raf);
            }
        } catch (e) {
            console.error('Error initializing Lenis:', e);
        }
    }

    /* 2. GSAP ScrollTrigger Registration */
    initGSAP() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
    }

    /* 3. Side-In Product Block Animations (User Request) */
    initProductScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const productCards = document.querySelectorAll('.product-card:not([data-animated])');
        if (!productCards.length) return;

        // Group cards inside each grid for coordinated entrance
        const grids = document.querySelectorAll('.product-grid');
        
        grids.forEach((grid) => {
            const cards = grid.querySelectorAll('.product-card:not([data-animated])');
            if (!cards.length) return;

            cards.forEach((card, index) => {
                card.setAttribute('data-animated', 'true');
                // Calculate directional offset: alternating left (-75px) and right (+75px)
                const isLeft = index % 2 === 0;
                const xOffset = isLeft ? -75 : 75;

                gsap.fromTo(card, 
                    {
                        opacity: 0,
                        x: xOffset,
                        y: 30,
                        scale: 0.95,
                        filter: 'blur(6px)'
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                        duration: 0.85,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none none',
                            once: true
                        }
                    }
                );
            });
        });

        // Standalone product cards outside .product-grid
        const remainingCards = document.querySelectorAll('.product-card:not([data-animated])');
        remainingCards.forEach((card, index) => {
            card.setAttribute('data-animated', 'true');
            const xOffset = index % 2 === 0 ? -60 : 60;
            gsap.fromTo(card, 
                { opacity: 0, x: xOffset, y: 20 },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        once: true
                    }
                }
            );
        });

        // Refresh ScrollTrigger to ensure accurate trigger coordinates
        ScrollTrigger.refresh();
    }

    /* 4. Hero Section High-Impact Entry */
    initHeroAnimations() {
        if (typeof gsap === 'undefined') return;

        const heroHeading = document.querySelector('.hero-heading, .hero-content h1, .about-hero h1');
        const heroSub = document.querySelector('.hero-subheading, .hero-content p, .about-hero p');
        const heroActions = document.querySelector('.hero-actions');

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (heroHeading) {
            tl.fromTo(heroHeading, 
                { opacity: 0, y: 50, filter: 'blur(8px)' }, 
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, delay: 0.2 }
            );
        }

        if (heroSub) {
            tl.fromTo(heroSub, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.9 }, 
                '-=0.7'
            );
        }

        if (heroActions) {
            tl.fromTo(heroActions, 
                { opacity: 0, y: 25, scale: 0.96 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 
                '-=0.6'
            );
        }
    }

    /* 5. Section Headers & Category Animations */
    initSectionHeaderAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        // Section Titles
        const sectionTitles = document.querySelectorAll('.section-title, header h1, .contact-info-box h2, .contact-form-box h2');
        sectionTitles.forEach((title) => {
            gsap.fromTo(title,
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 88%',
                        once: true
                    }
                }
            );
        });

        // Category Cards (Staggered Side & Scale Entry)
        const categoryCards = document.querySelectorAll('.category-card');
        if (categoryCards.length) {
            categoryCards.forEach((card, index) => {
                const xOffset = index % 2 === 0 ? -50 : 50;
                gsap.fromTo(card,
                    { opacity: 0, x: xOffset, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            once: true
                        }
                    }
                );
            });
        }
    }

    /* 6. General Elements (Value Cards, Feature Boxes, Banner Strips) */
    initGeneralScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        // Value Cards & Feature Cards
        const valueCards = document.querySelectorAll('.value-card, .feature-card');
        if (valueCards.length) {
            gsap.fromTo(valueCards,
                { opacity: 0, y: 40, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.75,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: valueCards[0],
                        start: 'top 85%',
                        once: true
                    }
                }
            );
        }

        // Promo Banner / Call to Action
        const banners = document.querySelectorAll('.promo-banner, .about-container > div:last-child');
        banners.forEach((banner) => {
            gsap.fromTo(banner,
                { opacity: 0, scale: 0.95, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: banner,
                        start: 'top 85%',
                        once: true
                    }
                }
            );
        });
    }

    /* 7. Luxury Mobile Navigation Drawer (Fixing 3 lines icon) */
    initMobileDrawer() {
        this.injectMobileDrawerMarkup();
        this.bindDrawerEvents();
    }

    injectMobileDrawerMarkup() {
        // Upgrade all .mobile-menu-toggle buttons with animated 3-bar hamburger icon
        const toggles = document.querySelectorAll('.mobile-menu-toggle');
        toggles.forEach((toggle) => {
            if (!toggle.querySelector('.hamburger-box')) {
                toggle.innerHTML = `
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                `;
            }
            toggle.setAttribute('aria-label', 'Toggle Navigation Menu');
        });

        if (document.getElementById('mobile-drawer-overlay')) return;

        // Create Backdrop Overlay
        const overlay = document.createElement('div');
        overlay.id = 'mobile-drawer-overlay';
        overlay.className = 'mobile-drawer-overlay';

        // Create Sliding Drawer Panel
        const drawer = document.createElement('div');
        drawer.id = 'mobile-drawer-panel';
        drawer.className = 'mobile-drawer-panel';
        
        // Determine active page
        const currentPage = window.location.pathname.split('/').pop() || 'home.html';

        drawer.innerHTML = `
            <div class="drawer-header">
                <a href="home.html" class="drawer-brand">ÚNIQVE<span style="color:var(--accent-gold, #D4AF37);">®</span></a>
                <button class="drawer-close-btn" id="drawer-close-btn" aria-label="Close Navigation">&times;</button>
            </div>
            <ul class="drawer-links-list">
                <li class="drawer-nav-item"><a href="home.html" class="${currentPage === 'home.html' || currentPage === '' || currentPage === 'index.html' ? 'active' : ''}"><span>Home</span> <span class="item-num">01</span></a></li>
                <li class="drawer-nav-item"><a href="shop.html" class="${currentPage === 'shop.html' ? 'active' : ''}"><span>Shop Catalog</span> <span class="item-num">02</span></a></li>
                <li class="drawer-nav-item"><a href="men.html" class="${currentPage === 'men.html' ? 'active' : ''}"><span>Men's Vault</span> <span class="item-num">03</span></a></li>
                <li class="drawer-nav-item"><a href="women.html" class="${currentPage === 'women.html' ? 'active' : ''}"><span>Women's Vault</span> <span class="item-num">04</span></a></li>
                <li class="drawer-nav-item"><a href="shoes.html" class="${currentPage === 'shoes.html' ? 'active' : ''}"><span>Footwear</span> <span class="item-num">05</span></a></li>
                <li class="drawer-nav-item"><a href="clothing.html" class="${currentPage === 'clothing.html' ? 'active' : ''}"><span>Apparel</span> <span class="item-num">06</span></a></li>
                <li class="drawer-nav-item"><a href="accessories.html" class="${currentPage === 'accessories.html' ? 'active' : ''}"><span>Accessories</span> <span class="item-num">07</span></a></li>
                <li class="drawer-nav-item"><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}"><span>Our Story</span> <span class="item-num">08</span></a></li>
                <li class="drawer-nav-item"><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}"><span>Concierge</span> <span class="item-num">09</span></a></li>
            </ul>
            <div class="drawer-actions">
                <div class="drawer-quick-icons">
                    <button onclick="app.toggleTheme()" title="Toggle Theme">🌙</button>
                    <a href="search.html" title="Search Store">🔍</a>
                    <a href="wishlist.html" title="Saved Favorites">❤️</a>
                    <a href="cart.html" title="Shopping Bag">🛒</a>
                    <a href="profile.html" title="Client Portal">👤</a>
                </div>
                <p class="drawer-footer-note">&copy; 2026 ÚNIQVE Global Inc. All rights reserved.</p>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(drawer);
    }

    bindDrawerEvents() {
        const overlay = document.getElementById('mobile-drawer-overlay');
        const drawer = document.getElementById('mobile-drawer-panel');
        const closeBtn = document.getElementById('drawer-close-btn');
        const toggles = document.querySelectorAll('.mobile-menu-toggle');

        let isLocked = false;

        const openDrawer = () => {
            if (!drawer || !overlay) return;
            toggles.forEach(t => t.classList.add('is-active'));
            overlay.classList.add('active');
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (this.lenis && typeof this.lenis.stop === 'function') {
                this.lenis.stop();
            }

            // Staggered GSAP reveal for drawer navigation links
            if (typeof gsap !== 'undefined') {
                gsap.fromTo('.drawer-nav-item', 
                    { x: 35, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out', overwrite: 'auto' }
                );
            }
        };

        const closeDrawer = () => {
            if (!drawer || !overlay) return;
            toggles.forEach(t => t.classList.remove('is-active'));
            overlay.classList.remove('active');
            drawer.classList.remove('active');
            document.body.style.overflow = '';
            if (this.lenis && typeof this.lenis.start === 'function') {
                this.lenis.start();
            }
        };

        const toggleDrawer = () => {
            if (isLocked) return;
            isLocked = true;
            setTimeout(() => { isLocked = false; }, 250);

            if (drawer && drawer.classList.contains('active')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        };

        // Attach unified click listener to all toggle buttons on page
        toggles.forEach((toggle) => {
            toggle.onclick = (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                toggleDrawer();
            };
        });

        if (closeBtn) {
            closeBtn.onclick = (e) => {
                if (e) e.preventDefault();
                closeDrawer();
            };
        }

        if (overlay) {
            overlay.onclick = (e) => {
                if (e) e.preventDefault();
                closeDrawer();
            };
        }

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
                closeDrawer();
            }
        });

        // Close when clicking any nav link inside drawer
        if (drawer) {
            const navLinks = drawer.querySelectorAll('.drawer-nav-item a, .drawer-quick-icons a');
            navLinks.forEach((link) => {
                link.onclick = () => {
                    closeDrawer();
                };
            });
        }

        // Expose globally to window
        window.openMobileMenu = openDrawer;
        window.closeMobileMenu = closeDrawer;
        window.toggleMobileMenu = toggleDrawer;
    }
}

// Global instance & refresh helper
const motion = new MotionEngine();
window.motionEngine = motion;

// Global hook to refresh animations on dynamic content load (e.g. filter/search/render)
window.refreshAnimations = function() {
    setTimeout(() => {
        motion.initProductScrollAnimations();
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 50);
};
