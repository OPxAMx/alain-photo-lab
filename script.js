document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".subnav-item");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            // Reset onglets
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Active le bon onglet
            tab.classList.add("active");
            contents[index].classList.add("active");
        });
    });

    // --- SYSTEME DE COMPETENCES ---
    const skillItems = document.querySelectorAll(".skill-item");
    const title = document.getElementById("skill-title");
    const desc = document.getElementById("skill-description");

    const skills = {
        "P": {
            title: "Tir Givrant",
            desc: "Les attaques d'Ashe ralentissent les ennemis et infligent des dégâts supplémentaires."
        },
        "A": {
            title: "Concentration du Ranger",
            desc: "Ashe génère des effets Concentration quand elle attaque. Une fois le maximum atteint, elle peut lancer Concentration du ranger pour augmenter sa vitesse d'attaque et tirer une volée de flèches."
        },
        "Z": {
            title: "Salve",
            desc: "Ashe tire plusieurs flèches en cône, infligeant des dégâts et appliquant son ralentissement."
        },
        "E": {
            title: "Faucon",
            desc: "Ashe envoie un esprit de faucon qui révèle la zone survolée."
        },
        "R": {
            title: "Flèche de Cristal Enchantée",
            desc: "Ashe tire une flèche géante qui étourdit le premier ennemi touché et inflige des dégâts."
        }
    };

    skillItems.forEach(item => {
        item.addEventListener("click", () => {

            skillItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const key = item.dataset.skill;
            title.textContent = skills[key].title;
            desc.textContent = skills[key].desc;
        });
    });

});


function setMasteryProgress(percent) {
    const circle = document.querySelector(".progress-ring-fill");
    const text = document.getElementById("circle-percent");

    const radius = 72;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (percent / 100) * circumference;

    circle.style.strokeDashoffset = offset;
    text.textContent = percent + "%";
}

// Exemple : 72% vers maîtrise 6
setMasteryProgress(72);



// Exemple : BADGES MASTERY

const badges = [
    { name: "Maîtrise 6", img: "https://3.bp.blogspot.com/-qWTkMydHHDk/Wd0almOIOWI/AAAAAAAAw_s/yV4HklRACCEBiANFGJjwLWU5fardl-KlwCLcBGAs/s1600/prestige_lvl_75_inventory.gl_emotes_prestige.png" },
    { name: "Honneur 7", img: "https://wiki.leagueoflegends.com/en-us/images/Season_2013_-_Gold_3.png?ca447" },
    { name: "Or 2025", img: "https://cdn-gpd.x-plarium.com/browser/content/raid-guides/arena-rewards/gold.png" },
    { name: "Next Blood", img: "https://images.saymedia-content.com/.image/t_share/MjAxNjM0NTQ0Mzc2MzU4Njc2/mtg-arena-mythic.png" }
];

function loadBadges() {
    const grid = document.getElementById("badge-grid");
    grid.innerHTML = "";

    badges.forEach(b => {
        const div = document.createElement("div");
        div.className = "badge";
        div.innerHTML = `
            <img src="${b.img}">
            <span>${b.name}</span>
        `;
        grid.appendChild(div);
    });
}

loadBadges();




//  ==== eternal-card====


function animateEternals() {
    const cards = document.querySelectorAll(".eternal-card");

    cards.forEach(card => {
        const valueElement = card.querySelector(".eternal-value");
        const target = parseInt(card.dataset.count);
        let current = 0;

        const interval = setInterval(() => {
            current += Math.ceil(target / 50);
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            valueElement.textContent = current;
        }, 50);
    });
}

const eternals = [
    {
        name: "Flèches Fatales",
        desc: "Nombre d'ennemis éliminés avec Flèche de Cristal Enchantée.",
        icon: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5d/First_Blood.png",
        count: 128
    },
    {
        name: "Vision du Faucon",
        desc: "Zones révélées grâce à Œil du Faucon.",
        icon: "https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Honor_4.png",
        count: 342
    },
    {
        name: "Salve Dévastatrice",
        desc: "Dégâts infligés avec Salve.",
        icon: "https://static.wikia.nocookie.net/leagueoflegends/images/6/6a/Season_2024_Gold.png",
        count: "1.2M"
    },
    {
        name: "Tir Givrant",
        desc: "Ennemis ralentis avec les attaques de base.",
        icon: "https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Champion_Mastery_Level_5_Flair.png",
        count: 982
    }
];

function loadEternals() {
    const list = document.getElementById("eternals-list");
    list.innerHTML = "";

    eternals.forEach(e => {
        const card = document.createElement("div");
        card.className = "eternal-card";

        card.innerHTML = `
            <img src="${e.icon}" class="eternal-icon">
            <div class="eternal-title">${e.name}</div>
            <div class="eternal-desc">${e.desc}</div>
            <div class="eternal-count">${e.count}</div>
        `;

        list.appendChild(card);
    });
}

