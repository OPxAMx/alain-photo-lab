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
        title: "Archère de Givre",
        icon: "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ashe.png",
				background: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
				spotlight: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.mp4",

        overview: {
            damage: 80,
            style: 60,
            difficulty: 40,
            description: "Chef de guerre sublimé de la tribu des Avarosans..."
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
    }
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
    selectChampion("ashe");
});



function selectChampion(id) {
    const champ = champions.find(c => c.id === id);
    const page = document.querySelector(".page");

    // Effet blur + fade
    page.classList.add("blur-boost", "fade-out");

	document.querySelector(".btn").onclick = () => {
    openSpotlight(champ);
};

    setTimeout(() => {
        page.style.backgroundImage = `url("${champ.background}")`;
        page.classList.remove("fade-out");
        page.classList.add("fade-in");

        setTimeout(() => {
            page.classList.remove("blur-boost", "fade-in");
        }, 500);
    }, 300);

    // Zoom effect
    applyZoomEffect();

    // Thème dynamique
    document.body.classList.remove("theme-ashe", "theme-ahri", "theme-garen");
    document.body.classList.add("theme-" + champ.id);

    // Particules selon champion
    if (champ.id === "ashe") spawnParticles("snow");
    if (champ.id === "ahri") spawnParticles("orb");
    if (champ.id === "garen") spawnParticles("fire");

    // Mise à jour du contenu
    document.querySelector(".champ-name").textContent = champ.name;
    document.querySelector(".champ-title").textContent = champ.title;
    document.querySelector(".description").textContent = champ.overview.description;

    document.querySelectorAll(".bar-fill")[0].style.width = champ.overview.damage + "%";
    document.querySelectorAll(".bar-fill")[1].style.width = champ.overview.style + "%";
    document.querySelectorAll(".bar-fill")[2].style.width = champ.overview.difficulty + "%";

    updateSkills(champ.skills);
    updateMastery(champ.mastery);
    updateEternals(champ.eternals);
    updateSkins(champ.skins);

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
    previewImg.src = skins[0].splash;
    previewName.textContent = skins[0].name;
    previewRarity.textContent = skins[0].rarity.toUpperCase();
    previewRarity.className = "skin-rarity rarity-" + skins[0].rarity;
}


function updateSkills(skills) {
    const skillTitle = document.getElementById("skill-title");
    const skillDesc = document.getElementById("skill-description");

    document.querySelectorAll(".skill-item").forEach(item => {
        const key = item.dataset.skill;
        item.addEventListener("click", () => {
            skillTitle.textContent = skills[key].title;
            skillDesc.textContent = skills[key].desc;
        });
    });

    // Charger la compétence A par défaut
    skillTitle.textContent = skills["A"].title;
    skillDesc.textContent = skills["A"].desc;
}


document.addEventListener("mousemove", (e) => {
    const page = document.querySelector(".page");
    if (!page.classList.contains("parallax")) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    page.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
document.querySelector(".page").classList.add("parallax");


// custom hub character //

function spawnParticles(type) {
    const layer = document.getElementById("particle-layer");
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
    const page = document.querySelector(".page");

	const audio = document.getElementById(gameSounds[gameId]);
audio.currentTime = 0;
audio.play();

	
	const trans = document.getElementById("universe-transition");
trans.className = "";

if (gameId === "LOL") trans.classList.add("transition-portal");
if (gameId === "DV") trans.classList.add("transition-fire");
if (gameId === "RS") trans.classList.add("transition-glitch");

trans.style.opacity = 1;

setTimeout(() => {
    trans.style.opacity = 0;
}, 500);

	
	const loader = document.getElementById("game-loader");
loader.style.display = "flex";
document.getElementById("loader-text").textContent = "Chargement de " + games[gameId].name + "...";

setTimeout(() => {
    loader.style.display = "none";
}, 1200);

	
    // Effet fade + blur
    page.classList.add("fade-out", "blur-boost");

    setTimeout(() => {
        // Background du jeu
        page.style.backgroundImage = game.background;

        // Thème UI
        document.body.classList.remove("lol-ui", "diablo-ui", "rs-ui");
        document.body.classList.add(game.ui);

        // Particules
        spawnParticles(game.particles);

        // Zoom
        applyZoomEffect();

        // Si c’est LOL → charger les champions
        if (game.defaultChampion) {
            selectChampion(game.defaultChampion);
        } else {
            // Sinon → afficher un contenu spécifique au jeu
            loadGameContent(gameId);
        }

        page.classList.remove("fade-out");
        page.classList.add("fade-in");

        setTimeout(() => page.classList.remove("fade-in", "blur-boost"), 500);
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

    if (gameId === "DV") {
        container.innerHTML = `
            <h1 class="section-title">Classes de Diablo V</h1>
            <div class="dv-classes">
                <div class="class-card">Barbare</div>
                <div class="class-card">Sorcier</div>
                <div class="class-card">Nécromancien</div>
                <div class="class-card">Voleur</div>
                <div class="class-card">Druide</div>
            </div>
        `;
    }

    if (gameId === "RS") {
        container.innerHTML = `
            <h1 class="section-title">Métiers de RuneScape</h1>
            <div class="rs-skills">
                <div class="skill-card">Mining</div>
                <div class="skill-card">Smithing</div>
                <div class="skill-card">Magic</div>
                <div class="skill-card">Fishing</div>
                <div class="skill-card">Woodcutting</div>
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
