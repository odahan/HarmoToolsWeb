const screenshots = [
  '01-ScalesAndChords.png', '02.-ScalesAndChords-Chords.png', '03-ScaleFinder.png', '04-ChordName-input.png',
  '05-ChordFinder.png', '06-CircleOfFifths.png', '07-Frequencies-Compute.png', '08-Frequencies-Ranges.png',
  '09-HomeFavoriteScales.png', '10C-RandomSequencer.png', '10-HomeChordSequencer.png', '11-Settings1.png', '12-Settings2.png', '13-About-UserManual.png'
];

const content = {
  en: {
    title: 'OD HarmoTools — Harmony in motion', description: 'OD HarmoTools — a practical workspace for exploring musical harmony.',
    nav: ['Tools', 'The flow', 'Download'], heroEyebrow: 'The workspace for curious musicians', hero: 'Harmony<br><em>in motion.</em>', heroText: 'OD HarmoTools makes scales, chords and keys immediately playable, visible and connected.', primary: 'Discover the tools', download: 'Download OD HarmoTools', secondary: 'See the flow', donationNote: 'Free to use. DonationWare means that a voluntary donation helps keep its development moving.', facts: [['For', 'Musicians & composers'], ['With', 'Audio, keyboard & MIDI'], ['Model', 'Free DonationWare']], heroCaption: 'From scale to chord, everything becomes tangible.',
    manifestoEyebrow: 'One tool, one instinct', manifesto: 'Less theory to look up.<br><em>More music to imagine.</em>', manifestoText: 'HarmoTools brings the essential landmarks of harmony into a calm, precise and unmistakably musical interface.', toolsEyebrow: 'Fourteen gestures, one musical thread', tools: 'Explore. Understand.<br><em>Make it sound.</em>',
    journeyEyebrow: 'A natural flow', journey: 'From curiosity<br>to progression.', supportEyebrow: 'Download & support', support: 'Make music.<br><em>Keep it moving.</em>', supportText: 'OD HarmoTools is DonationWare: free to use, and sustained by donations from the people who find it useful.', download: 'Download OD HarmoTools', donateTitle: 'Enjoying HarmoTools?', donateText: 'If it helps your musical practice, you can support its development with a coffee.', donateLabel: 'Support OD HarmoTools on Buy Me a Coffee', closingEyebrow: 'OD HarmoTools', closing: 'A little less<br>uncertainty. <em>A lot more harmony.</em>', closingText: 'A toolbox designed to keep your ear at the centre of every decision.', top: 'Back to the top', footer: ['OD HarmoTools', 'Practical Harmony for Musicians', '© 2026 Olivier Dahan'], close: 'Close',
    midiExport: ['MIDI export', 'Import the progression into your DAW.', 'Each chord memory now has its own MIDI export button. Save the progression as a Standard MIDI File (format 0), then simply drag and drop it into your DAW to continue working with it there.', 'A chord progression exported from OD HarmoTools and imported into a DAW', 'Drag and drop the exported MIDI file into your DAW.'],
    scaleSupport: {
      eyebrow: 'Scales & Chords · Scale Finder',
      heading: 'A scale library<br><em>built to explore.</em>',
      intro: 'Both tools share the same scale library: 52 distinct public scale definitions, including 48 in the full recognition catalogue.',
      stats: [['52', 'public scale definitions'], ['48', 'recognition candidates'], ['25', 'exotic scales']],
      groups: [
        ['Core scales', 'Major, natural minor, harmonic minor, ascending melodic minor.'],
        ['Major modes', 'Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian.'],
        ['Harmonic minor modes', 'Modes 1 to 7.'],
        ['Ascending melodic minor modes', 'Modes 1 to 7.'],
        ['Pentatonic scales', 'Major, minor.'],
        ['Symmetrical & jazz', 'Whole tone, octatonic whole-half, octatonic half-whole, augmented.'],
        ['Blues & bebop', 'Minor blues, major blues, bebop dominant, bebop major, bebop Dorian.'],
        ['Rare major/minor families', 'Harmonic major, double harmonic major, Hungarian minor, Ukrainian Dorian, Neapolitan major, Neapolitan minor.'],
        ['Westernised Eastern colours', 'Persian, Arabic, Spanish Phrygian, Oriental, Egyptian.'],
        ['Japanese scales', 'Hirajoshi, Insen, Iwato, Yo, Kumoi.']
      ]
    },
    steps: [['Choose a key', 'Start with the circle, a scale or a handful of notes.'], ['Hear the possibilities', 'Move through chords, notes and colours.'], ['Keep what sounds right', 'Save, sequence and play your discoveries.']],
    features: [
      ['Scales & chords', 'Build your playground.', 'Choose a root and a mode, then immediately see the notes, diatonic chords and keyboard come alive. A clear foundation for composing with confidence.', 'Scales and chords in OD HarmoTools', 'Build a scale and see its harmony.'],
      ['Scale finder', 'An idea in mind? Find its world.', 'Select your notes, let HarmoTools reveal candidate scales and open the ones that deserve your ear.', 'Scale finder by selected notes', 'Find a tonal colour from your notes.'],
      ['Chord name', 'From symbol to sound, with no detour.', 'Enter a chord and inspect its material: notes, keyboard voicing and harmonic identity. Perfect for checking an instinct or enriching a progression.', 'A chord symbol entered in OD HarmoTools', 'Read a chord symbol and visualise its notes.'],
      ['Chord finder', 'Play the notes. Let the chord speak.', 'The keyboard becomes a harmony detector: possible names, inversions and spellings appear clearly to speed up your analysis.', 'Chord finder from played notes', 'Recognise a chord from the keyboard.'],
      ['Circle of fifths', 'The map that connects every key.', 'See key signatures, relative minors and degrees at a glance. Click, listen and change mode, then open the collapsible side panel to build a chord progression directly from the circle.', 'Interactive circle of fifths with a collapsible chord-progression panel in OD HarmoTools', 'Explore the circle of fifths and build a chord progression from its side panel.'],
      ['Frequencies', 'Every note has its precision.', 'Connect note name, octave and frequency instantly. A dependable reference for synthesis, tuning and the details that matter.', 'Note frequency calculator', 'Exact frequencies for every note.'],
      ['Ranges', 'Put your ideas in the right register.', 'Compare frequency ranges and instrumental tessituras to write with greater accuracy, from the lowest notes to the highest.', 'Instrument ranges and frequency bands', 'Visualise instrumental ranges.'],
      ['Your favourites', 'Your scales, ready whenever you are.', 'Keep the worlds that inspire you and return to them in one move. Your workspace organises itself around your own tonal palette.', 'Home page with favourite scales', 'Keep favourite tonal colours within reach.'],
      ['Random sequencer', 'Let chance write the first draft.', 'Create evolving patterns from 4 to 64 steps. Use any scale or a custom selection of notes entered with the mouse or a MIDI keyboard, store up to six sequences, then export them as MIDI files for your DAW.', 'Adjustable random sequencer on the home page', 'Generate, save and export a random MIDI sequence.'],
      ['Chord sequencer', 'Let the progression move.', 'Save your chords, set tempo, gate, strum and instrument. Then hear the progression breathe before taking it further.', 'Chord sequencer on the home page', 'Play and shape a chord progression.'],
      ['Audio settings', 'A workspace that listens to you.', 'Choose your SoundFont, audio output and preview settings. HarmoTools adapts to your studio, never the other way around.', 'Audio and appearance settings', 'Personalise your sound and workspace.'],
      ['MIDI & diagnostics', 'Plug in, play, explore.', 'Connect a MIDI keyboard, monitor activity and stay in control of the setup. A direct bridge from your fingers to your ideas.', 'MIDI and diagnostic settings', 'Connect MIDI input and keep control.'],
      ['Built-in guide', 'Move forward with the right answers.', 'The manual travels with the application, so every feature stays approachable — from the first scale to your next progression.', 'About page and user manual', 'Clear documentation, available from the app.']
    ]
  },
  fr: {
    title: 'OD HarmoTools — L’harmonie en mouvement', description: 'OD HarmoTools — un espace de travail pratique pour explorer l’harmonie musicale.',
    nav: ['Les outils', 'Le parcours', 'Télécharger'], heroEyebrow: 'L’espace de travail des musiciens curieux', hero: 'L’harmonie<br><em>en mouvement.</em>', heroText: 'OD HarmoTools rend les gammes, les accords et les tonalités immédiatement jouables, visibles et reliés entre eux.', primary: 'Découvrir les outils', download: 'Télécharger OD HarmoTools', secondary: 'Voir le parcours', donationNote: 'Utilisation gratuite. DonationWare signifie qu’un don libre aide à faire vivre son développement.', facts: [['Pour', 'Musiciens & compositeurs'], ['Avec', 'Audio, clavier & MIDI'], ['Modèle', 'DonationWare gratuit']], heroCaption: 'De la gamme à l’accord, tout devient tangible.',
    manifestoEyebrow: 'Un outil, un réflexe', manifesto: 'Moins de théorie à chercher.<br><em>Plus de musique à imaginer.</em>', manifestoText: 'HarmoTools rassemble les repères essentiels de l’harmonie dans une interface calme, précise et résolument musicale.', toolsEyebrow: 'Quatorze gestes, un même fil musical', tools: 'Explorer. Comprendre.<br><em>Faire sonner.</em>',
    journeyEyebrow: 'Un parcours naturel', journey: 'De la curiosité<br>à la progression.', supportEyebrow: 'Télécharger & soutenir', support: 'Faites de la musique.<br><em>Faites-la vivre.</em>', supportText: 'OD HarmoTools est un logiciel DonationWare : son utilisation est gratuite et son développement est soutenu par les dons de celles et ceux qui l’apprécient.', download: 'Télécharger OD HarmoTools', donateTitle: 'HarmoTools vous est utile ?', donateText: 'Si l’application accompagne votre pratique musicale, vous pouvez soutenir son développement avec un café.', donateLabel: 'Soutenir OD HarmoTools sur Buy Me a Coffee', closingEyebrow: 'OD HarmoTools', closing: 'Un peu moins<br>de doute. <em>Beaucoup plus d’harmonie.</em>', closingText: 'Une boîte à outils pensée pour garder l’oreille au centre de chaque décision.', top: 'Revenir au début', footer: ['OD HarmoTools', 'Practical Harmony for Musicians', '© 2026 Olivier Dahan'], close: 'Fermer',
    midiExport: ['Export MIDI', 'Importez la progression dans votre DAW.', 'Chaque mémoire d’accord dispose désormais de son propre bouton d’export MIDI. Enregistrez la progression au format MIDI standard 0, puis glissez-déposez simplement le fichier dans votre DAW pour poursuivre le travail.', 'Une progression d’accords exportée depuis OD HarmoTools et importée dans un DAW', 'Glissez-déposez le fichier MIDI exporté dans votre DAW.'],
    scaleSupport: {
      eyebrow: 'Gammes & accords · Recherche de gamme',
      heading: 'Une bibliothèque de gammes<br><em>pour explorer.</em>',
      intro: 'Les deux modules partagent la même bibliothèque : 52 définitions publiques de gammes distinctes, dont 48 réunies dans le catalogue maximal de reconnaissance.',
      stats: [['52', 'définitions publiques'], ['48', 'candidates à la reconnaissance'], ['25', 'gammes exotiques']],
      groups: [
        ['Gammes fondamentales', 'Majeure, mineure naturelle, mineure harmonique, mineure mélodique ascendante.'],
        ['Modes majeurs', 'Ionien, dorien, phrygien, lydien, mixolydien, éolien, locrien.'],
        ['Modes de la mineure harmonique', 'Modes 1 à 7.'],
        ['Modes de la mineure mélodique ascendante', 'Modes 1 à 7.'],
        ['Pentatoniques', 'Majeure, mineure.'],
        ['Symétriques et jazz', 'Tons entiers, octatonique ton-demi-ton, octatonique demi-ton-ton, augmentée.'],
        ['Blues et bebop', 'Blues mineure, blues majeure, bebop dominante, bebop majeure, bebop dorienne.'],
        ['Familles majeure/mineure rares', 'Majeure harmonique, double harmonique majeure, mineure hongroise, dorienne ukrainienne, napolitaine majeure, napolitaine mineure.'],
        ['Couleurs orientales occidentalisées', 'Persane, arabe, phrygienne espagnole, orientale, égyptienne.'],
        ['Japonaises', 'Hirajoshi, Insen, Iwato, Yo, Kumoi.']
      ]
    },
    steps: [['Choisissez une tonalité', 'Partez du cercle, d’une gamme ou de quelques notes.'], ['Écoutez les possibilités', 'Faites défiler les accords, les notes et les couleurs.'], ['Gardez ce qui sonne juste', 'Mémorisez, enchaînez et jouez vos trouvailles.']],
    features: [
      ['Gammes & accords', 'Construisez votre terrain de jeu.', 'Choisissez une fondamentale et un mode, puis voyez instantanément les notes, les accords diatoniques et le clavier prendre vie. Une base nette pour composer sans hésiter.', 'Gammes et accords dans OD HarmoTools', 'Construire une gamme et voir son harmonie.'],
      ['Recherche de gamme', 'Une idée en tête ? Trouvez son univers.', 'Sélectionnez vos notes, laissez HarmoTools révéler les gammes candidates et ouvrez immédiatement celles qui méritent votre oreille.', 'Recherche de gammes par notes sélectionnées', 'Retrouver une couleur tonale à partir de ses notes.'],
      ['Nom d’accord', 'Du symbole au son, sans détour.', 'Entrez un accord et inspectez sa matière : notes, disposition sur le clavier et identité harmonique. Idéal pour vérifier une intuition ou enrichir une progression.', 'Saisie d’un symbole d’accord dans OD HarmoTools', 'Lire un symbole d’accord et visualiser ses notes.'],
      ['Recherche d’accord', 'Jouez les notes. Laissez parler l’accord.', 'Le clavier devient un détecteur d’harmonies : noms possibles, renversements et orthographes se présentent clairement pour accélérer l’analyse.', 'Recherche d’accords à partir de notes jouées', 'Reconnaître un accord depuis le clavier.'],
      ['Cercle des quintes', 'La carte qui relie toutes vos tonalités.', 'Visualisez les armures, relatives mineures et degrés d’un seul regard. Cliquez, écoutez, basculez de mode, puis ouvrez le panneau latéral repliable pour créer une progression d’accords directement depuis le cercle.', 'Cercle des quintes interactif avec panneau repliable de progression d’accords dans OD HarmoTools', 'Explorer le cercle des quintes et créer une progression d’accords depuis son panneau latéral.'],
      ['Fréquences', 'Chaque note a sa précision.', 'Reliez instantanément nom, octave et fréquence. Un repère fiable pour la synthèse, l’accordage et tous les détails qui comptent.', 'Calcul des fréquences de notes', 'Des fréquences exactes pour chaque note.'],
      ['Tessitures', 'Placez vos idées dans le bon registre.', 'Comparez les plages de fréquences et les tessitures instrumentales pour écrire avec plus de justesse, du grave au très aigu.', 'Tessitures et plages de fréquences instrumentales', 'Visualiser les tessitures instrumentales.'],
      ['Vos favoris', 'Vos gammes, toujours prêtes.', 'Conservez les univers qui vous inspirent et revenez-y d’un geste. Votre espace s’organise autour de votre propre palette musicale.', 'Page d’accueil avec les gammes favorites', 'Garder ses couleurs tonales préférées à portée de main.'],
      ['Séquenceur aléatoire', 'Laissez le hasard écrire la première idée.', 'Créez des motifs évolutifs de 4 à 64 pas. Utilisez n’importe quelle gamme ou une sélection personnalisée de notes saisies à la souris ou avec un clavier MIDI, mémorisez jusqu’à six séquences, puis exportez-les en MIDI pour votre DAW.', 'Séquenceur aléatoire réglable sur la page d’accueil', 'Générer, mémoriser et exporter une séquence MIDI aléatoire.'],
      ['Séquenceur d’accords', 'Faites avancer la progression.', 'Mémorisez vos accords, réglez le tempo, le gate, le strum et l’instrument. Puis écoutez la progression respirer avant de l’emmener plus loin.', 'Séquenceur d’accords sur la page d’accueil', 'Jouer et façonner une progression d’accords.'],
      ['Réglages audio', 'Un espace qui vous écoute.', 'Choisissez votre SoundFont, votre sortie audio et vos réglages de préécoute. HarmoTools s’accorde à votre studio, pas l’inverse.', 'Réglages audio et apparence', 'Personnaliser l’écoute et l’ambiance de travail.'],
      ['MIDI & diagnostic', 'Branchez, jouez, explorez.', 'Connectez un clavier MIDI, surveillez l’activité et gardez le contrôle sur la configuration. Une passerelle directe entre vos doigts et vos idées.', 'Réglages MIDI et diagnostic', 'Connecter l’entrée MIDI et garder le contrôle.'],
      ['Guide intégré', 'Avancez avec les bonnes réponses.', 'Le manuel accompagne l’application pour que chaque fonctionnalité reste accessible, de la première gamme à votre prochaine progression.', 'À propos et manuel utilisateur', 'Une documentation claire, disponible dans l’application.']
    ]
  }
};