loadEternals();


// skins generator //


const skins = [
    {
        name: "Ashe Classique",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg",
        rarity: "commun"
    },
    {
        name: "Ashe Reine",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_1.jpg",
        rarity: "épique"
    },
    {
        name: "Ashe Projet",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_6.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_6.jpg",
        rarity: "légendaire"
    },
    {
        name: "Ashe Cosmique",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_17.jpg",
        rarity: "ultime"
    },
	{
        name: "Ashe Cosmique",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_17.jpg",
        rarity: "ultime"
    },
	{
        name: "Ashe Cosmique",
        splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
        tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_17.jpg",
        rarity: "ultime"
    },
];

let favoriteSkin = localStorage.getItem("favoriteSkin") || null;

function loadSkins() {
    const carousel = document.getElementById("skins-carousel");
    const previewImg = document.getElementById("skin-preview-img");
    const previewName = document.getElementById("skin-preview-name");
    const previewRarity = document.getElementById("skin-preview-rarity");
    const favBtn = document.getElementById("fav-btn");

    carousel.innerHTML = "";

    skins.forEach(skin => {
        const card = document.createElement("div");
        card.className = "skin-card";

        // Tilt 3D
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.08)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
        });

        card.innerHTML = `
            <img src="${skin.tile}">
            <span class="rarity-${skin.rarity}">${skin.name}</span>
        `;

        card.addEventListener("click", () => {
            previewImg.style.opacity = 0;

            setTimeout(() => {
                previewImg.src = skin.splash;
                previewName.textContent = skin.name;
                previewRarity.textContent = skin.rarity.toUpperCase();
                previewRarity.className = "skin-rarity rarity-" + skin.rarity;
                previewImg.style.opacity = 1;

                favBtn.classList.toggle("active", favoriteSkin === skin.name);
                favBtn.textContent = favoriteSkin === skin.name ? "★ Favori" : "☆ Ajouter aux favoris";
            }, 200);
        });

        carousel.appendChild(card);
    });

    // Charger le premier skin
    previewImg.src = skins[0].splash;
    previewName.textContent = skins[0].name;
    previewRarity.textContent = skins[0].rarity.toUpperCase();
    previewRarity.className = "skin-rarity rarity-" + skins[0].rarity;

    // Favoris
    favBtn.addEventListener("click", () => {
        const current = previewName.textContent;
        if (favoriteSkin === current) {
            favoriteSkin = null;
            favBtn.classList.remove("active");
            favBtn.textContent = "☆ Ajouter aux favoris";
        } else {
            favoriteSkin = current;
            favBtn.classList.add("active");
            favBtn.textContent = "★ Favori";
        }
        localStorage.setItem("favoriteSkin", favoriteSkin);
    });
}

loadSkins();

// CARROUSEL BOUTONS
document.getElementById("carousel-left").onclick = () => {
    document.getElementById("skins-carousel").scrollBy({ left: -300, behavior: "smooth" });
};

document.getElementById("carousel-right").onclick = () => {
    document.getElementById("skins-carousel").scrollBy({ left: 300, behavior: "smooth" });
};

// skin animation //

