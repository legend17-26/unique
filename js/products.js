// js/products.js - ÚNIQVE® Catalog Engine with 100% Guaranteed Image, Name & Specs Synchronization

const DESCRIPTORS = [
    "Aero", "Stealth", "Apex", "Prime", "Pulse", "Zenith", "Titan", "Phantom", 
    "Matrix", "Velocity", "Horizon", "Quantum", "Cipher", "Summit", "Onyx", 
    "Drift", "Vantage", "Echo", "Flux", "Kinetic", "Alpha", "Hyper", "Starlight", 
    "Nordic", "Urban", "Ultra", "Tactical", "Vortex", "Sovereign", "Monolith"
];

const BRAND_PREFIX = "ÚNIQVE";

const SUBCATEGORY_ITEMS = [
    // -------------------------------------------------------------
    // SHOES - RUNNING (18 Items)
    // -------------------------------------------------------------
    {
        category: 'shoes', subcategory: 'running', count: 18,
        titles: ['Speed Runner', 'Glide Cushion Trainer', 'Marathon Flyknit', 'Sprint Motion Runner', 'Trail Blazer Shoe', 'Aero Pace Runner'],
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d17b3070a5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Engineered for distance running with responsive EVA foam cushioning and energy-return tread.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Performance Running Footwear",
            "Upper Material": "Breathable engineered knit mesh",
            "Midsole": "High-rebound EVA foam cushioning",
            "Outsole": "Multi-surface anti-slip rubber tread"
        },
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
        colors: ['Core Black', 'Pure White', 'Charcoal Grey', 'Midnight Navy', 'Crimson Red']
    },

    // -------------------------------------------------------------
    // SHOES - SNEAKERS (18 Items)
    // -------------------------------------------------------------
    {
        category: 'shoes', subcategory: 'sneakers', count: 18,
        titles: ['Low-Top Leather Sneaker', 'Canvas Slip-On Sneaker', 'Retro Street Sneaker', 'Minimalist Leather Sneaker', 'Urban Platform Sneaker', 'Classic Low-Top'],
        images: [
            "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Sleek minimalist sneaker constructed with premium unbranded leather and cushioned footbed.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Lifestyle Casual Sneaker",
            "Upper Material": "Full-grain supple leather",
            "Sole": "Vulcanized rubber cupsole",
            "Insole": "Removable memory foam footbed"
        },
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
        colors: ['Core Black', 'Pure White', 'Tan Brown', 'Navy Blue', 'Olive Green']
    },

    // -------------------------------------------------------------
    // SHOES - TRAINING (17 Items)
    // -------------------------------------------------------------
    {
        category: 'shoes', subcategory: 'training', count: 17,
        titles: ['Cross-Trainer Gym Shoe', 'Stability Workout Shoe', 'Weightlifting Solid Trainer', 'Agility Motion Shoe', 'Core Flex Trainer'],
        images: [
            "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Purpose-built for gym training, cross-fit, and heavy lifting with lateral stability support.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Cross-Training Gym Footwear",
            "Upper Material": "Reinforced ballistic mesh with TPU cage",
            "Heel": "Flat rubber base for lifting traction"
        },
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
        colors: ['Stealth Black', 'Pure White', 'Gunmetal Grey', 'Volt Green']
    },

    // -------------------------------------------------------------
    // SHOES - BASKETBALL (17 Items)
    // -------------------------------------------------------------
    {
        category: 'shoes', subcategory: 'basketball', count: 17,
        titles: ['High-Top Court Shoe', 'Impact Dunk Sneaker', 'Pro Grip Basketball Shoe', 'Ankle Support High-Top', 'Streetball Elite Sneaker'],
        images: [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'High-top basketball silhouette offering high ankle support and high-friction court grip.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Basketball Court Footwear",
            "Support": "Padded high-top collar",
            "Outsole": "Herringbone court traction pattern"
        },
        sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
        colors: ['Black Gold', 'Pure White Red', 'Monochrome Black', 'Royal Blue']
    },

    // -------------------------------------------------------------
    // CLOTHING - HOODIES (18 Items)
    // -------------------------------------------------------------
    {
        category: 'clothing', subcategory: 'hoodies', count: 18,
        titles: ['Heavyweight Fleece Hoodie', 'Tech Shell Zip Hoodie', 'Over-sized Minimal Hoodie', 'Minimalist Crew Hoodie', 'Thermal Ribbed Hoodie'],
        images: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Heavyweight organic fleece hoodie featuring reinforced flatlock seams and double-lined hood.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Premium Heavyweight Hoodie",
            "Fabric Material": "480 GSM 100% Organic Cotton Fleece",
            "Fit": "Relaxed architectural fit",
            "Care": "Machine wash cold, tumble dry low"
        },
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Stealth Black', 'Heather Grey', 'Cream White', 'Charcoal', 'Navy Blue']
    },

    // -------------------------------------------------------------
    // CLOTHING - T-SHIRTS (18 Items)
    // -------------------------------------------------------------
    {
        category: 'clothing', subcategory: 't-shirts', count: 18,
        titles: ['Essential Supima Cotton Tee', 'Performance Crewneck Tee', 'Breathable Gym Tee', 'Heavyweight Drop-Shoulder Tee', 'Classic Minimal Tee'],
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Essential crewneck t-shirt built from soft Supima cotton for ultimate everyday comfort.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Essential Supima Cotton Tee",
            "Fabric Material": "220 GSM 100% Supima Cotton",
            "Seams": "Pre-shrunk double-needle hem",
            "Fit": "Tailored everyday fit"
        },
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Pure White', 'Stealth Black', 'Slate Grey', 'Sand Tan', 'Forest Green']
    },

    // -------------------------------------------------------------
    // CLOTHING - JACKETS (18 Items)
    // -------------------------------------------------------------
    {
        category: 'clothing', subcategory: 'jackets', count: 18,
        titles: ['Windproof Shell Jacket', 'Urban Bomber Jacket', 'Insulated Winter Puffer Jacket', 'Water-Resistant Parka Jacket', 'Lightweight Track Jacket'],
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Technical weatherproof jacket engineered to shield wind and rain without sacrificing breathability.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Technical Weatherproof Outerwear Jacket",
            "Outer Shell": "Water-repellent ripstop nylon",
            "Zippers": "YKK waterproof sealed zippers",
            "Insulation": "Thermal lightweight polyfill"
        },
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Stealth Black', 'Olive Drab', 'Navy Blue', 'Cognac Brown']
    },

    // -------------------------------------------------------------
    // CLOTHING - GYM WEAR (18 Items)
    // -------------------------------------------------------------
    {
        category: 'clothing', subcategory: 'gym-wear', count: 18,
        titles: ['Compression Training Base Layer', 'Ergonomic Sleeveless Tank', 'Athletic Motion Shorts', 'Dry-Fit Performance Vest', 'Seamless Training Top'],
        images: [
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Moisture-wicking athletic gym top engineered for intensive workouts, flexibility, and high mobility.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Performance Athletic Gym Apparel",
            "Fabric Material": "88% Polyester, 12% Elastane Dry-Fit Stretch",
            "Features": "Anti-odor mesh ventilation zones"
        },
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Core Black', 'Heather Grey', 'Volt Yellow', 'Electric Blue']
    },

    // -------------------------------------------------------------
    // CLOTHING - TRACK PANTS (18 Items)
    // -------------------------------------------------------------
    {
        category: 'clothing', subcategory: 'track-pants', count: 18,
        titles: ['Tapered Jogger Pant', 'Technical Cargo Sweatpant', 'Ergonomic Track Pants', 'Fleece Cuffed Sweatpants', 'Ribbed Ankle Jogger Pant'],
        images: [
            "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Ergonomic tapered jogger pant with zippered pockets and adjustable elastic drawstring waist.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Tapered Performance Jogger Sweatpant",
            "Fabric Material": "Premium Cotton-poly stretch fleece",
            "Pockets": "Concealed YKK zippered side pockets"
        },
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Stealth Black', 'Charcoal Grey', 'Dark Navy', 'Olive Green']
    },

    // -------------------------------------------------------------
    // ACCESSORIES - SPORTS WATCHES (13 Items)
    // -------------------------------------------------------------
    {
        category: 'accessories', subcategory: 'sports-watches', count: 13,
        titles: ['Analog Sport Chronograph Watch', 'Tactical Digital Watch', 'OLED Fitness Tracker Watch', 'Stealth Matte Timepiece', 'Stainless Steel Diver Watch'],
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Precision sport timepiece built with a scratch-resistant sapphire crystal and durable silicone strap.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Sport Chronograph Watch Timepiece",
            "Movement": "Japanese Quartz Precision Chronograph",
            "Case Material": "316L Stainless Steel (50m Water Resistant)",
            "Strap": "Flexible fluoroelastomer silicone"
        },
        sizes: ['One Size'],
        colors: ['Stealth Black', 'Brushed Silver', 'Rose Gold', 'Matte Grey']
    },

    // -------------------------------------------------------------
    // ACCESSORIES - BAGS (13 Items)
    // -------------------------------------------------------------
    {
        category: 'accessories', subcategory: 'bags', count: 13,
        titles: ['Utility Tech Backpack', 'Expandable Duffel Bag', 'Waterproof Sling Pack', 'Minimalist Laptop Sleeve', 'Travel Organizer Pouch'],
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Utility backpack featuring dedicated padded laptop compartment and weather-sealed ballistic fabric.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Utility Travel Backpack Bag",
            "Material": "1680D Waterproof Ballistic Nylon",
            "Capacity": "28 Liters (Fits 16-inch Laptop)"
        },
        sizes: ['One Size'],
        colors: ['Core Black', 'Charcoal', 'Army Green']
    },

    // -------------------------------------------------------------
    // ACCESSORIES - CAPS (12 Items)
    // -------------------------------------------------------------
    {
        category: 'accessories', subcategory: 'caps', count: 12,
        titles: ['6-Panel Curved Brim Cap', 'Breathable Performance Visor', 'Tactical Snapback Cap', 'Minimalist Beanie', 'Water-Repellent Bucket Hat'],
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Classic 6-panel athletic cap with moisture-wicking sweatband and adjustable metal strap.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Headwear Athletic Cap",
            "Fabric Material": "100% Breathable Cotton Twill",
            "Closure": "Custom matte metal strap buckle"
        },
        sizes: ['One Size'],
        colors: ['Stealth Black', 'Pure White', 'Navy Blue', 'Olive']
    },

    // -------------------------------------------------------------
    // ACCESSORIES - GYM ESSENTIALS (12 Items)
    // -------------------------------------------------------------
    {
        category: 'accessories', subcategory: 'gym-essentials', count: 12,
        titles: ['Insulated Stainless Steel Bottle', 'Heavy-Duty Lifting Straps', 'Resistance Fitness Band Set', 'Microfiber Sweat Towel', 'Foam Muscle Roller'],
        images: [
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
        ],
        desc: 'Double-wall vacuum insulated stainless steel bottle keeping liquids cold up to 24 hours.',
        specs: {
            "Product Brand": "ÚNIQVE® Original",
            "Product Type": "Gym Essential Accessory Bottle",
            "Material": "18/8 Food-Grade Stainless Steel (BPA Free)",
            "Volume": "32 oz / 950 ml"
        },
        sizes: ['One Size'],
        colors: ['Matte Black', 'Brushed Steel', 'Gold Accent']
    }
];

