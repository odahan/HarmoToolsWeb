document.documentElement.classList.add('js');

const screenshots = [
  '01-ScalesAndChords.png', '02.-ScalesAndChords-Chords.png', '03-ScaleFinder.png',
  '04-ChordName-input.png', '05-ChordFinder.png', '06-CircleOfFifths.png',
  '07-Frequencies-Compute.png', '07-Frequencies-Compute2.png', '07-Tone Generator.png',
  '08-Frequencies-Ranges.png', '09-HomeFavoriteScales.png', '10B-ChordImportAbleton.png',
  '10B1-DragnDropMidi.png', '10C-RandomSequencer.png', '10-D Metronome.png', '14-Audio Analysis 01.png',
  '14-Audio Analysis 02.png', '10-HomeChordSequencer.png', '11-Settings1.png',
  '12-Settings2.png', '13-About-UserManual.png'
];

const STORAGE_KEY = 'od-harmotools-language';
const DOWNLOAD_URL = 'https://github.com/odahan/HarmoTools.Release/releases';
const BMC_CDN = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
const BMC_INTEGRITY = 'sha384-hPKwNGJlXU41YiK3xwGvKODwz62yCVUnp9xIZl8K0FueN6vB44otT6/VqhPoWMks';
const BMC_PROFILE = 'knhsynths';

