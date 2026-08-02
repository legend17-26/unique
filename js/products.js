// js/products.js - ÚNIQVE® Master Product Database
// Curated Luxury Catalog with 100% Unique Products, Unique Photos, Unique Specifications, and Dedicated Sizes & Colors

const RAW_PRODUCTS_DATA = [
    // =========================================================================
    // FOOTWEAR - RUNNING SHOES
    // =========================================================================
    {
        name: "ÚNIQVE Velocity Carbon Runner Pro",
        category: "shoes",
        subcategory: "running",
        price: 189.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 12"],
        colors: ["Crimson Red", "Obsidian Black", "Pure White"],
        specs: {
            "Product Type": "Elite Carbon Plate Running Shoe",
            "Upper Material": "Ultralight Matrix Engineered Knit",
            "Midsole": "Supercritical Nitrogen EVA Foam",
            "Carbon Plate": "Full-Length Curved Carbon Fiber",
            "Weight": "198g (Men's US 9)",
            "Drop": "8mm",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Engineered for marathon pacing with an ultralight carbon fiber plate and supercritical rebound foam. Maximizes energy return with every stride."
    },
    {
        name: "ÚNIQVE Aero Glide Cloud Trainer",
        category: "shoes",
        subcategory: "running",
        price: 154.50,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Cloud White", "Ice Blue", "Volt Neon"],
        specs: {
            "Product Type": "Max Cushion Road Running Shoe",
            "Upper Material": "Seamless Monomesh Breathable Yarn",
            "Cushioning": "Dual-Density Cloud Cushion Base",
            "Outsole": "DuraGrip High-Abrasion Rubber",
            "Drop": "10mm",
            "Weight": "235g",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Supreme road-running comfort featuring max-stack foam pods and seamless yarn upper designed for high-mileage recovery runs."
    },
    {
        name: "ÚNIQVE Phantom Apex Stealth Runner",
        category: "shoes",
        subcategory: "running",
        price: 169.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7.5", "US 8", "US 8.5", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Matte Black", "Gunmetal Grey", "Cyber Orange"],
        specs: {
            "Product Type": "Speed & Tempo Performance Shoe",
            "Upper Material": "Ripstop Aerodynamic Weave",
            "Midsole": "High-Response Propulsive Foam",
            "Tread": "Multi-Surface Wet/Dry Traction",
            "Weight": "210g",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Sleek aerodynamic runner designed for fast tempo runs, sprints, and speed training with locked-down midfoot stability."
    },
    {
        name: "ÚNIQVE Horizon Trail Gore-Tex Pro",
        category: "shoes",
        subcategory: "running",
        price: 198.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1608231387042-66d17b3070a5?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 10.5", "US 11", "US 12"],
        colors: ["Earth Olive", "Desert Tan", "Shadow Black"],
        specs: {
            "Product Type": "All-Terrain Waterproof Trail Runner",
            "Upper Material": "Gore-Tex Invisible Fit Waterproof Membrane",
            "Lugs": "5mm Vibram Megagrip Lug Geometry",
            "Rock Plate": "Flexible Forefoot Rock Shield",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Conquer rugged terrain and wet alpine conditions with waterproof Gore-Tex barrier and aggressive high-traction lugs."
    },
    {
        name: "ÚNIQVE Pulse React Flyknit Runner",
        category: "shoes",
        subcategory: "running",
        price: 139.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
        colors: ["Electric Gold", "Triple White", "Navy Blue"],
        specs: {
            "Product Type": "Daily Training Road Runner",
            "Upper Material": "Adaptive Stretch Flyknit Mesh",
            "Insole": "Ortholite High-Rebound Sockliner",
            "Outsole": "Blown Rubber Outsole",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Adaptive knit upper molds comfortably to the foot, delivering breathable airflow and cushioned response for every everyday run."
    },
    {
        name: "ÚNIQVE Kinetic Pace Lightweight Trainer",
        category: "shoes",
        subcategory: "running",
        price: 145.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Charcoal Grey", "Signal Coral", "Midnight Blue"],
        specs: {
            "Product Type": "Lightweight Distance Runner",
            "Upper Material": "Ultralight Monofilament Mesh",
            "Cushioning": "Kinetic Bounce Dual-Foam",
            "Weight": "195g",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Featherweight construction with responsive kinetic bounce geometry, built for high cadence and effortless speed."
    },

    // =========================================================================
    // FOOTWEAR - LIFESTYLE SNEAKERS
    // =========================================================================
    {
        name: "ÚNIQVE Minimalist White Leather Court",
        category: "shoes",
        subcategory: "sneakers",
        price: 165.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
        colors: ["Chalk White", "Off-White / Gum", "Triple Black"],
        specs: {
            "Product Type": "Luxury Minimalist Leather Sneaker",
            "Upper Material": "Full-Grain Italian Calfskin Leather",
            "Lining": "Soft Vachetta Natural Leather",
            "Sole": "Stitched Margom Rubber Cupsole",
            "Insole": "Removable Memory Foam Footbed",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Handcrafted silhouette featuring buttery-soft Italian leather, understated gold foil branding, and a timeless low-profile aesthetic."
    },
    {
        name: "ÚNIQVE Retro 90s Street High-Top",
        category: "shoes",
        subcategory: "sneakers",
        price: 175.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Vintage Royal Blue", "Shadow Grey", "Varsity Red"],
        specs: {
            "Product Type": "Heritage Streetwear High-Top Sneaker",
            "Upper Material": "Layered Suede and Nappa Leather",
            "Collar": "Padded Ankle Support Cushion",
            "Outsole": "Vintage Gum Rubber Pivot Sole",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "A throwback 90s streetwear icon upgraded with heavy-gauge suede, contrast panels, and cushioned ankle support."
    },
    {
        name: "ÚNIQVE Urban Suede Low-Top Derby",
        category: "shoes",
        subcategory: "sneakers",
        price: 158.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7.5", "US 8", "US 9", "US 10", "US 10.5", "US 11", "US 12"],
        colors: ["Tobacco Tan", "Olive Suede", "Slate Grey"],
        specs: {
            "Product Type": "Casual Suede Low-Top Sneaker",
            "Upper Material": "Velvety Waterproofed Suede",
            "Footbed": "Cork Layer Temperature Regulating Insole",
            "Sole": "Vulcanized Natural Rubber",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Versatile smart-casual sneaker offering silky brushed suede, tonal wax laces, and cork footbed that shapes to your foot over time."
    },
    {
        name: "ÚNIQVE Monolith Chunky Platform Sneaker",
        category: "shoes",
        subcategory: "sneakers",
        price: 185.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
        colors: ["Monochrome Cream", "Pitch Black", "Steel Grey"],
        specs: {
            "Product Type": "Architectural Platform Fashion Sneaker",
            "Upper Material": "Multi-Layered Ballistic Textile & Leather",
            "Midsole": "Sculpted EVA Chunky Platform",
            "Height Lift": "+4.5 cm",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Futuristic statement sneaker engineered with an ultra-light chunky platform and multi-textured tonal overlays."
    },
    {
        name: "ÚNIQVE Canvas Street Deck Sneaker",
        category: "shoes",
        subcategory: "sneakers",
        price: 95.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Natural Raw Ecru", "Washed Black", "Forest Green"],
        specs: {
            "Product Type": "Vulcanized Canvas Deck Shoe",
            "Upper Material": "14oz Heavy Organic Cotton Canvas",
            "Eyelets": "Matte Aluminum Hardware",
            "Outsole": "Herringbone Siped Grip Sole",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Classic effortless silhouette crafted from durable organic canvas with reinforced stitching for daily skate and city walking."
    },

    // =========================================================================
    // FOOTWEAR - CROSS TRAINING & GYM
    // =========================================================================
    {
        name: "ÚNIQVE Apex Solid Base Lifter",
        category: "shoes",
        subcategory: "training",
        price: 199.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
        colors: ["Stealth Black / Gold", "Pure White", "Gunmetal"],
        specs: {
            "Product Type": "Olympic Weightlifting & Powerlifting Shoe",
            "Heel Drop": "20mm Elevated TPU Wedge",
            "Lockdown": "Dual Metatarsal Heavy Velcro Straps",
            "Outsole": "Wide Non-Compressible Flat Base",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Engineered for maximum power transfer during squats, snatches, and cleans with rock-solid TPU heel base and dual lockdown straps."
    },
    {
        name: "ÚNIQVE Metcon Flex Cross-Trainer",
        category: "shoes",
        subcategory: "training",
        price: 148.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Volt Neon", "Blackout", "Slate Grey"],
        specs: {
            "Product Type": "Functional Fitness & HIIT Cross-Trainer",
            "Upper Material": "Kevlar-Infused Abrasion-Resistant Mesh",
            "Rope Wrap": "High-Friction Midfoot Rubber Wrap",
            "Drop": "4mm Minimal Drop",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Built to withstand brutal workouts, rope climbs, box jumps, and burpees with Kevlar-reinforced sidewalls."
    },
    {
        name: "ÚNIQVE Agility Pro Studio Trainer",
        category: "shoes",
        subcategory: "training",
        price: 129.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
        colors: ["Chalk Grey", "Soft Mauve", "Midnight Navy"],
        specs: {
            "Product Type": "Studio & Agility Movement Shoe",
            "Upper Material": "Breathable 4-Way Stretch Sock-Fit Mesh",
            "Flex Grooves": "Omni-Directional Siped Sole",
            "Weight": "180g",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Sock-like comfort designed for lateral agility, calisthenics, dance, and studio cardio sessions."
    },

    // =========================================================================
    // FOOTWEAR - BASKETBALL
    // =========================================================================
    {
        name: "ÚNIQVE Court Dominator High-Top Pro",
        category: "shoes",
        subcategory: "basketball",
        price: 189.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 12", "US 13"],
        colors: ["Royal Black / Gold", "Chicago Red / White", "Shadow Black"],
        specs: {
            "Product Type": "Performance Basketball High-Top",
            "Ankle Collar": "Molded Memory Foam High-Top Collar",
            "Cushioning": "Zoom Spring Nitro Forefoot & Heel Units",
            "Outsole": "Multi-Directional Herringbone Court Grip",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Maximum ankle lockdown and explosive bounce on hardwood courts. Features dual nitro-cushion pods for high-flying dunks."
    },
    {
        name: "ÚNIQVE Streetball Elite Mid-Cut Sneaker",
        category: "shoes",
        subcategory: "basketball",
        price: 165.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 7.5", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Asphalt Grey", "Laser Orange", "Arctic White"],
        specs: {
            "Product Type": "Outdoor & Concrete Court Basketball Shoe",
            "Outsole": "Extra-Thick XDR High-Durability Rubber",
            "Upper Material": "Ballistic Ripstop with TPU Lateral Cage",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Purpose-built for outdoor asphalt blacktops with rugged XDR rubber and reinforced toe cap protection."
    },
    {
        name: "ÚNIQVE Hyper Dunk Flywire Low",
        category: "shoes",
        subcategory: "basketball",
        price: 155.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
        sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["Midnight Blue", "Solar Red", "Pure Black"],
        specs: {
            "Product Type": "Speed Guard Low-Cut Basketball Shoe",
            "Upper Material": "Reinforced Flywire Tension Cable Mesh",
            "Traction": "Radial Pivot Grip",
            "Weight": "310g",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Low-profile agility shoe engineered for quick point guards who slash through defense with razor-sharp cuts."
    },

    // =========================================================================
    // APPAREL - HOODIES & SWEATSHIRTS
    // =========================================================================
    {
        name: "ÚNIQVE 500GSM Heavy French Terry Hoodie",
        category: "clothing",
        subcategory: "hoodies",
        price: 140.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Onyx Black", "Heather Grey", "Vintage Oatmeal", "Midnight Navy"],
        specs: {
            "Product Type": "Luxury Heavyweight Pullover Hoodie",
            "Fabric Weight": "500 GSM 100% Combed Cotton French Terry",
            "Fit": "Structured Relaxed Boxy Fit",
            "Hood": "Double-Layered Structured Hood (No Drawstrings)",
            "Ribbing": "Heavy 2x2 Rib Spandex Cuffs",
            "Origin": "Made in Portugal",
            "Warranty": "Lifetime Seam Guarantee"
        },
        description: "The pinnacle of luxury streetwear. Crafted from 500GSM heavyweight French terry with seamless shoulders and a structured double-layer hood."
    },
    {
        name: "ÚNIQVE Vintage Washed Oversized Hoodie",
        category: "clothing",
        subcategory: "hoodies",
        price: 125.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Washed Charcoal", "Faded Sage", "Dusty Clay"],
        specs: {
            "Product Type": "Sun-Bleached Pigment Dyed Hoodie",
            "Fabric": "440 GSM Organic Cotton Fleece",
            "Wash Effect": "Custom Hand-Distressed Acid Wash",
            "Fit": "Drop-Shoulder Oversized Silhouette",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Individually garment-dyed with mineral wash for a unique vintage patina and ultra-soft broken-in feel from day one."
    },
    {
        name: "ÚNIQVE Stealth Tech Fleece Zip Hoodie",
        category: "clothing",
        subcategory: "hoodies",
        price: 135.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Matte Black", "Space Grey", "Olive Drab"],
        specs: {
            "Product Type": "Engineered Performance Tech Zip-Up",
            "Material": "Double-Knit Thermal Spacer Fleece",
            "Zippers": "YKK Aquaguard Matte Waterproof Zippers",
            "Pockets": "Laser-Cut Bonded Chest & Sleeve Pockets",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Smooth double-sided spacer fleece with articulated ergonomic sleeves and matte taped storm zippers for sleek urban utility."
    },
    {
        name: "ÚNIQVE Minimalist Crewneck Sweatshirt",
        category: "clothing",
        subcategory: "hoodies",
        price: 110.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Pure Sand", "Obsidian Black", "Sage Green"],
        specs: {
            "Product Type": "Classic Drop-Shoulder Crewneck",
            "Fabric": "400 GSM Loopback Cotton",
            "Details": "Embroidered Tonal ÚNIQVE Micro Logo",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Understated elegance featuring substantial loopback cotton, reinforced collar binding, and a clean tailored drape."
    },

    // =========================================================================
    // APPAREL - T-SHIRTS
    // =========================================================================
    {
        name: "ÚNIQVE 280GSM Luxury Heavyweight Tee",
        category: "clothing",
        subcategory: "t-shirts",
        price: 65.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Chalk White", "Pitch Black", "Heather Grey", "Mocha Brown"],
        specs: {
            "Product Type": "Ultra-Heavyweight Drop-Shoulder Tee",
            "Fabric": "280 GSM 100% Long-Staple Combed Cotton",
            "Collar": "Thick 1.25-inch Tight Ribbed Collar",
            "Pre-Shrunk": "Yes, zero wash shrinkage",
            "Origin": "Made in Portugal",
            "Warranty": "Lifetime Seam Guarantee"
        },
        description: "The ultimate heavyweight t-shirt that never loses its shape or bacon-necks. Built with dense 280GSM combed cotton and a high tight collar."
    },
    {
        name: "ÚNIQVE Supima Cotton Relaxed Crewneck",
        category: "clothing",
        subcategory: "t-shirts",
        price: 55.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Pure Black", "Pure White", "Slate Blue"],
        specs: {
            "Product Type": "Silky Soft Supima Cotton Everyday Tee",
            "Material": "100% American Grown Supima Cotton",
            "Feel": "Silky Mercerized Smooth Texture",
            "Fit": "Tailored Relaxed Fit",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Made from rare extra-long staple Supima cotton for unparalleled silk-like drape and breathability against bare skin."
    },
    {
        name: "ÚNIQVE Matrix Graphic Streetwear Tee",
        category: "clothing",
        subcategory: "t-shirts",
        price: 70.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Vintage Black", "Raw Ecru"],
        specs: {
            "Product Type": "Screenprinted Streetwear Heavy Tee",
            "Print Tech": "Soft-Hand Discharge Screenprint",
            "Fabric": "260 GSM Open-End Heavy Cotton",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Features high-concept architectural ÚNIQVE typography screenprinted with breathable soft-hand discharge inks."
    },
    {
        name: "ÚNIQVE Dry-Knit Performance Training Tee",
        category: "clothing",
        subcategory: "t-shirts",
        price: 48.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gunmetal Grey", "Volt Yellow", "Midnight Navy"],
        specs: {
            "Product Type": "Moisture-Wicking Athletic Tee",
            "Material": "88% Recycled Poly / 12% Elastane",
            "Anti-Odor": "Silver-Ion Antimicrobial Infused",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Seamless engineered side panels and silver-ion odor resistance keep you cool and dry during intense cardio."
    },

    // =========================================================================
    // APPAREL - JACKETS & OUTERWEAR
    // =========================================================================
    {
        name: "ÚNIQVE Apex Storm Shell Gore-Tex Jacket",
        category: "clothing",
        subcategory: "jackets",
        price: 295.00,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Obsidian Black", "Glacier White", "Alpine Sage"],
        specs: {
            "Product Type": "3-Layer Waterproof Technical Hardshell",
            "Waterproof Rating": "28,000mm Hydrostatic Head",
            "Breathability": "20,000g/m²/24h RET < 4.5",
            "Seams": "100% Fully Taped Micro-Seams",
            "Zippers": "Waterproof YKK Two-Way Front Zip",
            "Warranty": "Lifetime Weatherproof Guarantee"
        },
        description: "Extreme weatherproof performance with 3-layer Gore-Tex construction, helmet-compatible hood, and articulated storm sleeves."
    },
    {
        name: "ÚNIQVE Tactical MA-1 Flight Bomber",
        category: "clothing",
        subcategory: "jackets",
        price: 220.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Sage Green", "Stealth Black", "Navy Blue"],
        specs: {
            "Product Type": "Insulated Flight Bomber Jacket",
            "Shell": "Heavy Cordura 500D Water-Repellent Nylon",
            "Insulation": "Primaloft Gold 100g Lightweight Thermal",
            "Hardware": "Brushed Antique Brass Heavy Zippers",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Classic military silhouette re-engineered with Cordura ballistic nylon shell and ultra-warm Primaloft Gold thermal fill."
    },
    {
        name: "ÚNIQVE Quilted Down Puffer Overcoat",
        category: "clothing",
        subcategory: "jackets",
        price: 260.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Matte Espresso", "Deep Carbon", "Ivory Cream"],
        specs: {
            "Product Type": "Winter Insulated Puffer Jacket",
            "Fill Power": "800+ RDS Certified White Goose Down",
            "Shell": "Matte Ripstop with DWR Finish",
            "Pockets": "Fleece-Lined Thermal Handwarmer Pockets",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Unrivaled sub-zero warmth featuring 800+ fill power goose down encased in whisper-quiet matte ripstop shell."
    },
    {
        name: "ÚNIQVE Corduroy Overshirt Trucker",
        category: "clothing",
        subcategory: "jackets",
        price: 145.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Camel Brown", "Forest Green", "Charcoal Black"],
        specs: {
            "Product Type": "Heavy Wale Corduroy Layering Jacket",
            "Fabric": "8-Wale 100% Cotton Heavy Corduroy",
            "Buttons": "Custom Engraved Horn Buttons",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Rich textural depth with wide-wale corduroy, dual chest flap pockets, and tailored chore jacket structure."
    },

    // =========================================================================
    // APPAREL - GYM WEAR & COMPRESSION
    // =========================================================================
    {
        name: "ÚNIQVE Armor Seamless Compression Top",
        category: "clothing",
        subcategory: "gym-wear",
        price: 58.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Carbon Black", "Slate Grey", "Crimson"],
        specs: {
            "Product Type": "Targeted Muscle Compression Long Sleeve",
            "Composition": "82% Nylon / 18% Spandex",
            "Compression": "Medium-High 20-25 mmHg",
            "Ventilation": "Knitted Micro-Mesh Heat Zones",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Targeted gradient compression supports chest and deltoid recovery while laser-knit micro pores expel body heat."
    },
    {
        name: "ÚNIQVE Core Athletic Muscle Tank",
        category: "clothing",
        subcategory: "gym-wear",
        price: 42.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Heather Charcoal", "Pure White", "Olive"],
        specs: {
            "Product Type": "Deep Drop Armhole Training Tank",
            "Fabric": "Bamboo Cotton / Spandex Blend",
            "Hem": "Scoop Extended Curved Hem",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Engineered with deep armholes for unrestricted lat movement during heavy bench press and pullups."
    },
    {
        name: "ÚNIQVE Pro Athlete Flex Shorts",
        category: "clothing",
        subcategory: "gym-wear",
        price: 62.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blackout", "Graphite", "Navy"],
        specs: {
            "Product Type": "2-in-1 Compression Liner Training Shorts",
            "Inseam": "5-inch Outer / 7-inch Compression Liner",
            "Pockets": "Hidden Phone Pocket in Inner Liner + Zippered Side Pockets",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "2-in-1 design with built-in anti-chafing compression liner and dedicated bounce-free smartphone storage pocket."
    },

    // =========================================================================
    // APPAREL - TRACK PANTS & JOGGERS
    // =========================================================================
    {
        name: "ÚNIQVE 450GSM Tapered Heavy Joggers",
        category: "clothing",
        subcategory: "track-pants",
        price: 115.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Onyx Black", "Heather Grey", "Washed Clay"],
        specs: {
            "Product Type": "Luxury Heavyweight Tapered Sweatpants",
            "Fabric": "450 GSM 100% French Terry Cotton",
            "Drawstring": "Heavy Round Braided Cotton with Metal Tips",
            "Pockets": "Deep Front Pockets + Zippered Back Wallet Pocket",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Dense loopback cotton sweatpants featuring deep structured pockets, custom metal-tipped drawstrings, and a clean ankle stack."
    },
    {
        name: "ÚNIQVE Cargo Utility Modular Track Pants",
        category: "clothing",
        subcategory: "track-pants",
        price: 135.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Tactical Black", "Desert Khaki", "Dark Olive"],
        specs: {
            "Product Type": "Technical Cargo Track Pants",
            "Material": "Water-Repellent Stretch Dobby Nylon",
            "Cuffs": "Bungee Cinch Adjustable Ankle Cords",
            "Pockets": "6 Ergonomic Utility Pockets",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Six ergonomic utility compartments, water-shedding stretch nylon, and bungee ankle toggles to customize your taper."
    },
    {
        name: "ÚNIQVE Minimalist Tailored Lounge Pants",
        category: "clothing",
        subcategory: "track-pants",
        price: 105.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Taupe Grey", "Jet Black", "Cream"],
        specs: {
            "Product Type": "Straight Leg Casual Lounge Trousers",
            "Fabric": "Viscose / Wool / Elastane Drape Blend",
            "Waistband": "Internal Elastic with Clean Flat Front",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Effortlessly blurs the line between tailored trousers and comfortable lounge pants with fluid drape fabric."
    },

    // =========================================================================
    // ACCESSORIES - SPORTS WATCHES
    // =========================================================================
    {
        name: "ÚNIQVE Chrono Titanium Automatic Watch",
        category: "accessories",
        subcategory: "sports-watches",
        price: 380.00,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        sizes: ["40mm Dial", "42mm Dial", "44mm Dial"],
        colors: ["Matte Titanium / Black", "Brushed Gold / Green", "Raw Silver / Blue"],
        specs: {
            "Product Type": "Automatic Mechanical Chronograph Watch",
            "Case Material": "Grade 5 Aerospace Titanium",
            "Crystal": "Anti-Reflective Double-Domed Sapphire Crystal",
            "Movement": "Japanese NH35 Automatic 24-Jewel (41h Power Reserve)",
            "Water Resistance": "200M / 20 ATM Diver Certified",
            "Strap": "FKM Fluoroelastomer Waterproof Quick-Release Band",
            "Warranty": "5-Year ÚNIQVE® Master Timepiece Warranty"
        },
        description: "Aerospace Grade 5 titanium housing an ultra-accurate 24-jewel automatic movement with scratchproof sapphire crystal and 200M diving capability."
    },
    {
        name: "ÚNIQVE Stealth Blackout Tactical Quartz",
        category: "accessories",
        subcategory: "sports-watches",
        price: 220.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
        sizes: ["42mm Dial"],
        colors: ["All Matte Black", "Black / Gold Accents"],
        specs: {
            "Product Type": "Tactical Field Sports Watch",
            "Case Material": "316L Stainless Steel with PVD Diamond-Like Carbon",
            "Luminescence": "Swiss Super-LumiNova BGW9 Glowing Markers",
            "Water Resistance": "100M / 10 ATM",
            "Warranty": "3-Year ÚNIQVE® Guarantee"
        },
        description: "Monochromatic black DLC finish engineered with Swiss Super-LumiNova markers for high-contrast nighttime readability."
    },
    {
        name: "ÚNIQVE Horizon Carbon Hybrid Smartwatch",
        category: "accessories",
        subcategory: "sports-watches",
        price: 285.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
        sizes: ["44mm Case"],
        colors: ["Forged Carbon", "Silver Armor", "Rose Gold"],
        specs: {
            "Product Type": "Smart Fitness Companion Timepiece",
            "Display": "1.43-inch AMOLED Always-On Retina Screen (1000 Nits)",
            "Sensors": "Optical Heart Rate, SpO2, Sleep & VO2 Max GPS Tracking",
            "Battery Life": "14 Days Typical Usage on Single Charge",
            "Compatibility": "iOS & Android Companion App Sync",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Forged carbon bezel with crisp 1000-nit AMOLED display, continuous biometric tracking, and up to 14 days of battery life."
    },

    // =========================================================================
    // ACCESSORIES - BAGS & BACKPACKS
    // =========================================================================
    {
        name: "ÚNIQVE 45L Waterproof Cordura Duffel",
        category: "accessories",
        subcategory: "bags",
        price: 145.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        sizes: ["45L Standard", "60L Extended"],
        colors: ["Stealth Black", "Military Olive", "Slate Navy"],
        specs: {
            "Product Type": "Waterproof Heavy-Duty Weekender & Gym Bag",
            "Material": "1000D Ballistic Cordura Fabric with TPU Coating",
            "Shoe Compartment": "Dedicated Ventilated Side Shoe Tunnel",
            "Hardware": "Aircraft-Grade Aluminum Duraflex Buckles",
            "Zippers": "YKK Taped Weatherproof Zips",
            "Warranty": "Lifetime Seam Guarantee"
        },
        description: "Indestructible Cordura duffel featuring a ventilated compartment for your shoes, water-tight zippers, and padded backpack convertibility."
    },
    {
        name: "ÚNIQVE Roll-Top Urban Commuter Backpack",
        category: "accessories",
        subcategory: "bags",
        price: 135.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
        sizes: ["25L Capacity"],
        colors: ["Matte Charcoal", "Pitch Black", "Desert Sand"],
        specs: {
            "Product Type": "Weatherproof Roll-Top City Pack",
            "Laptop Sleeve": "Suspended Padded Compartment fits up to 16-inch Mac",
            "Closure": "Fidlock German Magnetic Quick-Release Buckle",
            "Back Panel": "Ergonomic Air-Mesh Channel Padding",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Engineered for daily urban cyclists and tech commuters with Fidlock magnetic closure and suspended laptop protection."
    },
    {
        name: "ÚNIQVE Tactical Crossbody Sling Pack",
        category: "accessories",
        subcategory: "bags",
        price: 75.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
        sizes: ["4.5L Capacity"],
        colors: ["Blackout", "Gunmetal", "Coyote Brown"],
        specs: {
            "Product Type": "Modular EDC Crossbody Chest Bag",
            "Webbing": "Laser-Cut MOLLE Attachment Grid",
            "Security": "RFID-Blocking Internal Passport & Card Sleeve",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Compact EDC sling pack designed to carry your phone, wallet, keys, and sunglasses with rapid magnetic shoulder release."
    },
    {
        name: "ÚNIQVE Minimalist Heavyweight Canvas Tote",
        category: "accessories",
        subcategory: "bags",
        price: 60.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        sizes: ["20L Volume"],
        colors: ["Natural Ecru", "Deep Black", "Sage Green"],
        specs: {
            "Product Type": "Structured Organic Cotton Daily Tote",
            "Fabric": "20oz Heavy Double-Woven Cotton Duck Canvas",
            "Reinforcement": "Riveted Leather Handles",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Substantial 20oz canvas tote with riveted leather straps, snap closure, and interior zippered organizer pocket."
    },

    // =========================================================================
    // ACCESSORIES - CAPS & HEADWEAR
    // =========================================================================
    {
        name: "ÚNIQVE 5-Panel Water-Repellent Camp Cap",
        category: "accessories",
        subcategory: "caps",
        price: 45.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
        sizes: ["Adjustable One Size"],
        colors: ["Matte Black", "Olive Green", "Sand Khaki"],
        specs: {
            "Product Type": "Low-Profile 5-Panel Technical Cap",
            "Fabric": "DWR Coated Quick-Dry Taslan Nylon",
            "Strap": "Nylon Webbing with Low-Profile Clip",
            "Visor": "Flexible Semi-Curved Brim",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Low-profile silhouette crafted from water-shedding Taslan nylon with breathable side eyelets and custom metal clip closure."
    },
    {
        name: "ÚNIQVE Laser-Perforated Performance Snapback",
        category: "accessories",
        subcategory: "caps",
        price: 48.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80",
        sizes: ["Adjustable Snapback"],
        colors: ["Triple Black", "Chalk White", "Navy Blue"],
        specs: {
            "Product Type": "Breathable Athletic Running & Golf Hat",
            "Vents": "Laser-Cut Micro Ventilation Back Panels",
            "Sweatband": "Moisture-Absorbing Terry Cloth Band",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Laser-cut ventilation holes provide continuous airflow, keeping you cool during marathon workouts and sunny training days."
    },
    {
        name: "ÚNIQVE 100% Merino Wool Ribbed Beanie",
        category: "accessories",
        subcategory: "caps",
        price: 52.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
        sizes: ["One Size"],
        colors: ["Charcoal Heather", "Oatmeal Beige", "Deep Navy", "Rust Orange"],
        specs: {
            "Product Type": "Warm Rib-Knit Watch Cap Beanie",
            "Material": "100% Extra-Fine Australian Merino Wool",
            "Knit": "7-Gauge Heavy Rib Structure",
            "Non-Itch": "Zero itch, ultra-soft hand feel",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Spun from superfine non-itch Merino wool that naturally regulates body heat and resists odors in cold alpine climates."
    },

    // =========================================================================
    // ACCESSORIES - GYM ESSENTIALS
    // =========================================================================
    {
        name: "ÚNIQVE 32oz Insulated Hydro Vessel",
        category: "accessories",
        subcategory: "gym-essentials",
        price: 42.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        sizes: ["32 oz / 950 ml", "40 oz / 1200 ml"],
        colors: ["Matte Black Powdercoat", "Brushed Stainless", "Gold Accent"],
        specs: {
            "Product Type": "Vacuum Insulated Stainless Steel Bottle",
            "Insulation": "TempShield Double-Wall Vacuum Barrier",
            "Thermal Rating": "Cold for 24 Hours / Hot for 12 Hours",
            "Steel": "Pro-Grade 18/8 Stainless Steel (100% BPA Free)",
            "Lid": "Leakproof Chug Cap with Silicone Finger Loop",
            "Warranty": "Lifetime Replacement Guarantee"
        },
        description: "Double-wall vacuum insulation keeps ice frozen for 24+ hours. Coated in sweat-free matte powdercoat with a leakproof spout lid."
    },
    {
        name: "ÚNIQVE Pro Lifting Straps & Figure-8 Grips",
        category: "accessories",
        subcategory: "gym-essentials",
        price: 28.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard Pro Size"],
        colors: ["Obsidian Black / Gold", "Military Green"],
        specs: {
            "Product Type": "Heavy-Duty Deadlift & Pulling Straps",
            "Material": "Heavy Dual-Layer Cotton Webbing with Neoprene Wrist Padding",
            "Capacity": "Tested to 1,000+ lbs barbell load",
            "Warranty": "Lifetime Durability Guarantee"
        },
        description: "Eliminate grip fatigue during heavy deadlifts and barbell shrugs with thick neoprene wrist padding and heavy-duty webbing."
    },
    {
        name: "ÚNIQVE High-Density Textured Foam Muscle Roller",
        category: "accessories",
        subcategory: "gym-essentials",
        price: 36.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
        sizes: ["18-inch Length"],
        colors: ["Matte Black Matrix", "Slate Blue"],
        specs: {
            "Product Type": "Deep Tissue Trigger Point Recovery Roller",
            "Core": "Rigid Hollow Core with Molded EVA Surface Nodules",
            "Density": "Extra Firm for Myofascial Release",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Target knots and tight muscle tissue with multi-density surface ridges that replicate a massage therapist's fingertips."
    },
    {
        name: "ÚNIQVE Pro Bearing Speed Jump Rope",
        category: "accessories",
        subcategory: "gym-essentials",
        price: 32.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
        sizes: ["10ft Adjustable Cable"],
        colors: ["Metallic Gold / Black", "Crimson Red"],
        specs: {
            "Product Type": "360-Degree Ball Bearing Speed Rope",
            "Cable": "2.5mm TPU Coated Steel Wire Cable",
            "Handles": "Knurled Aircraft Aluminum Anti-Slip Handles",
            "Warranty": "2-Year ÚNIQVE® Guarantee"
        },
        description: "Ultra-smooth dual 360-degree ball bearings designed for blistering double-unders and high-speed cardio conditioning."
    }
];

// Map every unique product with permanent ID and formatted specs
const STORE_PRODUCTS = RAW_PRODUCTS_DATA.map((item, index) => {
    const idNum = index + 1;
    const catCode = item.category.slice(0, 3).toUpperCase();
    const modelCode = `UNQ-${catCode}-${String(1000 + idNum)}`;

    const mergedSpecs = Object.assign({
        "Model Code": modelCode,
        "Brand": "ÚNIQVE® Original"
    }, item.specs);

    return {
        id: `unique-product-${idNum}`,
        name: item.name,
        brand: "ÚNIQVE®",
        category: item.category,
        subcategory: item.subcategory,
        price: item.price,
        rating: item.rating,
        image: item.image,
        sizes: item.sizes,
        colors: item.colors,
        specs: mergedSpecs,
        description: item.description
    };
});

function getProductById(id) {
    return STORE_PRODUCTS.find(p => p.id === id);
}