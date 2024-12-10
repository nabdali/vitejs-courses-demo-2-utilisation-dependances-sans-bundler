// Configurer RequireJS
requirejs.config({
  paths: {
    lodash: 'node_modules/lodash/lodash.min', // Chemin vers lodash installé via npm
  },
});

// Utiliser Lodash dans l'application via RequireJS
require(['lodash'], function (_) {
  const arr = [1, 2, 3, 4, 5];
  console.log('Tableau mélangé :', _.shuffle(arr)); // Utilisation de Lodash pour mélanger un tableau
});
