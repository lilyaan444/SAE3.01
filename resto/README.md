# Travail Lilyan resto
## Ce projet utilise un JSON-serveur pour gérer la base de donnée des utilisateur (MDP, @mail) et aussi pour gérer la liste des réstaurants (Nom, adresse, numéro). Il faut lancer le serveur JSON avant de lancer le vue
Amélioration possible :
- Chiffrer les mots de passes pour ne plus les stocker en clair
- La connexion est enregistré en local, il serait possible je pense de stocker la connexion dans les cookies ? (à verifier) 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### run JSON-serveur
```
npx json-server --watch db.json
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