const champions = [
    // ============================
    // ASHE
    // ============================
    {
        id: "ashe",
        name: "Ashe",
				type: "ice",
				themeColor: "#3fa7ff",
        title: "Archère de Givre",
        icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ashe.png",
				background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
				spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.mp4",

        overview: {
            damage: 80,
            style: 60,
            difficulty: 40,
            description: "Chef de guerre sublimé de la tribu des Avarosans, Ashe est à la tête de la plus vaste horde des terres du nord,                Stoïque, intelligente et idéaliste, mais mal à l’aise dans son rôle de leader, elle puise dans la magie ancestrale de sa lignée pour manier un arc de glace pure.."
        },

        skills: {
            P: { title: "Tir givrant", desc: "Les attaques d’Ashe ralentissent..." },
            A: { title: "Concentration du Ranger", desc: "Ashe génère des effets..." },
            Z: { title: "Salve", desc: "Ashe tire plusieurs flèches..." },
            E: { title: "Faucon", desc: "Ashe envoie un esprit..." },
            R: { title: "Flèche de Cristal Enchantée", desc: "Ashe tire une flèche géante..." }
        },

        mastery: {
            level: 5,
            points: 48920,
            progress: 72
        },

        eternals: [
            { name: "Flèches Fatales", count: 128 },
            { name: "Vision du Faucon", count: 342 },
            { name: "Salve Dévastatrice", count: 1200000 },
            { name: "Tir Givrant", count: 982 }
        ],

        skins: [
            {
                name: "Ashe Classique",
                rarity: "commun",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg"
            },
            {
                name: "Ashe Reine",
                rarity: "épique",
						
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_1.jpg"
            }
        ]
    },

    // ============================
    // AHRI
    // ============================
    {
        id: "ahri",
        name: "Ahri",
				type: "magic",
				themeColor: "#ff66ff",
        title: "Renarde à Neuf Queues",
        icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ahri.png",
				background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
				spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.mp4",


        overview: {
            damage: 70,
            style: 90,
            difficulty: 60,
            description: "Ahri manipule les émotions et l'essence vitale de ses ennemis..."
        },

        skills: {
            P: { title: "Vol d'essence", desc: "Ahri récupère de la vie en touchant des ennemis." },
            A: { title: "Orbe d'illusion", desc: "Ahri lance un orbe qui revient vers elle." },
            Z: { title: "Flammes de renard", desc: "Trois flammes attaquent les ennemis proches." },
            E: { title: "Charme", desc: "Ahri charme un ennemi, le forçant à marcher vers elle." },
            R: { title: "Assaut spirituel", desc: "Ahri se projette en avant et inflige des dégâts." }
        },

        mastery: {
            level: 7,
            points: 132000,
            progress: 100
        },

        eternals: [
            { name: "Charme Fatal", count: 540 },
            { name: "Essence Dérobée", count: 2100 },
            { name: "Assauts Spirituels", count: 380 },
            { name: "Flammes Touchées", count: 890 }
        ],

        skins: [
            {
                name: "Ahri Classique",
                rarity: "commun",
							
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg"
            },
            {
                name: "Ahri Popstar",
                rarity: "épique",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_7.jpg"
            },
            {
                name: "Ahri K/DA",
                rarity: "légendaire",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_14.jpg"
            }
        ]
    },

    // ============================
    // GAREN
    // ============================
    {
        id: "garen",
        name: "Garen",
				type: "fire",
				themeColor: "#ffcc33",
        title: "Puissance de Demacia",
        icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Garen.png",
				background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
				spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_R1.mp4",


        overview: {
            damage: 65,
            style: 50,
            difficulty: 30,
            description: "Garen est un guerrier noble et puissant, symbole de Demacia..."
        },

        skills: {
            P: { title: "Persévérance", desc: "Garen régénère rapidement sa vie hors combat." },
            A: { title: "Coup Décisif", desc: "Garen inflige un coup puissant et réduit au silence." },
            Z: { title: "Courage", desc: "Garen gagne un bouclier et des résistances." },
            E: { title: "Jugement", desc: "Garen tourne sur lui-même et inflige des dégâts." },
            R: { title: "Justice de Demacia", desc: "Garen exécute un ennemi." }
        },

        mastery: {
            level: 6,
            points: 78000,
            progress: 40
        },

        eternals: [
            { name: "Jugements Fatals", count: 1200 },
            { name: "Exécutions", count: 240 },
            { name: "Boucliers Absorbés", count: 54000 },
            { name: "Coup Décisif", count: 890 }
        ],

        skins: [
            {
                name: "Garen Classique",
                rarity: "commun",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg"
            },
            {
                name: "Garen Chevalier d’Acier",
                rarity: "épique",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_1.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_1.jpg"
            },
					  {
                name: "Garen Dieu-Roi",
                rarity: "ultime",
                splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_23.jpg",
							background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
                tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_23.jpg"
            }
        ]
    },

		{    id: "jinx",
    name: "Jinx",
	 	type: "blood",
		themeColor: "#ff3333",
    title: "La Gâchette Folle",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Jinx.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_R1.mp4",

    overview: {
        damage: 95,
        style: 85,
        difficulty: 40,
        description: "Jinx adore le chaos et les explosions, semant la pagaille partout où elle passe."
    },

    skills: {
        P: { title: "Frénésie", desc: "Jinx gagne de la vitesse après avoir participé à une élimination." },
        A: { title: "Flip Flap", desc: "Jinx alterne entre mitraillette et lance-roquettes." },
        Z: { title: "Zap !", desc: "Jinx tire un tir électrique qui ralentit." },
        E: { title: "Mâchoires du piège", desc: "Jinx pose des pièges qui immobilisent." },
        R: { title: "Super Mega Rocket", desc: "Jinx tire une énorme roquette globale." }
    },

    mastery: {
        level: 7,
        points: 210000,
        progress: 100
    },

    eternals: [
        { name: "Roquettes Fatales", count: 890 },
        { name: "Frénésies Déclenchées", count: 1200 },
        { name: "Pièges Activés", count: 540 },
        { name: "Zaps Touchés", count: 760 }
    ],

    skins: [
        {
            name: "Jinx Classique",
            rarity: "commun",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
        },
        {
            name: "Jinx Mafia",
            rarity: "épique",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_1.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_1.jpg"
        },
        {
            name: "Jinx Arcane",
            rarity: "légendaire",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_23.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_23.jpg"
        }
    ]
},
	
		{
    id: "lux",
    name: "Lux",
		type: "light",
		themeColor: "#ffd700",
    title: "Dame de Lumière",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lux.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_R1.mp4",

    overview: {
        damage: 75,
        style: 90,
        difficulty: 50,
        description: "Lux manipule la lumière pour contrôler le champ de bataille."
    },

    skills: {
        P: { title: "Illumination", desc: "Les sorts de Lux marquent les ennemis." },
        A: { title: "Entrave de lumière", desc: "Lux immobilise deux ennemis." },
        Z: { title: "Barrière prismatique", desc: "Lux lance un bouclier qui revient." },
        E: { title: "Anomalie radieuse", desc: "Lux crée une zone lumineuse explosive." },
        R: { title: "Éclat final", desc: "Lux tire un laser sur une longue distance." }
    },

    mastery: {
        level: 7,
        points: 185000,
        progress: 100
    },

    eternals: [
        { name: "Lasers Fatals", count: 540 },
        { name: "Entraves Réussies", count: 980 },
        { name: "Boucliers Lancés", count: 2100 },
        { name: "Explosions Radieuses", count: 1300 }
    ],

    skins: [
        {
            name: "Lux Classique",
            rarity: "commun",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg"
        },
        {
            name: "Lux Élémentaliste",
            rarity: "ultime",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_28.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_28.jpg"
        }
    ]
},
	
		{
    id: "yasuo",
    name: "Yasuo",
		type: "wind",
		themeColor: "#66ccff",
    title: "Le Disgracié",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Yasuo.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.mp4",

    overview: {
        damage: 85,
        style: 95,
        difficulty: 80,
        description: "Yasuo est un maître épéiste capable de manipuler le vent."
    },

    skills: {
        P: { title: "Voie du vagabond", desc: "Yasuo gagne un bouclier en se déplaçant." },
        A: { title: "Tempête d'acier", desc: "Une attaque perforante qui peut projeter." },
        Z: { title: "Mur de vent", desc: "Yasuo bloque les projectiles." },
        E: { title: "Lame tourbillonnante", desc: "Yasuo se projette à travers un ennemi." },
        R: { title: "Dernier soupir", desc: "Yasuo bondit sur les ennemis projetés." }
    },

    mastery: {
        level: 7,
        points: 250000,
        progress: 100
    },

    eternals: [
        { name: "Tornades Lancées", count: 1200 },
        { name: "Mur de Vent Bloqués", count: 540 },
        { name: "Dash Réussis", count: 3200 },
        { name: "Ultimes Fatals", count: 780 }
    ],

    skins: [
        {
            name: "Yasuo Classique",
            rarity: "commun",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg"
        },
        {
            name: "Yasuo Projet",
            rarity: "légendaire",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_11.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_11.jpg"
        }
    ]
},
	
		{
    id: "darius",
    name: "Darius",
		type: "blood",
		themeColor: "#ff3333",

    title: "La Main de Noxus",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Darius.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.mp4",

    overview: {
        damage: 90,
        style: 50,
        difficulty: 40,
        description: "Darius est un général noxien brutal et impitoyable."
    },

    skills: {
        P: { title: "Hémorragie", desc: "Les attaques de Darius infligent des saignements." },
        A: { title: "Décimation", desc: "Darius tourne et inflige des dégâts circulaires." },
        Z: { title: "Coup d'arrêt", desc: "Darius ralentit un ennemi." },
        E: { title: "Appréhension", desc: "Darius attire les ennemis vers lui." },
        R: { title: "Guillotine noxienne", desc: "Darius exécute un ennemi." }
    },

    mastery: {
        level: 7,
        points: 190000,
        progress: 100
    },

    eternals: [
        { name: "Exécutions Noxiennes", count: 980 },
        { name: "Saignements Infligés", count: 5400 },
        { name: "Décimations", count: 2100 },
        { name: "Appréhensions", count: 760 }
    ],

    skins: [
        {
            name: "Darius Classique",
            rarity: "commun",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_0.jpg"
        },
        {
            name: "Darius Dieu-Roi",
            rarity: "ultime",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_12.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_12.jpg"
        }
    ]
},
		{
    id: "ivern",
    name: "Ivern",
    title: "Aîné de la Forêt",
    type: "nature",
    themeColor: "#55cc55",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ivern.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_R1.mp4",
    skills: { P:"Amitié", A:"Racines", Z:"Broussailles", E:"Bouclier", R:"Marguerite" },
    skins: [{ name:"Ivern Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg" }]
},
		{
    id: "kennen",
    name: "Kennen",
    title: "Cœur de la Tempête",
    type: "electric",
    themeColor: "#33ccff",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kennen.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_R1.mp4",
    skills: { P:"Marque", A:"Shuriken", Z:"Surtension", E:"Ruée", R:"Tempête" },
    skins: [{ name:"Kennen Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg" }]
},
		{
    id: "evelynn",
    name: "Evelynn",
    title: "Étreinte Agonisante",
    type: "shadow",
    themeColor: "#aa00aa",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Evelynn.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.mp4",
    skills: { P:"Ombre", A:"Fouet", Z:"Charme", E:"Frappe", R:"Exécution" },
    skins: [{ name:"Evelynn Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg" }]
},
		{
    id: "velkoz",
    name: "Vel'Koz",
    title: "Œil du Néant",
    type: "void",
    themeColor: "#cc66ff",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Velkoz.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_R1.mp4",
    skills: { P:"Désintégration", A:"Plasma", Z:"Fissure", E:"Disruption", R:"Rayon" },
    skins: [{ name:"Vel'Koz Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg" }]
},
		{
    id: "lissandra",
    name: "Lissandra",
    title: "Sorcière de Glace",
    type: "ice",
    themeColor: "#66d0ff",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lissandra.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_R1.mp4",
    skills: { P:"Soumission", A:"Éclat", Z:"Anneau", E:"Griffe", R:"Tombeau" },
    skins: [{ name:"Lissandra Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg" }]
},
		{
    id: "brand",
    name: "Brand",
    title: "Vengeance Ardente",
    type: "fire",
    themeColor: "#ff5500",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Brand.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.mp4",
    skills: { P:"Brasier", A:"Flamme", Z:"Piliers", E:"Conduction", R:"Pyroclasm" },
    skins: [{ name:"Brand Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg" }]
},
		{
    id: "irelia",
    name: "Irelia",
    title: "Danseuse des Lames",
    type: "wind",
    themeColor: "#33ffaa",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Irelia.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_R1.mp4",
    skills: { P:"Ferveur", A:"Lame", Z:"Danse", E:"Duel", R:"Déferlante" },
    skins: [{ name:"Irelia Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg" }]	
},
		{
    id: "zed",
    name: "Zed",
    title: "Maître des Ombres",
    type: "shadow",
    themeColor: "#444444",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zed.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_R1.mp4",
    skills: { P:"Mépris", A:"Shuriken", Z:"Ombre", E:"Taillade", R:"Marque" },
    skins: [{ name:"Zed Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg" }]
},
		{
    id: "kaisa",
    name: "Kai'Sa",
    title: "Fille du Néant",
    type: "void",
    themeColor: "#b84bff",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kaisa.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_R1.mp4",
    skills: { P:"Second Peau", A:"Rayon", Z:"Plasma", E:"Supercharge", R:"Instinct" },
    skins: [{ name:"Kai'Sa Classique", splash:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg" }]
},
		{
    id: "ekko",
    name: "Ekko",
		type: "chrono",
		themeColor: "#00e6e6",
    title: "Le Garçon qui Fracture le Temps",
    icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ekko.png",
    background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
    spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.mp4",

    overview: {
        damage: 80,
        style: 95,
        difficulty: 70,
        description: "Ekko manipule le temps pour prendre l’avantage."
    },

    skills: {
        P: { title: "RéZonance", desc: "Les attaques d’Ekko infligent des dégâts bonus." },
        A: { title: "Propulseur temporel", desc: "Ekko lance un dispositif qui revient." },
        Z: { title: "Convergence parallèle", desc: "Ekko crée une zone temporelle." },
        E: { title: "Saut de phase", desc: "Ekko se projette et frappe." },
        R: { title: "Chronofracture", desc: "Ekko remonte le temps et se soigne." }
    },

    mastery: {
        level: 6,
        points: 110000,
        progress: 60
    },

    eternals: [
        { name: "Chronofractures", count: 320 },
        { name: "Convergences", count: 540 },
        { name: "Propulseurs Touchés", count: 2100 },
        { name: "Sauts de Phase", count: 1800 }
    ],

    skins: [
        {
            name: "Ekko Classique",
            rarity: "commun",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg"
        },
        {
            name: "Ekko True Damage",
            rarity: "légendaire",
            splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_21.jpg",
            tile: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_21.jpg"
        }
    ]
},
];


function loadChampionCarousel() {
    const carousel = document.getElementById("champion-carousel");
    carousel.innerHTML = "";

    champions.forEach(champ => {
        const img = document.createElement("img");
        img.src = champ.icon;
        img.className = "champion-icon";
        img.dataset.id = champ.id;

        img.addEventListener("click", () => selectChampion(champ.id));

        carousel.appendChild(img);
    });
}

loadChampionCarousel();

window.addEventListener("load", () => {
    selectChampion("");
});



function selectChampion(id) {
    const champ = champions.find(c => c.id === id);
    if (!champ) return;

    const page = document.querySelector(".page");

    // Effets visuels (si .page existe)
    if (page) {
        page.classList.add("blur-boost", "fade-out");
    }

    // Spotlight
    const btn = document.querySelector(".btn");
    if (btn) btn.onclick = () => openSpotlight(champ);

    // Mise à jour des infos (si les éléments existent)
    const nameEl = document.querySelector(".champ-name");
    const titleEl = document.querySelector(".champ-title");
    const descEl = document.querySelector(".description");
    const bars = document.querySelectorAll(".bar-fill");

    if (nameEl) nameEl.textContent = champ.name;
    if (titleEl) titleEl.textContent = champ.title;
    if (descEl) descEl.textContent = champ.overview.description;

    if (bars.length >= 3) {
        bars[0].style.width = champ.overview.damage + "%";
        bars[1].style.width = champ.overview.style + "%";
        bars[2].style.width = champ.overview.difficulty + "%";
    }

    // Modules LoL (sécurisés)
    updateSkills(champ.skills);
    updateMastery(champ.mastery);
    updateEternals(champ.eternals);
    updateSkins(champ.skins);

    // Icône active
    document.querySelectorAll(".champion-icon").forEach(icon => {
        icon.classList.toggle("active", icon.dataset.id === id);
    });

    // Effets visuels suite (si .page existe)
    setTimeout(() => {
        if (page) {
            page.style.backgroundImage = `url("${champ.background}")`;
            page.classList.remove("fade-out");
            page.classList.add("fade-in");

            setTimeout(() => {
                page.classList.remove("blur-boost", "fade-in");
            }, 500);
        }
    }, 300);

    // Zoom effect (sécurisé)
    applyZoomEffect();

    // Thème dynamique
    document.body.classList.remove("theme-ashe", "theme-ahri", "theme-garen");
    document.body.classList.add("theme-" + champ.id);

    // Particules selon champion (sécurisé)
    if (champ.id === "ashe") spawnParticles("snow");
    if (champ.id === "ahri") spawnParticles("orb");
    if (champ.id === "garen") spawnParticles("fire");

    updateSkills(champ.skills);
    updateMastery(champ.mastery);
    updateEternals(champ.eternals);
    updateSkins(champ.skins);

	

    // Mise à jour du contenu
    document.querySelector(".champ-name").textContent = champ.name;
    document.querySelector(".champ-title").textContent = champ.title;
    document.querySelector(".description").textContent = champ.overview.description;

    document.querySelectorAll(".bar-fill")[0].style.width = champ.overview.damage + "%";
    document.querySelectorAll(".bar-fill")[1].style.width = champ.overview.style + "%";
    document.querySelectorAll(".bar-fill")[2].style.width = champ.overview.difficulty + "%";

    // Activation icône
    document.querySelectorAll(".champion-icon").forEach(icon => {
        icon.classList.toggle("active", icon.dataset.id === id);
    });
}


function updateMastery(mastery) {
    document.querySelector(".mastery-icon").className = "mastery-icon mastery-" + mastery.level;
    document.querySelector(".mastery-info h3").textContent = "Niveau de Maîtrise : " + mastery.level;
    document.querySelector(".mastery-info p strong").textContent = mastery.points;

    document.querySelector(".progress-fill").style.width = mastery.progress + "%";
    document.querySelector(".progress-text").textContent = mastery.progress + "% complété";
}

function updateEternals(eternals) {
    const list = document.getElementById("eternals-list");
    list.innerHTML = "";

    eternals.forEach(e => {
        const card = document.createElement("div");
        card.className = "eternal-card";
        card.innerHTML = `
            <img src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Eternals_Icon.png" class="eternal-icon">
            <h3>${e.name}</h3>
            <span class="eternal-value">${e.count}</span>
            <p>Progression de cet Éternel.</p>
        `;
        list.appendChild(card);
    });
}

function updateSkins(skins) {
    const carousel = document.getElementById("skins-carousel");
    const previewImg = document.getElementById("skin-preview-img");
    const previewName = document.getElementById("skin-preview-name");
    const previewRarity = document.getElementById("skin-preview-rarity");

    // Si on n’est pas dans l’onglet Skins → on stoppe
    if (!carousel || !previewImg || !previewName || !previewRarity) return;

    carousel.innerHTML = "";

    skins.forEach(skin => {
        const card = document.createElement("div");
        card.className = "skin-card";

        card.innerHTML = `
            <img src="${skin.tile}">
            <span class="rarity-${skin.rarity}">${skin.name}</span>
        `;

        card.addEventListener("click", () => {
            previewImg.style.opacity = 0;

            setTimeout(() => {
                previewImg.src = skin.splash;
                previewName.textContent = skin.name;
                previewRarity.textContent = skin.rarity.toUpperCase();
                previewRarity.className = "skin-rarity rarity-" + skin.rarity;
                previewImg.style.opacity = 1;
            }, 200);
        });

        carousel.appendChild(card);
    });

    // Charger le premier skin
    if (skins[0]) {
        previewImg.src = skins[0].splash;
        previewName.textContent = skins[0].name;
        previewRarity.textContent = skins[0].rarity.toUpperCase();
        previewRarity.className = "skin-rarity rarity-" + skins[0].rarity;
    }
}


function updateSkills(skills) {
    const skillTitle = document.getElementById("skill-title");
    const skillDesc = document.getElementById("skill-description");

    // Si on n’est pas dans l’onglet Compétences → on stoppe
    if (!skillTitle || !skillDesc) return;

    // Charger la compétence A par défaut
    if (skills["A"]) {
        skillTitle.textContent = skills["A"].title;
        skillDesc.textContent = skills["A"].desc;
    }

    document.querySelectorAll(".skill-item").forEach(item => {
        item.addEventListener("click", () => {
            const key = item.dataset.skill;
            if (skills[key]) {
                skillTitle.textContent = skills[key].title;
                skillDesc.textContent = skills[key].desc;
            }
        });
    });
}



document.addEventListener("mousemove", (e) => {
    const page = document.querySelector(".page");
    if (!page || !page.classList.contains("parallax")) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    page.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

const page = document.querySelector(".page");
if (page) page.classList.add("parallax");




// custom hub character //

function spawnParticles(type) {
    const layer = document.getElementById("particle-layer");
    if (!layer) return; // Empêche le crash si pas de layer

    layer.innerHTML = "";

    const count = 40;

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "particle " + type;

        p.style.left = Math.random() * 100 + "%";
        p.style.bottom = "-20px";
        p.style.animationDuration = 4 + Math.random() * 4 + "s";
        p.style.animationDelay = Math.random() * 3 + "s";

        layer.appendChild(p);
    }
}




function applyZoomEffect() {
    const page = document.querySelector(".page");
    if (!page) return;

    page.classList.add("zoom");
    setTimeout(() => page.classList.remove("zoom"), 1200);
}



window.addEventListener("load", () => {
    selectChampion("ashe");
});


function openSpotlight(champ) {
    const modal = document.getElementById("spotlight-modal");
    const video = document.getElementById("spotlight-video");
    const title = document.getElementById("spotlight-title");

    title.textContent = champ.name + " – Spotlight";
    video.src = champ.spotlight;

    modal.style.display = "flex";
}

document.getElementById("spotlight-close").onclick = () => {
    const modal = document.getElementById("spotlight-modal");
    const video = document.getElementById("spotlight-video");

    video.pause();
    modal.style.display = "none";
};


const games = {
    LOL: {
        id: "LOL",
        name: "League of Legends",
        theme: "#3fa7ff",
        background: "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg')",
        particles: "snow",
        ui: "lol-ui",
        defaultChampion: "ashe"
    },

    DV: {
        id: "DV",
        name: "Diablo V",
        theme: "#ff2a00",
        background: "url('https://images.blz-contentstack.com/v3/assets/blt72f16e066f85e164/blt2e7d2a3df3b9f2e4/63f8c7a8e0f3f20c2f4d8b8d/diablo-iv-keyart.jpg')",
        particles: "fire",
        ui: "diablo-ui",
        defaultChampion: null // Diablo n’a pas de champions
    },

    RS: {
        id: "RS",
        name: "RuneScape",
        theme: "#d4af37",
        background: "url('https://runescape.wiki/images/Runescape_3_key_art.jpg')",
        particles: "orb",
        ui: "rs-ui",
        defaultChampion: null
    }
};

function selectGame(gameId) {
    const game = games[gameId];
    const page = document.querySelector(".page"); // peut être null

    const audio = document.getElementById(gameSounds[gameId]);

    const trans = document.getElementById("universe-transition");
    trans.className = "";

    if (gameId === "LOL") trans.classList.add("transition-portal");
    if (gameId === "DV") trans.classList.add("transition-fire");
    if (gameId === "RS") trans.classList.add("transition-glitch");

    trans.style.opacity = 1;
    setTimeout(() => trans.style.opacity = 0, 500);

    const loader = document.getElementById("game-loader");
    loader.style.display = "flex";
    document.getElementById("loader-text").textContent = "Chargement de " + game.name + "...";

    setTimeout(() => loader.style.display = "none", 1200);

    // Effet de fondu + blur (UNIQUEMENT si .page existe)
    if (page) {
        page.classList.add("fade-out", "blur-boost");
    }

    setTimeout(() => {

        // Background du jeu (UNIQUEMENT si .page existe)
        if (page) {
            page.style.backgroundImage = game.background;
        }

        // Thème du jeu
        document.documentElement.style.setProperty("--theme-color", game.theme);

        // UI du jeu
        document.body.classList.remove("lol-ui", "diablo-ui", "rs-ui");
        document.body.classList.add(game.ui);

        // Particules du jeu
        spawnParticles(game.particles);

        // Effet de zoom (UNIQUEMENT si .page existe)
        if (page) applyZoomEffect();

        // Si c’est LoL → charger les champions
        if (game.defaultChampion) {
            selectChampion(game.defaultChampion);
        } else {
            loadGameContent(gameId);
        }

        // Fin du fade (UNIQUEMENT si .page existe)
        if (page) {
            page.classList.remove("fade-out");
            page.classList.add("fade-in");
            setTimeout(() => page.classList.remove("fade-in", "blur-boost"), 500);
        }

    }, 300);

    // Activer l’onglet du jeu
    document.querySelectorAll(".game-switch span").forEach(s => {
        s.classList.toggle("active", s.textContent === gameId);
    });
}




document.querySelectorAll(".game-switch span").forEach(btn => {
    btn.addEventListener("click", () => {
        selectGame(btn.textContent);
    });
});



function loadGameContent(gameId) {
    const container = document.querySelector(".content-wrapper");

    // 🔥 DIABLO V — Écran de création de personnage
    if (gameId === "DV") {
        container.innerHTML = `
            <div class="dv-creation-screen">
                <h1 class="dv-title">Création de personnage</h1>

                <div class="dv-class-selector">

                    <div class="dv-class-card" data-class="barbarian">
                        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt0f1b3b6c2c1b9f2d/63f8c7a8e0f3f20c2f4d8b8d/barbarian.png" class="dv-class-img">
                        <h2>Barbare</h2>
                        <p>Force brute, rage et puissance écrasante.</p>
                    </div>

                    <div class="dv-class-card" data-class="sorcerer">
                        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt8b8b7d2e7c3f9a1/63f8c7a8e0f3f20c2f4d8b8e/sorcerer.png" class="dv-class-img">
                        <h2>Sorcier</h2>
                        <p>Maîtrise des éléments : feu, glace, foudre.</p>
                    </div>

                    <div class="dv-class-card" data-class="necromancer">
                        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt7c1f4b2a3d9f8e1/63f8c7a8e0f3f20c2f4d8b90/necromancer.png" class="dv-class-img">
                        <h2>Nécromancien</h2>
                        <p>Manipulation du sang, des os et des morts.</p>
                    </div>

                    <div class="dv-class-card" data-class="rogue">
                        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt1c8d7b2a3f9e8c1/63f8c7a8e0f3f20c2f4d8b91/rogue.png" class="dv-class-img">
                        <h2>Voleur</h2>
                        <p>Agilité, précision et attaques rapides.</p>
                    </div>

                    <div class="dv-class-card" data-class="druid">
                        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt9c7d8b2a3f9e8c2/63f8c7a8e0f3f20c2f4d8b92/druid.png" class="dv-class-img">
                        <h2>Druide</h2>
                        <p>Transformation bestiale et magie de la nature.</p>
                    </div>

                </div>
            </div>
        `;
    }

    // 🟡 RUNESCAPE — Landing page Coming Soon
    if (gameId === "RS") {
        container.innerHTML = `
            <div class="rs-coming-soon">
                <h1 class="rs-title">RuneScape</h1>
                <p class="rs-text"><strong>Coming Soon...</strong></p>
            </div>
        `;
    }
}



window.addEventListener("load", () => {
    selectGame("LOL");
});




const gameSounds = {
    LOL: "sfx-click",
    DV: "sfx-fire",
    RS: "sfx-magic"
};



fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json")
    .then(r => r.json())
    .then(data => console.log(data));

fetch("https://d3-api.com/api/skills")
    .then(r => r.json())
    .then(data => console.log(data));

fetch("https://secure.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=1&alpha=a&page=1")
    .then(r => r.json())
    .then(data => console.log(data));

const champCarousel = document.getElementById("champion-carousel");

document.getElementById("champ-left").onclick = () => {
    champCarousel.scrollBy({
        left: -200,
        behavior: "smooth"
    });
};

document.getElementById("champ-right").onclick = () => {
    champCarousel.scrollBy({
        left: 200,
        behavior: "smooth"
    });
};

let scrollInterval;

function startScroll(direction) {
    scrollInterval = setInterval(() => {
        champCarousel.scrollBy({
            left: direction * 20,
            behavior: "smooth"
        });
    }, 50);
}

function stopScroll() {
    clearInterval(scrollInterval);
}

document.getElementById("champ-left").addEventListener("mousedown", () => startScroll(-1));
document.getElementById("champ-right").addEventListener("mousedown", () => startScroll(1));

document.addEventListener("mouseup", stopScroll);
document.addEventListener("mouseleave", stopScroll);


function applyChampionEffect(type) {
    const layer = document.getElementById("particle-layer");
    layer.innerHTML = "";

    const count = 40;

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");

        if (type === "ice") p.classList.add("snow");
        if (type === "fire") p.classList.add("fire");
        if (type === "magic") p.classList.add("orb");
        if (type === "wind") p.classList.add("wind");
        if (type === "blood") p.classList.add("blood");
        if (type === "chrono") p.classList.add("chrono");
        if (type === "light") p.classList.add("light");

        p.style.left = Math.random() * 100 + "%";
        p.style.bottom = "-20px";
        p.style.animationDuration = 4 + Math.random() * 4 + "s";
        p.style.animationDelay = Math.random() * 3 + "s";

        layer.appendChild(p);
    }
}

document.querySelector(".play-btn").addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => location.reload(), 600);
});
