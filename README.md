# Landing page for HarmoTools

This page will be published on URL https://www.e-naxos.com/HarmoTools
This repository is public because its content is intended for publication.
EN: However, this content is protected by copyright and may not be used, modified or reproduced without the author's permission.
FR: Cependant, ce contenu est protégé par le droit d'auteur et ne peut être utilisé, modifié ou dupliqué sans l'autorisation de l'auteur.

## Téléchargement

Lien de téléchargement actuel (releases GitHub) :

https://github.com/odahan/HarmoTools.Release/releases

## Bouton de don

Le bouton Buy Me a Coffee est intégré par le widget officiel dans `script.js` (constantes `BMC_*`), avec un lien de repli direct en cas d'échec du CDN. Profil : https://www.buymeacoffee.com/knhsynths

## Notes de développement

- Le contenu anglais est pré-rendu en HTML statique dans `index.html` (SEO, lecture sans JavaScript). `script.js` contient l'objet `content` pour les deux langues : toute modification de texte EN doit être reflétée dans les deux endroits.
- Les captures suivent le tri naturel de l’Explorateur Windows, avec les deux vues d’analyse audio placées juste après le métronome pour conserver les sections finales en fin de présentation. Le tableau `screenshots` et les listes `features` EN/FR dans `script.js` doivent conserver la même correspondance ; la première capture est utilisée dans le bandeau d’accueil. L’export MIDI (10B) et le glisser-déposer MIDI direct (10B1) sont présentés à la suite dans ce même ordre. La capture 10B1 est affichée intégralement pour conserver la mémoire source et la destination Bitwig visibles.
- La langue initiale est détectée depuis le navigateur (fr → français, sinon anglais) puis mémorisée dans `localStorage`.
- Aucun numéro de version n'est affiché sur la page (travail en cours, non release). Le message sous le bouton de téléchargement est contrôlé par la clé `downloadNote` dans `content` (`script.js`).