const content = {
  en: {
    title: 'OD HarmoTools — Harmony in motion', description: 'OD HarmoTools — scales, chords, MIDI sequencers, pitch CV, reference tones, audio and spectrum analysis, and a digital metronome.',
    nav: ['Tools', 'The flow', 'Download'], donateButtonText: 'Buy me a coffee', downloadNote: 'The latest version — always up to date.',
    heroEyebrow: 'The workspace for curious musicians', hero: 'Harmony<br><em>in motion.</em>', heroText: 'OD HarmoTools makes scales, chords and keys immediately playable, visible and connected.', primary: 'Discover the tools', download: 'Download the full version', secondary: 'See the flow', donationNote: 'Full version, not a demo. Available for unrestricted use; voluntary donations support ongoing development.', facts: [['For', 'Musicians & composers'], ['With', 'Audio, keyboard & MIDI'], ['Access', 'Unrestricted use']], heroCaption: 'From scale to chord, everything becomes tangible.',
    manifestoEyebrow: 'One tool, one instinct', manifesto: 'Less theory to look up.<br><em>More music to imagine.</em>', manifestoText: 'HarmoTools brings the essential landmarks of harmony into a calm, precise and unmistakably musical interface.', toolsEyebrow: 'Harmony, tuning and rhythm in one workspace', tools: 'Explore. Understand.<br><em>Make it sound.</em>',
    journeyEyebrow: 'A natural flow', journey: 'From curiosity<br>to progression.', supportEyebrow: 'Download & support', support: 'Make music.<br><em>Keep it moving.</em>', supportText: 'OD HarmoTools is DonationWare: the complete version is available for unrestricted use, and donations from the people who find it useful sustain its development.', download: 'Download the full version', donateTitle: 'Enjoying HarmoTools?', donateText: 'If it helps your musical practice, you can support its development with a coffee.', donateLabel: 'Support OD HarmoTools on Buy Me a Coffee', closingEyebrow: 'OD HarmoTools', closing: 'A little less<br>uncertainty. <em>A lot more harmony.</em>', closingText: 'A toolbox designed to keep your ear at the centre of every decision.', top: 'Back to the top', footer: ['OD HarmoTools', 'Practical Harmony for Musicians', '© 2026 Olivier Dahan'], close: 'Close',
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
      ['Pitch CV settings', 'Match the voltage to your synth.', 'Choose the Hz/V or V/Oct pitch CV standard, set the voltage assigned to C4 and adjust the A4 tuning reference. The conversions then follow your synthesizer’s pitch settings.', 'Pitch CV settings with the V/Oct standard, C4 voltage and A4 frequency reference', 'Set the pitch CV standard and C4 reference voltage.'],
      ['Frequencies & volts', 'Move between notes, hertz and volts.', 'Convert a note into its frequency and pitch control voltage, or find the nearest note from a frequency or voltage. Read the tuning offset in hertz and cents using your chosen CV settings.', 'Note, frequency and voltage conversions with nearest note and tuning offsets', 'Convert notes, frequencies and pitch voltages with your chosen reference.'],
      ['Reference tone', 'Give your synth a tuning reference.', 'Play a reference tone from the selected or nearest note to tune a synthesizer or VCO by ear. Choose the waveform and volume, then apply a new target when you are ready to change the reference pitch.', 'Reference tone generator with note selection, waveform, playback and volume controls', 'Play a reference tone to tune a synthesizer or VCO.'],
      ['Ranges', 'Put your ideas in the right register.', 'Compare frequency ranges and instrumental tessituras to write with greater accuracy, from the lowest notes to the highest.', 'Instrument ranges and frequency bands', 'Visualise instrumental ranges.'],
      ['Memories · Favourite scales', 'Your scales, ready whenever you are.', 'Keep the worlds that inspire you and return to them in one move. Your workspace organises itself around your own tonal palette.', 'Memories page with favourite scales', 'Keep favourite tonal colours within reach.'],
      ['MIDI export', 'Bring your progressions and sequences into your DAW.', 'Export chord progressions and Random Sequencer patterns as Standard MIDI Files (format 0) for use in your DAW. You can also transfer memories and sequences directly to Bitwig or Ableton Live with the new drag-and-drop feature shown below.', 'MIDI material exported from OD HarmoTools and imported into a DAW', 'Continue working on your HarmoTools progressions and sequences in your DAW.'],
      ['Direct MIDI drag and drop', 'From HarmoTools to your DAW in one gesture.', 'Drag a memory or sequence directly from HarmoTools into Bitwig or Ableton Live. This new feature lets you continue composing in your DAW without going through a temporary MIDI file on disk.', 'A chord memory dragged directly from HarmoTools into Bitwig', 'Drag and drop memories or sequences into Bitwig or Ableton Live without a temporary MIDI file on disk.'],
      ['Random sequencer', 'Let chance write the first draft.', 'Create evolving patterns from 4 to 64 steps. Use any scale or a custom selection of notes entered with the mouse or a MIDI keyboard, store up to six sequences, then export them as MIDI files for your DAW.', 'Dedicated Random Sequencer page with adjustable patterns', 'Generate, save and export a random MIDI sequence.'],
      ['Digital metronome', 'Keep a steady pulse.', 'Set the tempo in BPM or use Tap Tempo, follow the visual pulse and choose the beat accent, sound and volume. A reference for practising, rehearsing or checking a rhythmic idea.', 'Digital metronome with visual pulse, BPM, Tap Tempo, accent and sound controls', 'Practise with a visual and audible pulse at your chosen tempo.'],
      ['Audio analyzer · Pitch detection', 'See the note you are playing.', 'Analyze one note at a time from a microphone, USB microphone or ASIO audio interface. Read its measured frequency, note name and tuning offset in cents from the nearest in-tune note, using an adjustable A4 reference.', 'Audio analyzer showing the input device, measured frequency, detected note and tuning offset in cents', 'Identify a played note and check its tuning from a microphone or ASIO input.'],
      ['Audio analyzer · Spectrum', 'Find the fundamental in your sound.', 'Inspect the frequency spectrum in Hz and dBFS, with the detected fundamental marked on the graph. See the harmonics and freeze the spectrum to examine a stable measurement.', 'Audio spectrum in Hz and dBFS with a marked fundamental frequency and harmonic peaks', 'Inspect the spectrum and locate the detected fundamental frequency.'],
      ['Chord sequencer', 'Let the progression move.', 'Save your chords, set tempo, gate, strum and instrument. Then hear the progression breathe before taking it further.', 'Chord sequencer in Memories', 'Play and shape a chord progression.'],
      ['Audio settings', 'A workspace that listens to you.', 'Choose your SoundFont, audio output and preview settings. HarmoTools adapts to your studio, never the other way around.', 'Audio and appearance settings', 'Personalise your sound and workspace.'],
      ['MIDI & diagnostics', 'Plug in, play, explore.', 'Connect a MIDI keyboard, monitor activity and stay in control of the setup. A direct bridge from your fingers to your ideas.', 'MIDI and diagnostic settings', 'Connect MIDI input and keep control.'],
      ['About & help', 'Move forward with the right answers.', 'The manual travels with the application, so every feature stays approachable — from the first scale to your next progression.', 'About page and user manual', 'Clear documentation, available from the app.']
    ]
  },
  fr: {
    title: 'OD HarmoTools — L’harmonie en mouvement', description: 'OD HarmoTools — gammes, accords, séquenceurs MIDI, CV de pitch, sons de référence, analyse audio et spectrale, et métronome digital.',
    nav: ['Les outils', 'Le parcours', 'Télécharger'], donateButtonText: 'Offrir un café', downloadNote: 'La dernière version — toujours à jour.',
    heroEyebrow: 'L’espace de travail des musiciens curieux', hero: 'L’harmonie<br><em>en mouvement.</em>', heroText: 'OD HarmoTools rend les gammes, les accords et les tonalités immédiatement jouables, visibles et reliés entre eux.', primary: 'Découvrir les outils', download: 'Télécharger la version complète', secondary: 'Voir le parcours', donationNote: 'Version complète, sans démo. Utilisation libre ; un don volontaire soutient le développement.', facts: [['Pour', 'Musiciens & compositeurs'], ['Avec', 'Audio, clavier & MIDI'], ['Accès', 'Utilisation libre']], heroCaption: 'De la gamme à l’accord, tout devient tangible.',
    manifestoEyebrow: 'Un outil, un réflexe', manifesto: 'Moins de théorie à chercher.<br><em>Plus de musique à imaginer.</em>', manifestoText: 'HarmoTools rassemble les repères essentiels de l’harmonie dans une interface calme, précise et résolument musicale.', toolsEyebrow: 'Harmonie, accordage et rythme dans un même espace', tools: 'Explorer. Comprendre.<br><em>Faire sonner.</em>',
    journeyEyebrow: 'Un parcours naturel', journey: 'De la curiosité<br>à la progression.', supportEyebrow: 'Télécharger & soutenir', support: 'Faites de la musique.<br><em>Faites-la vivre.</em>', supportText: 'OD HarmoTools est un logiciel DonationWare : la version complète est proposée en utilisation libre, et les dons de celles et ceux qui l’apprécient soutiennent son développement.', download: 'Télécharger la version complète', donateTitle: 'HarmoTools vous est utile ?', donateText: 'Si l’application accompagne votre pratique musicale, vous pouvez soutenir son développement avec un café.', donateLabel: 'Soutenir OD HarmoTools sur Buy Me a Coffee', closingEyebrow: 'OD HarmoTools', closing: 'Un peu moins<br>de doute. <em>Beaucoup plus d’harmonie.</em>', closingText: 'Une boîte à outils pensée pour garder l’oreille au centre de chaque décision.', top: 'Revenir au début', footer: ['OD HarmoTools', 'L’harmonie pratique pour les musiciens', '© 2026 Olivier Dahan'], close: 'Fermer',
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
      ['Réglages CV de pitch', 'Adaptez la tension à votre synthé.', 'Choisissez la norme de CV de pitch Hz/V ou V/Oct, définissez la tension attribuée au C4 (do central) et ajustez le diapason A4. Les conversions suivent ensuite les réglages de pitch de votre synthétiseur.', 'Réglages du CV de pitch avec norme V/Oct, tension du C4 et fréquence de référence du A4', 'Régler la norme de CV de pitch et la tension de référence du C4.'],
      ['Fréquences & volts', 'Passez des notes aux hertz et aux volts.', 'Convertissez une note en fréquence et en tension de contrôle de pitch, ou retrouvez la note la plus proche à partir d’une fréquence ou d’une tension. Lisez l’écart d’accordage en hertz et en cents selon vos réglages CV.', 'Conversions entre notes, fréquences et tensions avec note la plus proche et écarts d’accordage', 'Convertir notes, fréquences et tensions de pitch selon la référence choisie.'],
      ['Générateur de référence', 'Un repère sonore pour accorder votre synthé.', 'Écoutez un son de référence à partir de la note sélectionnée ou de la note la plus proche pour accorder à l’oreille un synthétiseur ou un VCO. Choisissez la forme d’onde et le volume, puis appliquez une nouvelle cible lorsque vous souhaitez changer la hauteur de référence.', 'Générateur de son de référence avec sélection de note, forme d’onde, lecture et volume', 'Écouter un son de référence pour accorder un synthétiseur ou un VCO.'],
      ['Tessitures', 'Placez vos idées dans le bon registre.', 'Comparez les plages de fréquences et les tessitures instrumentales pour écrire avec plus de justesse, du grave au très aigu.', 'Tessitures et plages de fréquences instrumentales', 'Visualiser les tessitures instrumentales.'],
      ['Mémoires · Gammes favorites', 'Vos gammes, toujours prêtes.', 'Conservez les univers qui vous inspirent et revenez-y d’un geste. Votre espace s’organise autour de votre propre palette musicale.', 'Page Mémoires avec les gammes favorites', 'Garder ses couleurs tonales préférées à portée de main.'],
      ['Export MIDI', 'Importez vos progressions et vos séquences dans votre DAW.', 'Exportez les progressions d’accords et les motifs du Séquenceur aléatoire au format MIDI standard 0 pour les utiliser dans votre DAW. Vous pouvez aussi transférer directement les mémoires et les séquences vers Bitwig ou Ableton Live grâce à la nouvelle fonction de glisser-déposer présentée ci-dessous.', 'Du matériel MIDI exporté depuis OD HarmoTools et importé dans un DAW', 'Poursuivre le travail sur vos progressions et séquences HarmoTools dans votre DAW.'],
      ['Glisser-déposer MIDI direct', 'De HarmoTools à votre DAW en un geste.', 'Glissez-déposez une mémoire ou une séquence directement depuis HarmoTools dans Bitwig ou Ableton Live. Cette nouvelle fonction permet de poursuivre la composition dans votre DAW sans passer par un fichier MIDI temporaire sur disque.', 'Une mémoire d’accords glissée directement depuis HarmoTools dans Bitwig', 'Glisser-déposer les mémoires ou les séquences dans Bitwig ou Ableton Live sans fichier MIDI temporaire sur disque.'],
      ['Séquenceur aléatoire', 'Laissez le hasard écrire la première idée.', 'Créez des motifs évolutifs de 4 à 64 pas. Utilisez n’importe quelle gamme ou une sélection personnalisée de notes saisies à la souris ou avec un clavier MIDI, mémorisez jusqu’à six séquences, puis exportez-les en MIDI pour votre DAW.', 'Page du Séquenceur aléatoire avec motifs réglables', 'Générer, mémoriser et exporter une séquence MIDI aléatoire.'],
      ['Métronome digital', 'Gardez une pulsation régulière.', 'Réglez le tempo en BPM ou utilisez le Tap Tempo, suivez la pulsation visuelle et choisissez l’accentuation, le son et le volume. Un repère pour travailler un morceau, répéter ou vérifier une idée rythmique.', 'Métronome digital avec pulsation visuelle, BPM, Tap Tempo, accentuation et réglages sonores', 'Travailler avec une pulsation visuelle et sonore au tempo choisi.'],
      ['Analyse audio · Détection de note', 'Visualisez la note que vous jouez.', 'Analysez une note à la fois depuis un micro, un micro USB ou une interface audio ASIO. Lisez sa fréquence mesurée, son nom et son écart en cents par rapport à la note juste la plus proche, selon un diapason A4 réglable.', 'Analyseur audio affichant le périphérique d’entrée, la fréquence mesurée, la note détectée et l’écart en cents', 'Identifier une note jouée et vérifier sa justesse depuis un micro ou une entrée ASIO.'],
      ['Analyse audio · Spectre', 'Repérez la fondamentale de votre son.', 'Examinez le spectre de fréquences en Hz et en dBFS, avec la fondamentale détectée indiquée sur le graphique. Observez les harmoniques et figez le spectre pour examiner une mesure stable.', 'Spectre audio en Hz et en dBFS avec fréquence fondamentale repérée et pics harmoniques', 'Examiner le spectre et repérer la fréquence fondamentale détectée.'],
      ['Séquenceur d’accords', 'Faites avancer la progression.', 'Mémorisez vos accords, réglez le tempo, le gate, le strum et l’instrument. Puis écoutez la progression respirer avant de l’emmener plus loin.', 'Séquenceur d’accords dans les Mémoires', 'Jouer et façonner une progression d’accords.'],
      ['Réglages audio', 'Un espace qui vous écoute.', 'Choisissez votre SoundFont, votre sortie audio et vos réglages de préécoute. HarmoTools s’accorde à votre studio, pas l’inverse.', 'Réglages audio et apparence', 'Personnaliser l’écoute et l’ambiance de travail.'],
      ['MIDI & diagnostic', 'Branchez, jouez, explorez.', 'Connectez un clavier MIDI, surveillez l’activité et gardez le contrôle sur la configuration. Une passerelle directe entre vos doigts et vos idées.', 'Réglages MIDI et diagnostic', 'Connecter l’entrée MIDI et garder le contrôle.'],
      ['À propos & aide', 'Avancez avec les bonnes réponses.', 'Le manuel accompagne l’application pour que chaque fonctionnalité reste accessible, de la première gamme à votre prochaine progression.', 'À propos et manuel utilisateur', 'Une documentation claire, disponible dans l’application.']
    ]
  }
};