// Strictly build catalog ensuring 100% match between title, category, subcategory, photo, and specs!
const STORE_PRODUCTS = [];
let itemIndexCounter = 1;

SUBCATEGORY_ITEMS.forEach(group => {
    for (let i = 0; i < group.count; i++) {
        const titleType = group.titles[i % group.titles.length];
        const image = group.images[i % group.images.length];
        const descriptor = DESCRIPTORS[itemIndexCounter % DESCRIPTORS.length];
        
        const productName = `${BRAND_PREFIX} ${descriptor} ${titleType}`;
        const price = parseFloat((39 + ((i * 7 + itemIndexCounter * 3) % 210) + 0.99).toFixed(2));
        const rating = parseFloat((4.4 + ((itemIndexCounter % 6) * 0.1)).toFixed(1));

        const customSpecs = Object.assign({}, group.specs, {
            "Model Code": `UNQ-${group.category.toUpperCase().slice(0,3)}-${1000 + itemIndexCounter}`,
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        });

        STORE_PRODUCTS.push({
            id: `unique-product-${itemIndexCounter}`,
            name: productName,
            brand: BRAND_PREFIX,
            category: group.category,
            subcategory: group.subcategory,
            price: price,
            rating: Math.min(5.0, rating),
            image: image,
            sizes: group.sizes,
            colors: group.colors,
            specs: customSpecs,
            description: `${group.desc} The ${productName} combines high-grade construction with minimalist aesthetics. Purpose-built under the ÚNIQVE® brand.`
        });

        itemIndexCounter++;
    }
});

function getProductById(id) {
    return STORE_PRODUCTS.find(p => p.id === id);
}