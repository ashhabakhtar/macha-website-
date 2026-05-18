import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Initial Load Animation
    const tl = gsap.timeline();

    tl.from(".header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.5")
    .from(".hero-image-container", {
        scale: 0.82,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.8")
    .from(".hero-left > *", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=1")
    .from(".hero-right > *", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.8");
    
    // Premium Float & Scroll Parallax for 3D Matcha Bowl Depth
    gsap.to(".hero-image-container", {
        yPercent: 12,
        rotation: 4,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.2 // Smoother scroll dynamics
        }
    });

    // Continuous organic micro-floating animation (creates a subtle 3D hovering depth)
    gsap.to(".hero-image-container img", {
        y: -15,
        rotation: -2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Subtly parallax scroll the 'Best Matcha in Town' Title
    gsap.to(".hero-title", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Starter Kit Section Animation
    gsap.from(".starter-kit-imagery", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".starter-kit-section",
            start: "top 80%",
        }
    });

    gsap.from(".product-callout", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".starter-kit-section",
            start: "top 60%",
        }
    });

    // Benefits Section
    gsap.from(".benefits-headline > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".benefits-section",
            start: "top 80%",
        }
    });

    gsap.from(".benefit-tile", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".benefits-tiles",
            start: "top 80%",
        }
    });

    gsap.from(".benefit-col", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".benefits-bottom",
            start: "top 85%",
        }
    });

    // Product Collection
    gsap.from(".section-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".collection-section",
            start: "top 85%",
        }
    });

    gsap.from(".product-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".dynamic-product-grid",
            start: "top 80%",
        }
    });

    // Essentials Section
    gsap.from(".essential-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".essentials-section",
            start: "top 80%",
        }
    });

    // Footer Section
    gsap.from(".footer-left > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
        }
    });

    gsap.from(".footer-right", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".footer-section",
            start: "top 80%",
        }
    });

    // ==========================================
    // E-COMMERCE ENGINE & INTERACTIVITY
    // ==========================================

    // 1. Dynamic Product Catalog Database
    const PRODUCTS = [
        {
            id: "ceremonial-tin-30",
            name: "Ceremonial Matcha Tin (30g)",
            category: "powder",
            categoryLabel: "Ceremonial Grade",
            price: 38.00,
            image: "./matcha_ceremonial.png",
            description: "The highest ceremonial grade matcha sourced from Uji, Kyoto. Extremely smooth with deep, rich umami and a vibrant emerald green hue.",
            benefits: ["100% Organic Stone-Ground Tencha", "Unparalleled Natural Sweetness & Umami", "Perfect for Traditional Preparation"]
        },
        {
            id: "premium-grade-30",
            name: "Premium Grade Matcha (30g)",
            category: "powder",
            categoryLabel: "Premium Grade",
            price: 28.00,
            image: "./matcha_starter_kit.png",
            description: "An exceptional daily-drinking matcha, offering a clean, balanced energy boost. Delightfully smooth with notes of sweet grass and a light creamy finish.",
            benefits: ["Great for Everyday Drinking", "Rich in L-Theanine & Antioxidants", "Sourced Directly from Kyoto Farms"]
        },
        {
            id: "culinary-grade-100",
            name: "Culinary Grade Matcha (100g)",
            category: "powder",
            categoryLabel: "Culinary Grade",
            price: 18.00,
            image: "./hero_matcha_bowl.png",
            description: "A vibrant, bold matcha specifically crafted for cooking, baking, and matcha lattes. Retains its deep flavor and green color even when mixed with other ingredients.",
            benefits: ["Optimal for Baking, Smoothies & Lattes", "Bold, Slightly Astringent Flavor Profile", "High Antioxidant Concentration"]
        },
        {
            id: "organic-hojicha-100",
            name: "Organic Hojicha Powder (100g)",
            category: "powder",
            categoryLabel: "Roasted Green Tea",
            price: 20.00,
            image: "./hojicha_powder.png",
            description: "Slow-roasted green tea powder featuring a toasted, nutty, and naturally sweet caramel-like aroma. Very low in caffeine, making it ideal for relaxing evening lattes.",
            benefits: ["Very Low Caffeine (Child-Friendly)", "Comforting Toasty, Nutty Flavor", "100% Organic Roasted Tencha Leaves"]
        },
        {
            id: "ceramic-chawan",
            name: "Handmade Ceramic Chawan",
            category: "teaware",
            categoryLabel: "Artisanal Ware",
            price: 45.00,
            image: "./matcha_chawan.png",
            description: "Individually handcrafted ceramic bowl with a rustic, earthy dark clay base and a stunning soft green forest glaze. Ergonomically shaped to hold and whisk comfortably.",
            benefits: ["Handmade by Kyoto Artisans", "Rustic Glaze - No Two Bowls Are Identical", "Flat Bottom Ideal for Perfect Whisking"]
        },
        {
            id: "bamboo-chasen",
            name: "Golden Bamboo Chasen (Whisk)",
            category: "teaware",
            categoryLabel: "Premium Utensils",
            price: 18.00,
            image: "./matcha_starter_kit.png",
            description: "Traditional 100-prong whisk crafted from a single piece of premium golden bamboo. Essential for creating the signature silky, velvety matcha froth.",
            benefits: ["100 Prongs for Maximum Froth", "Crafted from Sustainable Golden Bamboo", "Traditional Japanese Tea Tool"]
        },
        {
            id: "ceramic-whisk-stand",
            name: "Ceramic Whisk Stand",
            category: "teaware",
            categoryLabel: "Teaware Essentials",
            price: 12.00,
            image: "./whisk_stand.png",
            description: "An elegant, green-glazed ceramic stand (Kusenaoshi) designed to maintain the curved shape of your bamboo chasen, preventing mold and expanding its lifespan.",
            benefits: ["Preserves Whisk Shape & Curvature", "Earthy Matcha-Green Ceramic Glaze", "Ensures Proper Whisk Ventilation"]
        },
        {
            id: "ultimate-ceremony-kit",
            name: "Ultimate Matcha Ceremony Kit",
            category: "teaware",
            categoryLabel: "Gift Sets",
            price: 75.00,
            image: "./matcha_gift_set.png",
            description: "The complete package for modern matcha rituals. Features a handmade ceramic bowl, a golden bamboo whisk, a ceramic whisk stand, a bamboo scoop, and a 30g tin of Ceremonial Matcha.",
            benefits: ["Complete Ceremony Essentials", "Beautifully Boxed - Perfect for Gifts", "Saves Over 20% Compared to Individual Items"]
        },
        {
            id: "matcha-latte-mix",
            name: "Matcha Latte Mix (250g)",
            category: "blends",
            categoryLabel: "Sweetened Blends",
            price: 22.00,
            image: "./matcha_latte_mix.png",
            description: "A premium blend of micro-ground Japanese matcha and natural unrefined cane sugar. Perfect for quick and delicious iced or hot matcha lattes at home.",
            benefits: ["Naturally Sweetened", "Dissolves Instantly in Milk or Water", "Cafe-Quality Taste at Home"]
        },
        {
            id: "matcha-cake-powder",
            name: "Matcha Pastry Cake Powder",
            category: "blends",
            categoryLabel: "Baking Blends",
            price: 15.00,
            image: "./matcha_cake_powder.png",
            description: "Finely ground organic matcha blended with natural raising agents for light, fluffy, and vibrant green matcha cakes, cookies, and pastries.",
            benefits: ["Vibrant Emerald Baking Color", "Optimized Baking Consistency", "Organic Ingredient Sourcing"]
        },
        {
            id: "sweetened-stick-packs",
            name: "Sweetened Matcha Stick Packs",
            category: "blends",
            categoryLabel: "On-The-Go",
            price: 16.00,
            image: "./matcha_latte_mix.png",
            description: "Convenient single-serve matcha sachets lightly sweetened with pure cane sugar. Pop one in your bag, shake with cold water or milk, and enjoy anywhere, anytime.",
            benefits: ["10 Convenient Single-Serve Packs", "Ideal for Shaker Bottles", "Smooth, Instant Dissolving Formula"]
        },
        {
            id: "modern-electric-frother",
            name: "Modern Electric Matcha Frother",
            category: "teaware",
            categoryLabel: "Modern Tools",
            price: 24.00,
            image: "./matcha_antioxidant.png",
            description: "A high-powered, rechargeable handheld electric frother. Delivers smooth, clump-free matcha in seconds. Features multiple speed settings and a luxurious travel case.",
            benefits: ["Dual-Speed Rechargeable Motor", "Clump-Free Matcha in Under 10 Seconds", "Luxurious Minimal Matte Grip"]
        }
    ];

    // 2. Shopping Cart & Modal Application State
    let cart = JSON.parse(localStorage.getItem("maton-cart")) || [];
    let activeModalProduct = null;

    // DOM Elements Cache
    const gridTarget = document.getElementById("dynamic-product-grid");
    const searchInput = document.getElementById("product-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const cartBtn = document.getElementById("cart-btn");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartCloseBtn = document.getElementById("cart-drawer-close");
    const cartBody = document.getElementById("cart-drawer-body");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartBadgeCount = document.getElementById("cart-badge-count");
    const shippingText = document.getElementById("shipping-text");
    const shippingProgressBar = document.getElementById("shipping-progress-bar");
    const checkoutBtn = document.getElementById("checkout-btn");

    const productModal = document.getElementById("product-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalProductImg = document.getElementById("modal-product-img");
    const modalProductCategory = document.getElementById("modal-product-category");
    const modalProductTitle = document.getElementById("modal-product-title");
    const modalProductPrice = document.getElementById("modal-product-price");
    const modalProductDesc = document.getElementById("modal-product-desc");
    const modalProductBenefitsList = document.getElementById("modal-product-benefits-list");
    const modalQtyVal = document.getElementById("modal-qty-val");
    const modalQtyMinus = document.getElementById("modal-qty-minus");
    const modalQtyPlus = document.getElementById("modal-qty-plus");
    const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");
    const toastContainer = document.getElementById("toast-container");

    // 3. Dynamic Catalog Rendering
    function renderProducts(productsToRender) {
        if (!gridTarget) return;
        
        if (productsToRender.length === 0) {
            gridTarget.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--color-text-dark-muted);">
                    <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 0.5rem;">No products found</h3>
                    <p>Try refining your search terms or selecting another category.</p>
                </div>
            `;
            return;
        }

        gridTarget.innerHTML = productsToRender.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-card-img-wrapper">
                    <span class="product-card-tag">${product.categoryLabel}</span>
                    <img class="product-card-img" src="${product.image}" alt="${product.name}" loading="lazy">
                    <button class="product-card-quickview" title="Quick View" data-id="${product.id}">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
                <div class="product-card-body">
                    <h4 class="product-card-title">${product.name}</h4>
                    <p class="product-card-desc">${product.description}</p>
                    <div class="product-card-footer">
                        <div class="product-card-price">$${product.price.toFixed(2)}</div>
                        <button class="btn-card-add" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join("");

        // Attach listeners for card actions
        document.querySelectorAll(".btn-card-add").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                addToCart(btn.dataset.id);
            });
        });

        document.querySelectorAll(".product-card-quickview").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                openProductModal(btn.dataset.id);
            });
        });

        document.querySelectorAll(".product-card").forEach(card => {
            card.addEventListener("click", () => {
                openProductModal(card.dataset.id);
            });
        });
    }

    // 4. Product Catalog Filter & Search Logic
    let activeCategory = "all";
    let activeSearchQuery = "";

    function filterAndSearchProducts() {
        const filtered = PRODUCTS.filter(product => {
            const matchesCategory = activeCategory === "all" || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
                                  product.description.toLowerCase().includes(activeSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        renderProducts(filtered);
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value;
            filterAndSearchProducts();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category;
            filterAndSearchProducts();
        });
    });

    // 5. Toast Notifications
    function showToast(message) {
        if (!toastContainer) return;
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `
            <span class="toast-success-icon">✓</span>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);
        
        // Remove from DOM after animations complete
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // 6. Cart Management Logic
    function toggleCart(forceState = null) {
        const isOpen = forceState !== null ? forceState : !cartDrawer.classList.contains("open");
        
        if (isOpen) {
            cartDrawer.classList.add("open");
            cartOverlay.classList.add("open");
            document.body.style.overflow = "hidden"; // Prevent background scroll
        } else {
            cartDrawer.classList.remove("open");
            cartOverlay.classList.remove("open");
            document.body.style.overflow = ""; // Re-enable scroll
        }
    }

    if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleCart(true);
        });
    }

    if (cartCloseBtn) cartCloseBtn.addEventListener("click", () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCart(false));

    function saveCart() {
        localStorage.setItem("maton-cart", JSON.stringify(cart));
        updateCartUI();
    }

    function addToCart(productId, qty = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const cartItemIndex = cart.findIndex(item => item.product.id === productId);
        
        if (cartItemIndex > -1) {
            cart[cartItemIndex].quantity += qty;
        } else {
            cart.push({ product, quantity: qty });
        }
        
        saveCart();
        showToast(`${product.name} added to cart!`);

        // Visual feedback on Cart header link
        if (cartBadgeCount) {
            cartBadgeCount.classList.remove("badgePulse");
            void cartBadgeCount.offsetWidth; // Trigger reflow
            cartBadgeCount.classList.add("badgePulse");
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.product.id !== productId);
        saveCart();
    }

    function updateCartQuantity(productId, delta) {
        const cartItemIndex = cart.findIndex(item => item.product.id === productId);
        if (cartItemIndex === -1) return;

        cart[cartItemIndex].quantity += delta;
        
        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
        }
        
        saveCart();
    }

    function updateCartUI() {
        if (!cartBody) return;

        // Update Cart Badge Count
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartBadgeCount) {
            if (totalItemsCount > 0) {
                cartBadgeCount.textContent = totalItemsCount;
                cartBadgeCount.style.display = "flex";
            } else {
                cartBadgeCount.style.display = "none";
            }
        }

        // Render Cart Items
        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-empty-state">
                    <div class="cart-empty-icon">🛒</div>
                    <h4>Your Cart is Empty</h4>
                    <p>Discover our premium organic matcha products and gear up your daily wellness ritual.</p>
                </div>
            `;
            cartSubtotal.textContent = "$0.00";
            shippingText.innerHTML = "Add <strong>$50.00</strong> more for Free Shipping!";
            shippingProgressBar.style.width = "0%";
            return;
        }

        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.product.name}</h5>
                    <div class="cart-item-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn btn-qty-minus" data-id="${item.product.id}">-</button>
                        <span style="font-weight:600;">${item.quantity}</span>
                        <button class="qty-btn btn-qty-plus" data-id="${item.product.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-delete" data-id="${item.product.id}" title="Remove Item">&times;</button>
            </div>
        `).join("");

        // Calculate Subtotal & Shipping Progress
        const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

        const shippingThreshold = 50.00;
        const progress = Math.min((subtotal / shippingThreshold) * 100, 100);
        shippingProgressBar.style.width = `${progress}%`;

        if (subtotal >= shippingThreshold) {
            shippingText.innerHTML = "🎉 Congratulations! You qualify for <strong>FREE Shipping!</strong>";
        } else {
            const remainder = shippingThreshold - subtotal;
            shippingText.innerHTML = `Add <strong>$${remainder.toFixed(2)}</strong> more for FREE Shipping!`;
        }

        // Attach quantity and delete buttons events
        document.querySelectorAll(".btn-qty-minus").forEach(btn => {
            btn.addEventListener("click", () => updateCartQuantity(btn.dataset.id, -1));
        });

        document.querySelectorAll(".btn-qty-plus").forEach(btn => {
            btn.addEventListener("click", () => updateCartQuantity(btn.dataset.id, 1));
        });

        document.querySelectorAll(".cart-item-delete").forEach(btn => {
            btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
        });
    }

    // 7. Checkout Trigger Animation
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            checkoutBtn.textContent = "Processing order...";
            checkoutBtn.disabled = true;
            
            setTimeout(() => {
                toggleCart(false);
                showToast("Order Placed Successfully! Check your email.");
                cart = [];
                saveCart();
                checkoutBtn.textContent = "Proceed to Checkout";
                checkoutBtn.disabled = false;
            }, 1800);
        });
    }

    // 8. Product Details Quick-View Modal Logic
    let modalQuantity = 1;

    function openProductModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        activeModalProduct = product;
        modalQuantity = 1; // Reset quantity on open

        // Populating Modal Data
        modalProductImg.src = product.image;
        modalProductImg.alt = product.name;
        modalProductCategory.textContent = product.categoryLabel;
        modalProductTitle.textContent = product.name;
        modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
        modalProductDesc.textContent = product.description;
        modalQtyVal.textContent = modalQuantity;

        modalProductBenefitsList.innerHTML = product.benefits.map(benefit => `
            <div class="modal-benefit-item">
                <span class="modal-benefit-bullet"></span>
                <span>${benefit}</span>
            </div>
        `).join("");

        productModal.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeProductModal() {
        productModal.classList.remove("open");
        document.body.style.overflow = "";
        activeModalProduct = null;
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) closeProductModal();
        });
    }

    if (modalQtyMinus) {
        modalQtyMinus.addEventListener("click", () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                modalQtyVal.textContent = modalQuantity;
            }
        });
    }

    if (modalQtyPlus) {
        modalQtyPlus.addEventListener("click", () => {
            modalQuantity++;
            modalQtyVal.textContent = modalQuantity;
        });
    }

    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener("click", () => {
            if (activeModalProduct) {
                addToCart(activeModalProduct.id, modalQuantity);
                closeProductModal();
            }
        });
    }

    // Initial Dynamic Grid Render and Cart Update on Page Load
    renderProducts(PRODUCTS);
    updateCartUI();
});
