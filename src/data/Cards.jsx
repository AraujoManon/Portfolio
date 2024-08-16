import SophieBluelImage from "../assets/images/sophiebluel.webp";
import qwentaImage from "../assets/images/qwenta.webp";
import kasaImage from "../assets/images/kasa.webp";
import ohmyfoodImage from "../assets/images/ohmyfood.webp";
import ninacarducciImage from "../assets/images/ninacarducci.webp";
import events from "../assets/images/724events.webp";
import argentbank from "../assets/images/argentbank.webp";
import printit from "../assets/images/printit.webp";

export const cards = [
  {
    id: "0",
    name: "Ohmyfood, entreprise de commande de repas en ligne",
    tags: ["html", "all"],
    image: ohmyfoodImage,
    details: {
      mission:
        'Intégrer un site "mobile first" pour OhMyFood, une startup visant à répertorier les menus de restaurants gastronomiques à Paris après un lancement à New-York. Le site doit permettre aux clients de réserver et de composer leurs repas pour éviter les temps dattente.',
      technologies: "HTML, CSS, SASS , GitHub, Figma",
      skills:
        " Intégration mobile-first, animations CSS pour améliorer l’expérience utilisateur, et gestion de projet avec Git et GitHub",

      githubUrl: "https://github.com/AraujoManon/P4",
      projectUrl: "https://araujomanon.github.io/P4/"
    },
  },
  {
    id: "1",
    name: "Sophie Bluel, architecte d'interieur",
    tags: ["html", "javascript", "all"],
    image: SophieBluelImage,
    details: {
      mission:
        "Développer un site portfolio pour une architecte d'intérieur, intégrant une page de présentation des travaux, une page de connexion pour les administrateurs, et une modale pour uploader les photos. Le site doit être dynamique et interactif, permettant aux administrateurs de gérer le contenu du portfolio en toute simplicité.",
      technologies: "HTML, CSS, JavaScript, Fetch API, Node.js, Swagger, Figma",
      skills:
        "Développement Dynamique avec JavaScript , Gestion des Formulaires et Authentification, Interaction avec les APIs, Création et Gestion de Modales ",
        githubUrl: "https://github.com/AraujoManon/Portfolio-architecte-sophie-bluel",

      },
  },
  {
    id: "2",
    name: "Qwenta, gestion de projet",
    tags: ["gestion de projet", "all"],
    image: qwentaImage,
    details: {
      mission:
        "Préparer et planifier le projet Menu Maker pour Qwenta, une plateforme qui permettra aux restaurateurs de créer, personnaliser et gérer facilement leurs menus en ligne.",
      technologies: "Figma, Notion, Feedly",
      skills:
        "Rédaction des Spécifications Techniques, Gestion de Projet avec Kanban, Veille Technique",
    },
  },
  {
    id: "3",
    name: "Kasa, location immobilière",
    tags: ["react", "all"],
    image: kasaImage,
    details: {
      mission:
        "Refondre le site de Kasa en développant une application React complète, en intégrant les maquettes Figma fournies et en respectant les contraintes fonctionnelles et techniques.",
      technologies: "React, React Router, SCSS, Figma",
      skills:
        "Développement front-end avec React, Stylisme et Animation avec Sass, Routage et Gestion des Erreurs",
        githubUrl: "https://github.com/AraujoManon/Projet-8-            "},
  },
  {
    id: "4",
    name: "Nina Carducci, photographe",
    tags: ["html", "seo", "all"],
    image: ninacarducciImage,
    details: {
      mission:
        "Optimiser le site web de Nina Carducci, photographe, pour améliorer sa performance, son référencement SEO, et son accessibilité.",
      technologies:
        "Lighthouse, Schema.org, Open Graph, Twitter Card, Wave Evaluation Tool",
      skills:
        "Analyse et Audit, Optimisation des Performances, Référencement Local, Accessibilité, SEO et Balises Meta",
        githubUrl: "https://github.com/AraujoManon/Projet-9-main" },
  },
  {
    id: "5",
    name: "724events, agence evenementielle",
    tags: ["react", "all"],
    image: events,
    details: {
      mission:
        "Finaliser et déboguer le site vitrine one-page de l'agence évènementielle 724events.",
      technologies: "React, Yarn, React Dev Tools, Node.js",
      skills: "Débogage, Gestion des Tests, Création d'un Cahier de Recette",
      githubUrl: "https://github.com/AraujoManon/Projet-10"},
  },
  {
    id: "6",
    name: "ArgentBank, banque en ligne",
    tags: ["react", "redux", "all"],
    image: argentbank,
    details: {
      mission:
        " Développer l'interface utilisateur complète pour l'application web d'Argent Bank, incluant la page d'accueil, la page de connexion, et la page de profil, en utilisant React, Redux, et en intégrant les API existantes.",
      technologies:
        "React, React Router, SCSS, Axios, Redux, Swagger, Mongo DB",
      skills:
        "Développement Front-end, Gestion de l'Etat avec Redux, Intégration API, Réactivité et Accessibilité, Optimisation du code",
        githubUrl: "https://github.com/AraujoManon/p-11"},
  },
  {
    id: "7",
    name: "Print-it, entreprise familiale d'impression",
    tags: ["react", "javascript", "all"],
    image: printit,
    details: {
      mission:
        "Réaliser un carrousel dynamique pour le site d'une imprimerie familiale, Print it, en utilisant JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      skills:
        "Maîtrise des fondamentaux de JavaScript pour dynamiser des éléments de site web",
        githubUrl: "https://github.com/AraujoManon/Print-it-JS",
        projectUrl: "https://araujomanon.github.io/Print-it-JS/"
      },
  },
];