let currentLanguage = 'en';
let revealObserver;
let donationWidgetLoading;
const lightbox = document.querySelector('.lightbox');
const nav = document.querySelector('#navigation');
const navToggle = document.querySelector('.nav-toggle');

const imagePath = (file) => `ScreenShots/${file}`;
const screenshotImageMarkup = (image, alt, { lazy = true } = {}) => `<span class="screenshot-crop"><img src="${image}" alt="${alt}"${lazy ? ' loading="lazy" decoding="async"' : ' loading="eager" fetchpriority="high" decoding="async"'}></span>`;
const screenshotButtonMarkup = (image, alt, caption) => `<button class="screenshot image-frame${image.endsWith('10B1-DragnDropMidi.png') ? ' screenshot-full' : ''}" data-image="${image}" data-caption="${caption}" aria-label="${caption}">${screenshotImageMarkup(image, alt)}</button>`;

const buildNav = (t) => `<a href="#tools">${t.nav[0]}</a><a href="#journey">${t.nav[1]}</a><a class="nav-cta" href="#support">${t.nav[2]}</a>`;
const buildDownloadNote = (t) => `<p class="download-note">${t.downloadNote}</p>`;
const buildDonationHolder = (t, extraClass = '') => `<div class="coffee-button-holder${extraClass}" data-bmc-button aria-label="${t.donateLabel}"><a class="bmc-fallback" href="https://www.buymeacoffee.com/${BMC_PROFILE}" target="_blank" rel="noopener noreferrer">${t.donateButtonText}</a></div>`;

