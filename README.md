Introduction
--------------

(définition tirée du site https://www.caapables.fr/ :

Le PODD est un ensemble de classeurs de Communication Alternative inventé il y a une vingtaine d’années par Gayle PORTER, orthophoniste, travaillant au Centre d’éducation conductive CPEC de Melbourne en Australie. C’est un moyen de communication assisté de pictogrammes.

Le PODD signifie en français Tableaux Dynamiques à Organisation Pragmatique. Sa spécificité réside dans l’organisation spécifique du vocabulaire (pragmatique et dynamique) qui doit permettre à la personne d’exprimer « ce qu’elle veut, à qui elle veut, quand elle veut » et accéder ainsi à une communication autonome.

Le logiciel FreePodd
---------------------

Le logiciel FreePodd est une implémentation libre des classeurs sous la forme numérique.


C'est programmé en quoi ?
--------------------------

Le logiciel est développé en HTML/CSS/Javascript ce qui le rend facilement accessible sur différentes plate-forme et appareils nomades.


Instructions de compilation et déploiement
--------------------------------------------

Les librairies et les outils utilisés sont les suivants :
- Bulma (CSS)
- Vue.js (Javascript)
- Vite (bundler)
- npm (package manager)

Pour installer les dépendances: `npm install`
Pour compiler : `npm run build`
Pour développer: `npm run dev`

Guie du développeur
--------------------

Pour les illustrations :
- N'utiliser que des images vectorielles au format SVG (utiliser les tuiles existantes comme base) ; ne pas changer les dimensions
- Le nom du groupe doit être le nom du fichier préfixé de `tile_` au format **snake_case**
- Exportation en 800x800 sans bordure au format PNG (manuellement pour le moment en attendant un script !)
- le nom du fichier au format **snake_case**

Voici les assets autorisés pour le moment :
- Kenney (https://www.kenney.nl)
- MDI Icons (Material Design Icons : https://materialdesignicons.com/)


TODO V1
---------

La première version est bien entendu d'avoir quelques grilles complètes, au moins les premières numérotations du classeur (pages 1 à 7).

Voici quand même quelques pistes:

- Un SVG par tuile
- Script de génération des fichiers PNG à partir des images
- Fiches 1 à 7 à faire
- Barre latérale de navigation à faire

Licence
--------

License: (CC0 1.0 Universal), Domaine Public


En savoir plus
---------------

https://www.caapables.fr/

