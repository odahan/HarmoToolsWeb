# Landing page for HarmoTools

This page will be published on URL https://www.e-naxos.com/HarmoTools
This repository is public because its content is intended for publication.
EN: However, this content is protected by copyright and may not be used, modified or reproduced without the author's permission.
FR: Cependant, ce contenu est protégé par le droit d'auteur et ne peut être utilisé, modifié ou dupliqué sans l'autorisation de l'auteur.

## Téléchargement

Lien de téléchargement actuel (dossier Dropbox partagé contenant les dernières versions publiées) — provisoire, remplacé ultérieurement par un lien vers les releases GitHub :

https://www.dropbox.com/scl/fo/iadlivo97x9hukvjzwpe2/AFfq22me4XuTWIwW6AVAho8?rlkey=fbebfs3q4hlbw9xr5cmm4q097&dl=0

## Bouton de don

Le bouton Buy Me a Coffee est intégré par le widget officiel dans `script.js` (constantes `BMC_*`), avec un lien de repli direct en cas d'échec du CDN. Profil : https://www.buymeacoffee.com/knhsynths

## Notes de développement

- Le contenu anglais est pré-rendu en HTML statique dans `index.html` (SEO, lecture sans JavaScript). `script.js` contient l'objet `content` pour les deux langues : toute modification de texte EN doit être reflétée dans les deux endroits.
- La langue initiale est détectée depuis le navigateur (fr → français, sinon anglais) puis mémorisée dans `localStorage`.
- Aucun numéro de version n'est affiché sur la page (travail en cours, non release). Le message sous le bouton de téléchargement est contrôlé par la clé `downloadNote` dans `content` (`script.js`).