const scaleSupportMarkup = (scaleSupport) => `<section class="scale-support section-shell reveal" aria-label="${scaleSupport.eyebrow}">
  <div class="scale-support-intro">
    <p class="eyebrow">${scaleSupport.eyebrow}</p>
    <h3>${scaleSupport.heading}</h3>
    <p>${scaleSupport.intro}</p>
    <dl class="scale-stats">${scaleSupport.stats.map(([number, label]) => `<div><dt>${number}</dt><dd>${label}</dd></div>`).join('')}</dl>
  </div>
  <div class="scale-support-content">
    <div class="scale-groups">${scaleSupport.groups.map(([name, scales]) => `<article><h4>${name}</h4><p>${scales}</p></article>`).join('')}</div>
  </div>
</section>`;

const featureMarkup = (feature, index) => {
  const [eyebrow, heading, description, alt, caption] = feature;
  const image = imagePath(screenshots[index + 1]);
  const reverse = index % 2 === 1 ? ' feature-reverse' : '';
  const number = String(index + 1).padStart(2, '0');
  const content = `<div class="feature-content"><p class="eyebrow">${eyebrow}</p><h3>${heading}</h3><p>${description}</p></div>`;
  const screenshot = screenshotButtonMarkup(image, alt, caption);
  return `<article class="feature section-shell${reverse} reveal"><div class="feature-number">${number}</div>${reverse ? screenshot : content}${reverse ? content : screenshot}</article>`;
};

