import React, { useEffect, useState } from "react";
import "./index.css";

const wordsList = ["Un super-héros célèbre", "Un personnage de Disney", "Un film culte des années 90", "Un groupe de musique mythique", "Un acteur français connu", "Une série télévisée populaire", "Un dessin animé de votre enfance", "Un livre classique", "Un festival de musique", "Un genre de film", "Un fruit rouge", "Une marque de voiture", "Un ingrédient de pizza", "Un légume vert", "Une boisson chaude", "Un dessert classique", "Un fast-food célèbre", "Un ustensile de cuisine", "Un parfum de glace", "Un condiment", "Une capitale européenne", "Un pays d'Asie", "Une grande ville française", "Un océan", "Un monument célèbre", "Un continent", "Un fleuve connu", "Un pays d'Amérique latine", "Une île paradisiaque", "Une chaîne de montagnes", "Un animal domestique", "Une fleur", "Un arbre courant", "Un animal de la ferme", "Un animal sauvage", "Un insecte", "Un oiseau connu", "Un animal marin", "Un animal de la savane", "Un animal de compagnie exotique", "Un sport olympique", "Une couleur primaire", "Un jour de la semaine", "Un mois de l'année", "Un métier courant", "Un outil de bricolage", "Une pièce de la maison", "Un accessoire de mode", "Un vêtement", "Une matière première", "Un jeu de société classique", "Un sport collectif", "Un passe-temps créatif", "Un jeu vidéo célèbre", "Un sport d'hiver", "Un instrument de musique", "Un loisir de plein air", "Une activité de détente", "Un sport de combat", "Un jeu de cartes", "Une marque de smartphone", "Un réseau social", "Un logiciel connu", "Un objet connecté", "Un appareil électroménager", "Une invention technologique", "Un système d'exploitation", "Un jeu en ligne", "Un moteur de recherche", "Un composant informatique", "Un athlète célèbre", "Une équipe de football", "Un événement sportif mondial", "Un sport de raquette", "Un sport aquatique", "Un sport de précision", "Une salle de sport", "Un équipement de sport", "Un titre de champion", "Un entraîneur connu", "Une destination de vacances", "Un mode de transport", "Un objet indispensable en voyage", "Une langue étrangère", "Un type de logement de vacances", "Un pays froid", "Un pays chaud", "Une monnaie étrangère", "Un continent peuplé", "Un paysage naturel", "Un super-héros célèbre", "Un personnage de Disney", "Un film culte des années 90", "Un groupe de musique mythique", "Un acteur français connu", "Une série télévisée populaire", "Un dessin animé de votre enfance", "Un livre classique", "Un festival de musique", "Un genre de film", "Un fruit rouge", "Une marque de voiture", "Un ingrédient de pizza", "Un légume vert", "Une boisson chaude", "Un dessert classique", "Un fast-food célèbre", "Un ustensile de cuisine", "Un parfum de glace", "Un condiment", "Une capitale européenne", "Un pays d'Asie", "Une grande ville française", "Un océan", "Un monument célèbre", "Un continent", "Un fleuve connu", "Un pays d'Amérique latine", "Une île paradisiaque", "Une chaîne de montagnes", "Un animal domestique", "Une fleur", "Un arbre courant", "Un animal de la ferme", "Un animal sauvage", "Un insecte", "Un oiseau connu", "Un animal marin", "Un animal de la savane", "Un animal de compagnie exotique", "Un sport olympique", "Une couleur primaire", "Un jour de la semaine", "Un mois de l'année", "Un métier courant", "Un outil de bricolage", "Une pièce de la maison", "Un accessoire de mode", "Un vêtement", "Une matière première", "Un jeu de société classique", "Un sport collectif", "Un passe-temps créatif", "Un jeu vidéo célèbre", "Un sport d'hiver", "Un instrument de musique", "Un loisir de plein air", "Une activité de détente", "Un sport de combat", "Un jeu de cartes", "Une marque de smartphone", "Un réseau social", "Un logiciel connu", "Un objet connecté", "Un appareil électroménager", "Une invention technologique", "Un système d'exploitation", "Un jeu en ligne", "Un moteur de recherche", "Un composant informatique", "Un athlète célèbre", "Une équipe de football", "Un événement sportif mondial", "Un sport de raquette", "Un sport aquatique", "Un sport de précision", "Une salle de sport", "Un équipement de sport", "Un titre de champion", "Un entraîneur connu", "Une destination de vacances", "Un mode de transport", "Un objet indispensable en voyage", "Une langue étrangère", "Un type de logement de vacances", "Un pays froid", "Un pays chaud", "Une monnaie étrangère", "Un continent peuplé", "Un paysage naturel", "Un super-héros célèbre", "Un personnage de Disney", "Un film culte des années 90", "Un groupe de musique mythique", "Un acteur français connu", "Une série télévisée populaire", "Un dessin animé de votre enfance", "Un livre classique", "Un festival de musique", "Un genre de film", "Un fruit rouge", "Une marque de voiture", "Un ingrédient de pizza", "Un légume vert", "Une boisson chaude", "Un dessert classique", "Un fast-food célèbre", "Un ustensile de cuisine", "Un parfum de glace", "Un condiment"];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomBackgroundAndTextColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 128 ? "#000" : "#FFF";
  return { bgColor, textColor };
}

export default function Dito() {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [colorMap, setColorMap] = useState({});
  const [bg, setBg] = useState("#FFF");
  const [textColor, setTextColor] = useState("#000");

  useEffect(() => {
    const shuffled = shuffleArray(wordsList);
    const newColorMap = {};
    shuffled.forEach(word => {
      newColorMap[word] = getRandomBackgroundAndTextColor();
    });
    setWords(shuffled);
    setColorMap(newColorMap);
    const { bgColor, textColor } = newColorMap[shuffled[0]];
    setBg(bgColor);
    setTextColor(textColor);
  }, []);

  const changeWord = (direction) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = words.length - 1;
    if (newIndex >= words.length) {
      newIndex = 0;
      const reshuffled = shuffleArray(wordsList);
      const newColorMap = {};
      reshuffled.forEach(word => {
        newColorMap[word] = getRandomBackgroundAndTextColor();
      });
      setWords(reshuffled);
      setColorMap(newColorMap);
    }
    setIndex(newIndex);
    const currentWord = words[newIndex];
    const { bgColor, textColor } = colorMap[currentWord] || getRandomBackgroundAndTextColor();
    setBg(bgColor);
    setTextColor(textColor);
  };

  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    if (clickX < screenWidth / 2) {
      changeWord(-1);
    } else {
      changeWord(1);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fullscreen-text"
      style={{ backgroundColor: bg, color: textColor }}
    >
      {words[index]}
    </div>
  );
}