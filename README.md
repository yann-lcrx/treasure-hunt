# La carte aux trésors

L'application permettant de suivre les déplacements et les collectes de trésors par les aventuriers.

## Fonctionnement

Cette application prend en entrée un ficher CSV détaillant une carte aux trésors avec des montagnes, des trésors et des aventuriers effectuant des déplacements sur la carte. Elle calcule les mouvements et les trésors récupérés par chaque aventurier puis écrit le résultat dans un fichier CSV de sortie.

## Technologies utilisées
- TypeScript
- Jest
- csv-parse

## Installer le projet

### Pré-requis
- NodeJS v20
- Yarn
- ts-node

### Installation
1. Cloner le projet avec `git clone`
2. Installer les dépendances en jouant `yarn install`
3. Lancer le projet avec le dataset fourni `ts-node index.js input.csv`
4. Le fichier de sortie sera écrit à la racine du dossier sous le nom `output.csv`

## Scripts

### Installer les dépendances
```
yarn install
```

### Lancer le projet
```
ts-node index.js <fichier CSV d'entrée>
```

### Lancer les tests unitaires
```
yarn test
```

## Tester le projet avec différents datasets

Le projet fonctionne avec tous fichiers CSV utilisant la syntaxe ` - ` comme séparateur et détaillant les données requises pour chaque élément de la carte:
- Carte:
```
# {C comme Carte} - {Nb. de case en largeur} - {Nb. de case en hauteur}
C​ - 3 - 4
```
- Montagne:
```
# {M comme Montagne} - {Axe horizontal} - {Axe vertical}
M​ - 1 - 1
```
- Trésor:
```
# {T comme Trésor} - {Axe horizontal} - {Axe vertical} - {Nb. de trésors}
T​ - 0 - 3 - 2
```
- Aventurier:
```
# {A comme Aventurier} - {Nom de l’aventurier} - {Axe horizontal} - {Axe
vertical} - {Orientation} - {Séquence de mouvement}
A​ - Indiana - 1 - 1 - S - AADADA
```