let revealObserver;
const imagePath = (file) => `ScreenShots/${file}`;
const scaleSupportMarkup = (scaleSupport) => `<section class="scale-support section-shell reveal" aria-label="${scaleSupport.eyebrow}"><div class="scale-support-intro"><p class="eyebrow">${scaleSupport.eyebrow}</p><h3>${scaleSupport.heading}</h3><p>${scaleSupport.intro}</p><dl class="scale-stats">${scaleSupport.stats.map(([number, label]) => `<div><dt>${number}</dt><dd>${label}</dd></div>`).join('')}</dl></div><div class="scale-support-content"><div class="scale-groups">${scaleSupport.groups.map(([name, scales]) => `<article><h4>${name}</h4><p>${scales}</p></article>`).join('')}</div></div></section>`;
const featureMarkup = (feature, index, midiExport) => {
  const [eyebrow, heading, description, alt, caption] = feature;
  const image = imagePath(screenshots[index + 1]);
  const reverse = index % 2 === 1 ? ' feature-reverse' : '';
  const featureHtml = `<article class="feature section-shell${reverse} reveal"><div class="feature-number">${String(index + 1).padStart(2, '0')}</div>${reverse ? `<button class="screenshot image-frame" data-image="${image}" data-caption="${caption}" aria-label="${caption}"><img src="${image}" alt="${alt}"></button>` : ''}<div class="feature-content"><p class="eyebrow">${eyebrow}</p><h3>${heading}</h3><p>${description}</p></div>${!reverse ? `<button class="screenshot image-frame" data-image="${image}" data-caption="${caption}" aria-label="${caption}"><img src="${image}" alt="${alt}"></button>` : ''}</article>`;
  if (index !== 9) return featureHtml;

  const [exportEyebrow, exportHeading, exportDescription, exportAlt, exportCaption] = midiExport;
  const exportImage = imagePath('10B-ChordImportAbleton.png');
  return `${featureHtml}<article class="feature feature-followup section-shell feature-reverse reveal"><div class="feature-number">MIDI</div><button class="screenshot image-frame" data-image="${exportImage}" data-caption="${exportCaption}" aria-label="${exportCaption}"><img src="${exportImage}" alt="${exportAlt}"></button><div class="feature-content"><p class="eyebrow">${exportEyebrow}</p><h3>${exportHeading}</h3><p>${exportDescription}</p></div></article>`;
};

