// skin animation //
export const champions = [
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