const buildContent = (t) => `
  <section class="hero section-shell">
    <div class="hero-copy reveal">
      <p class="eyebrow">${t.heroEyebrow}</p>
      <h1>${t.hero}</h1>
      <p class="hero-text">${t.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${DOWNLOAD_URL}" target="_blank" rel="noopener noreferrer">${t.download}</a>
        ${buildDonationHolder(t, ' hero-donation')}
        <a class="text-link" href="#tools">${t.primary}</a>
        <a class="text-link" href="#journey">${t.secondary}</a>
        ${buildDownloadNote(t)}
      </div>
      <p class="hero-donation-note">${t.donationNote}</p>
      <dl class="hero-facts">${t.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
    </div>
    <button class="hero-visual reveal screenshot image-frame" data-image="${imagePath(screenshots[0])}" data-caption="${t.heroCaption}" aria-label="${t.heroCaption}">
      <span class="visual-brand" aria-hidden="true"><img src="ScreenShots/AppIcon.png" alt="" width="37" height="37"><span><strong>OD HarmoTools</strong><small>Harmony workspace</small></span></span>
      ${screenshotImageMarkup(imagePath(screenshots[0]), t.features[0][3], { lazy: false })}
      <span class="hero-caption">${t.heroCaption}</span>
    </button>
  </section>
  <section class="manifesto section-shell reveal">
    <p class="eyebrow">${t.manifestoEyebrow}</p>
    <h2>${t.manifesto}</h2>
    <p>${t.manifestoText}</p>
  </section>
  <section class="tools" id="tools">
    <div class="section-shell section-intro reveal">
      <p class="eyebrow">${t.toolsEyebrow}</p>
      <h2>${t.tools}</h2>
    </div>
    ${t.features.slice(0, 2).map((feature, index) => featureMarkup(feature, index)).join('')}
    ${scaleSupportMarkup(t.scaleSupport)}
    ${t.features.slice(2).map((feature, index) => featureMarkup(feature, index + 2)).join('')}
  </section>
  <section class="journey section-shell reveal" id="journey">
    <p class="eyebrow">${t.journeyEyebrow}</p>
    <h2>${t.journey}</h2>
    <ol>${t.steps.map(([heading, body], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${heading}</strong><p>${body}</p></li>`).join('')}</ol>
  </section>
  <section class="support section-shell reveal" id="support">
    <div class="support-intro">
      <p class="eyebrow">${t.supportEyebrow}</p>
      <h2>${t.support}</h2>
      <p>${t.supportText}</p>
      <a class="button button-primary" href="${DOWNLOAD_URL}" target="_blank" rel="noopener noreferrer">${t.download}</a>
      ${buildDownloadNote(t)}
    </div>
    <aside class="donation-card">
      <p class="eyebrow">DonationWare</p>
      <h3>${t.donateTitle}</h3>
      <p>${t.donateText}</p>
      ${buildDonationHolder(t)}
    </aside>
  </section>
  <section class="closing section-shell reveal" id="start">
    <p class="eyebrow">${t.closingEyebrow}</p>
    <h2>${t.closing}</h2>
    <p>${t.closingText}</p>
    <a class="button button-primary" href="#top" data-back-to-top>${t.top}</a>
  </section>`;

const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'fr' || stored === 'en' ? stored : null;
  } catch (e) {
    return null;
  }
};

const storeLanguage = (lang) => {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode or unavailable */ }
};

const detectLanguage = () => {
  const languages = navigator.languages || [navigator.language || 'en'];
  return languages.some((lang) => String(lang).toLowerCase().startsWith('fr')) ? 'fr' : 'en';
};

const setDocumentMeta = (t) => {
  document.documentElement.lang = currentLanguage;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  const og = (property, value) => { const el = document.querySelector(`meta[property="${property}"]`); if (el) el.setAttribute('content', value); };
  og('og:title', t.title);
  og('og:description', t.description);
  const twitter = (name, value) => { const el = document.querySelector(`meta[name="${name}"]`); if (el) el.setAttribute('content', value); };
  twitter('twitter:title', t.title);
  twitter('twitter:description', t.description);
  document.querySelector('.lightbox-close').textContent = t.close;
};

const syncLanguageButtons = (language) => {
  document.querySelectorAll('.language-option').forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
};

const bindRevealObserver = () => {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  elements.forEach((element) => revealObserver.observe(element));
};

const bindLightbox = () => document.querySelectorAll('.screenshot').forEach((button) => button.addEventListener('click', () => {
  const image = button.querySelector('.screenshot-crop img');
  lightbox.querySelector('img').src = button.dataset.image;
  lightbox.querySelector('img').alt = image.alt;
  lightbox.querySelector('p').textContent = button.dataset.caption;
  lightbox.showModal();
}));

const bindBackToTop = () => {
  const button = document.querySelector('[data-back-to-top]');
  if (button) button.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const renderDonationButtons = () => {
  if (!window.bmcBtnWidget) return;
  const text = currentLanguage === 'fr' ? content.fr.donateButtonText : content.en.donateButtonText;
  document.querySelectorAll('[data-bmc-button]').forEach((holder) => {
    holder.innerHTML = window.bmcBtnWidget(text, BMC_PROFILE, '#FF5F5F', '☕', 'Lato', '#ffffff', '#000000', '#FFDD00');
  });
};

const loadDonationButtons = () => {
  if (window.bmcBtnWidget) {
    renderDonationButtons();
    return;
  }
  if (donationWidgetLoading) return;
  donationWidgetLoading = true;
  const script = document.createElement('script');
  script.src = BMC_CDN;
  script.type = 'text/javascript';
  script.integrity = BMC_INTEGRITY;
  script.crossOrigin = 'anonymous';
  script.onload = renderDonationButtons;
  document.head.append(script);
};

const bindInteractions = () => {
  bindRevealObserver();
  bindLightbox();
  bindBackToTop();
  loadDonationButtons();
};

const render = (language) => {
  currentLanguage = language;
  const t = content[language];
  setDocumentMeta(t);
  document.querySelector('#navigation').innerHTML = buildNav(t);
  document.querySelector('#site-content').innerHTML = buildContent(t);
  document.querySelector('#footer').innerHTML = t.footer.map((item) => `<span>${item}</span>`).join('');
  syncLanguageButtons(language);
  bindInteractions();
};

const init = () => {
  const language = getStoredLanguage() || detectLanguage();
  currentLanguage = language;
  if (language === 'fr') {
    render('fr');
  } else {
    // The static English content is pre-rendered in index.html for SEO and no-JS users.
    setDocumentMeta(content.en);
    syncLanguageButtons('en');
    bindInteractions();
  }
  storeLanguage(language);
};

const closeNav = () => {
  nav.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

const initMobileNav = () => {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('nav-open')) {
      closeNav();
      navToggle.focus();
    }
  });
};

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
document.querySelectorAll('.language-option').forEach((button) => button.addEventListener('click', () => {
  closeNav();
  render(button.dataset.language);
  storeLanguage(button.dataset.language);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));

const progress = document.querySelector('.reading-progress span');
const updateProgress = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });

initMobileNav();
init();
updateProgress();