function render(language) {
  const t = content[language];
  document.documentElement.lang = language;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('#navigation').innerHTML = `<a href="#tools">${t.nav[0]}</a><a href="#journey">${t.nav[1]}</a><a class="nav-cta" href="#support">${t.nav[2]}</a>`;
  document.querySelector('#site-content').innerHTML = `
    <section class="hero section-shell"><div class="hero-copy reveal"><p class="eyebrow">${t.heroEyebrow}</p><h1>${t.hero}</h1><p class="hero-text">${t.heroText}</p><div class="hero-actions"><a class="button button-primary" href="https://www.dropbox.com/scl/fo/iadlivo97x9hukvjzwpe2/AFfq22me4XuTWIwW6AVAho8?rlkey=fbebfs3q4hlbw9xr5cmm4q097&dl=0" target="_blank" rel="noopener noreferrer">${t.download}</a><div class="coffee-button-holder hero-donation" data-bmc-button aria-label="${t.donateLabel}"></div><a class="text-link" href="#tools">${t.primary}</a><a class="text-link" href="#journey">${t.secondary}</a></div><p class="hero-donation-note">${t.donationNote}</p><dl class="hero-facts">${t.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl></div><button class="hero-visual reveal screenshot image-frame" data-image="${imagePath(screenshots[0])}" data-caption="${t.heroCaption}" aria-label="${t.heroCaption}"><img src="${imagePath(screenshots[0])}" alt="${t.features[0][3]}"><span class="hero-caption">${t.heroCaption}</span></button></section>
    <section class="manifesto section-shell reveal"><p class="eyebrow">${t.manifestoEyebrow}</p><h2>${t.manifesto}</h2><p>${t.manifestoText}</p></section>
    <section class="tools" id="tools"><div class="section-shell section-intro reveal"><p class="eyebrow">${t.toolsEyebrow}</p><h2>${t.tools}</h2></div>${t.features.slice(0, 2).map((feature, index) => featureMarkup(feature, index, t.midiExport)).join('')}${scaleSupportMarkup(t.scaleSupport)}${t.features.slice(2).map((feature, index) => featureMarkup(feature, index + 2, t.midiExport)).join('')}</section>
    <section class="journey section-shell reveal" id="journey"><p class="eyebrow">${t.journeyEyebrow}</p><h2>${t.journey}</h2><ol>${t.steps.map(([heading, body], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${heading}</strong><p>${body}</p></li>`).join('')}</ol></section>
    <section class="support section-shell reveal" id="support"><div class="support-intro"><p class="eyebrow">${t.supportEyebrow}</p><h2>${t.support}</h2><p>${t.supportText}</p><a class="button button-primary" href="https://www.dropbox.com/scl/fo/iadlivo97x9hukvjzwpe2/AFfq22me4XuTWIwW6AVAho8?rlkey=fbebfs3q4hlbw9xr5cmm4q097&dl=0" target="_blank" rel="noopener noreferrer">${t.download}</a></div><aside class="donation-card"><p class="eyebrow">DonationWare</p><h3>${t.donateTitle}</h3><p>${t.donateText}</p><div class="coffee-button-holder" data-bmc-button aria-label="${t.donateLabel}"></div></aside></section>
    <section class="closing section-shell reveal" id="start"><p class="eyebrow">${t.closingEyebrow}</p><h2>${t.closing}</h2><p>${t.closingText}</p><a class="button button-primary" href="#top" data-back-to-top>${t.top}</a></section>`;
  document.querySelector('#footer').innerHTML = t.footer.map(item => `<span>${item}</span>`).join('');
  document.querySelector('.lightbox-close').textContent = t.close;
  document.querySelectorAll('.language-option').forEach(button => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  bindLightbox();
  bindBackToTop();
  loadDonationButtons();
}

let donationWidgetLoading;

function renderDonationButtons() {
  if (!window.bmcBtnWidget) return;
  document.querySelectorAll('[data-bmc-button]').forEach((holder) => {
    holder.innerHTML = window.bmcBtnWidget('Buy me a coffee', 'knhsynths', '#FF5F5F', '☕', 'Lato', '#ffffff', '#000000', '#FFDD00');
  });
}

function loadDonationButtons() {
  if (window.bmcBtnWidget) {
    renderDonationButtons();
    return;
  }
  if (donationWidgetLoading) return;
  donationWidgetLoading = true;
  const script = document.createElement('script');
  script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
  script.type = 'text/javascript';
  script.onload = renderDonationButtons;
  document.head.append(script);
}

const lightbox = document.querySelector('.lightbox');
const bindLightbox = () => document.querySelectorAll('.screenshot').forEach((button) => button.addEventListener('click', () => { const image = button.querySelector('img'); lightbox.querySelector('img').src = button.dataset.image; lightbox.querySelector('img').alt = image.alt; lightbox.querySelector('p').textContent = button.dataset.caption; lightbox.showModal(); }));
const bindBackToTop = () => {
  const button = document.querySelector('[data-back-to-top]');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
document.querySelectorAll('.language-option').forEach(button => button.addEventListener('click', () => { render(button.dataset.language); window.scrollTo({ top: 0, behavior: 'smooth' }); }));

const progress = document.querySelector('.reading-progress span');
const updateProgress = () => { const height = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`; };
window.addEventListener('scroll', updateProgress, { passive: true });
render('en');
updateProgress();
