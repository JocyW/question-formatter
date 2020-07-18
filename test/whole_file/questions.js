const {Question} = require('../../index');

module.exports = [
    new Question({
        text: 'Bild von Strickjacke: Zu welchem klinischen Bild passt das?',
        answers: ['Leiomyosarkom', 'Fibrosarkom', 'Plattenepithelkarzinom'],
        correct: [1]
    }),
    new Question({
        text: 'Bild zu den 5 Figuren mit Kardinalsymptomen der Entzündung, Zuordnung',
        answers: [
            'Zweite von links ist Calor',
            'das in der Mitte ist Tumor',
            'ganz rechts ist „Dolor“',
            'ganz links ist „Dolor“',
            'typisch für eine granulomatöse Entzündung'
        ],
        correct: [1]
    }),
    new Question({
        text: 'Mikrobild von Lunge - welche Phase der Lobärpneumonie ist das',
        answers: [
            'graue Hepatisation',
            'rote Hepatisation',
            'gelbe Hepatisation',
            'Anschoppung',
            'Lyse'
        ],
        correct: [3]
    }),
    new Question({
        text: 'Welche Untersuchung bei nicht-kleinzelligen Bronchialkarzinom zur Therapie',
        answers: ['EGFR', 'p53', 'myc', 'PDGFR', 'TrkA ?.'],
        correct: [0]
    }),
    new Question({
        text: 'Wo sind neutrophile Granulozyten zu finden',
        answers: [
            'fibrinöses Exsudat',
            'seröses Exsudat',
            'eitriges Exsudat',
            'schleimiges Exsudat',
            'hämorrhagisches Exsudat'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Was ist beim Ulcus nicht zu finden (welche Schicht)',
        answers: [
            'Fibrinoide Nekrose',
            'Granulationsgewebe',
            'granulomatöse Entzündung',
            'Narbengewebe',
            'Fibrinschorf'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Herzinfarkt - Histobild - zeitliche Einordnung, war aber ohne Beschriftung',
        answers: [
            'älter als 4 Wochen',
            'nicht jünger als 14 Tage',
            'mindestens 10-12h alt',
            'weniger als 4h',
            'ist ohne Makroskopie nicht beurteilbar'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Was trifft zu zur Einsendung von Präparaten',
        answers: [
            'es fordert die Pathologen heraus wenn man auf den Einsendeschein nix draufschreibt',
            'man kann ein Präparat, wo die Orientierung schwierig ist, mit bunten Fäden kennzeichnen',
            'ein schlecht ausgefüllter Einsendeschein fördert Kreativität und die Entfaltung der Persönlichkeit des Pathologen',
            'Skizzen sind nicht Hilfe führend',
            'Kontaktdaten des Arztes (Telefon, Pieper) sollten nicht mit auf den Schein'
        ],
        correct: [1]
    }),
    new Question({
        text: 'Was steht auf dem histopathologischen Befund nicht',
        answers: [
            'ausführliche Anamnese',
            'makroskopische Beurteilung',
            'Zuschnittprotokoll',
            'Mikroskopische Beurteilung',
            'Infos über durchgeführte Färbungen'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was stimmt zur Migration von Leukozyten',
        answers: [
            'Sialyl-Lewis X und E-Selektinen',
            'i-CAM1 ist auf ruhenden Endothelzellen zu finden',
            'P-Selektine sind auf T-Zellen zu finden',
            'Integrine bestehen aus zwei gleichen Einheiten',
            'PECAM-1'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Wie nennt man das, wenn sich Ösophagusepithel in Plattenepithel umwandelt aufgrund von Reflux?',
        answers: ['Metaplasie', 'Hyperplasie', 'Atypie', 'Dyplasie'],
        correct: [0]
    }),
    new Question({
        text: 'Bild was ist das?',
        answers: [
            'im Unterlappen Lobärpneumonie mit gelber Hepatisation',
            'im Oberlappen Lobärpneumonie mit roter Hepatisation',
            'im Oberlappen hämorrhagischer Infarkt',
            'Im Unterlappen anämischer Infarkt',
            'im Oberlappen….'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Eine Hyperplasie ist typischerweise gekennzeichnet durch',
        answers: [
            'Zunahme der Zellzahl',
            'immer irreversibel',
            'geht mit einer Entartung der Zellen einher',
            'Wachstum von Gewebe an dafür nicht vorgesehenem Ort ? (ging in Richtung Metaplasie glaub)'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Eine Atrophie...',
        answers: [
            'ist immer pathologisch',
            'ist immer irreversibel',
            'kann mit Einlagerung von Lipofuszin einhergehen',
            'tritt nur im hohen Alter auf',
            'geht immer mit Abnahme der Zellzahl einher (oder so)'
        ],
        correct: [2]
    }),
    new Question({
        text: 'welche DD kommt in Betracht?',
        answers: [
            'Uterus myomatosus',
            'Uterus lipomatosus',
            'Fibrosarkom',
            'Adenokarzinom des Corpus uteri',
            'Plattenepithelkarzinom'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was stimmt zu Atherosklerose?',
        answers: [
            'eine frühe Manifestation ist lipoide Plaque',
            'eine frühe Manifestation ist kalzifizierende Plaque → da war aber noch was zu später Manifestation',
            'auf dem Bild sieht man eine Mediacalzifizierung vom Typ Mönckeberg',
            'führt häufig  zu einem Aneurysma spurium der Bauchaorta suprarenal',
            'Das Virchow Trias spielt keine Rolle beim Pathomechanismus'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Alte Frau, bettlägerig, hat eine Exzikose, bekommt tiefe Beinvenenthrombose. Was von der Virchow-Trias liegt zugrunde?',
        answers: [
            'Venöser Rückstrom (bzw. verlangsamter Blutfluss) und Änderung der Blutzusammensetzung',
            'nur Änderung der Blutzusammensetzung',
            'Änderungen des Blutdrucks',
            'nur Änderung der Hämodynamik',
            'Erhöhung der Gerinnungsfaktoren oder so? (irgendwas mit erhöhter Gerinnung)'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Hodentorsion - was liegt vor?',
        answers: [
            'Stagnationsthrombus mit hämorrhagischer Infarzierung',
            'Stagnationsthrombus und anämischer Infarkt',
            'Stagnationsthrombus mit hämorrhagischer Infarkt',
            'Parietalthrombus mit anämischen Infarkt',
            'Parietalthrombus mit hämorrhagischen Infarkt'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Welche Aussage trifft zu?',
        answers: [
            'der anämische Lungeninfarkt ist häufiger als der hämorrhagische',
            'wenn ein anämischer Infarkt stattfindet, bringt das die ursprüngliche Farbe des Gewebes hervor',
            'Koagulationsnekrose des Pankreasparenchyms bleibt immer lokal begrenzt und komplikationslos',
            'wenn eine großkalibrige Vene durch eine Verwachsung abgedrückt wird, entsteht ein hämorrhagischer Infarkt des Darmes (wäre das nicht gerade die Infarzierung?) Stand da nicht Arterie?safe vene, sicher vene',
            'bei Thrombus (?) in einer größeren Nierenarteriole kann es zu Kolliquationsnekrose kommen'
        ],
        correct: [1, 3]
    }),
    new Question({
        text: 'Mikrobild - was stimmt?',
        answers: [
            'Es heißt Versilberung weil es in HE-Färbung glänzt',
            'Bild zeigt typische gleichmäßige Septierung von Candida',
            'Für Aspergillus spricht dichotome Aufzweigung in 45 Grad Winkel',
            'im Hintergrund ist eindeutig Schleimhautepithel vom Colon  erkennbar, deswegen ist….'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Makrobild von Herz - in Obduktion entnommen  - was stimmt?',
        answers: [
            'die dargestellte Veränderung hat wahrscheinlich nicht unmittelbar zum Tode geführt',
            'Eine Artheriosklerose kann für den Befund nicht ursächlich sein (ist ausgeschlossen)',
            'dilatative Kardiomyopathie',
            'Hyperkontraktionsbänder in der Histo werden erwartet',
            'Im Frontalschnitt barocke Silhouette zu sehen'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Makrobild der Niere - was ist kein Malignitätskriterium zu diesem Tumor\n' +
            'nicht das original, kommt dem aber sehr nahe (frage wurde nicht gewertet)',
        answers: [
            'Tumor ist sehr groß',
            'Tumor wächst in umliegendes Gewebe ein',
            'bunte Schnittfläche',
            'unscharfe Begrenzung',
            'Tumor Metastase im perinephritischen Fettgewebe'
        ],
        correct: [4]
    }),
    new Question({
        text: 'Altfrage mit Bild von Lungentumor: Was ist keine lokale Folge des Tumors?',
        answers: [
            'Tumorkachexie',
            'Fistelbildung',
            'Asphyxie durch Verlegung d. Atemwege',
            'Lokale Blutungen'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Altfrage Adenokarzinom, was in Lymphknoten metastasiert hat und auch in die Leber (Bild vom Lymphknoten war gegeben)',
        answers: ['T4 N1 M1', 'T4 N2 M1', 'T4 N0 M0', 'T3 N1 M1', 'T3 N2 M1'],
        correct: [0]
    }),
    new Question({
        text: 'Bild von Riesenzelle (ist nicht dasselbe Bild, sah aber ähnlich aus) - wo findet man diese Zellen?',
        answers: [
            'granulomatöse Entzündung',
            'granulierende Entzündung',
            'Sind nach irgendeinem Virchow benannt. Rudolf? Richard?',
            'Ist nicht typisch für ein Tuberkulosegranulom'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was stimmt zu Adenomen?',
        answers: [
            'haben histologisch viele unterschiedliche Wuchsmuster',
            'bilden häufig verhornende Strukturen',
            'enthalten selten schleimiges Sekret',
            'häufig findet man Verhornungen im Schnittbild'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was ist richtig zu Metastasierung?',
        answers: [
            'Caecum-Adenom metastasiert über Portalvene in Leber',
            'tiefes Rektumkarzinom metastasiert über Portalvene in Leber (ist B nicht richtig ? -->Tiefes Rektumkarzinom metastasiert über Vena Cava in die Lunge) Wieso das? Blut aus den oberen Teilen des Rektums fließt in die Portalvene oder nicht?',
            'Karzinom des Colon transversum metastasiert über die Vena Cava in die Lunge',
            'Sigmoid CA metastasiert irgendwie in die paravertebralen Gefäße? (lumbal?)'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was bedeutet R1?',
        answers: [
            'es ist noch Tumor am Schnittrand (mikroskopische) vorhanden',
            'sehr maligne',
            'der Tumor ist gut differenziert'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was bedeutet G1?',
        answers: [
            'hochdifferenziert, dem Ursprungsgewebe sehr ähnlich',
            'Ursprungsgewebe kaum noch zu erkennen',
            'Mikroskopisch kann man sehen, das noch Tumor im Pat zurückbleibt',
            'Starkes Malignitätskriterium'
        ],
        correct: [0]
    }),
    new Question({
        text: 'T3 im Bezug auf Intestinaltrakt - was bedeutet T3?',
        answers: [
            'hoch/niedrig differenzierte Zellen',
            'es befällt mehrere Wandschichten des Organs aber noch keine anderen Organe',
            'es infiltriert schon andere Organe',
            'es geht nur bis in die Submukosa'
        ],
        correct: [1]
    }),
    new Question({
        text: 'Mikrobild - was ist kein Malignitätskriterium (histologisch)?',
        answers: [
            'unregelmäßige Chromatisierung',
            'Anisonukleose',
            'Verschiebung der Zellplasma-Zellkern Relation zugunsten des Zellplasmas',
            'Pleiomorphie',
            'vergrößerte Zellen'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Zottenherz bei Patient der eine Herz-OP bekommen hat, ca. 80 Jahre alt',
        answers: [
            'entsteht aus firbinreichen Transsudat (aus dem Herzbeutel glaube ich), das ist auf jeden Fall falsch, weil er andeutete, dass Begriffe hier seeehr wichtig sind (und es ist ja kein Transsudat)',
            'eine seröse pericarditis ist verantwortlich dafür (laut Vorlesung Entzündung 5 glaub ich, kann auch eine anliegende Entzündung verantwortlich sein, es wird explizit auf Perikard verwiesen!) => pericarditis sicca führt zum zottenherz\n' +
            '→ aber ich denke das ist ne fibrinöse Entzündung, keine seröse',
            'Sowohl die OP, als auch ein Herzinfarkt können ursächlich für den Befund sein (der Arzt meinte zu mir das ist die richtige Antwort, das mit Transsudat meinte er ist definitiv falsch, die Begriffe Exsudat vs. Transsudat seien ihnen sehr wichtig)',
            'Ist normal für sein Alter',
            'fibrinhaltiges Transsudat'
        ],
        correct: [2]
    }),
    new Question({
        text: 'Eine eitrige Ansammlung zwischen dem visceralen und parietalen Blatt der Lunge wird wie bezeichnet?',
        answers: ['Nekrose', 'Gangrän', 'Phlegmone', 'Empyem', 'Abzess'],
        correct: [3]
    }),
    new Question({
        text: 'Embolie- was ist richtig?',
        answers: [
            'Thrombus in A. mesenterica aufgrund tiefe Beinvenenthrombose entspricht nicht die Definition von paradoxen Embolien (oder so ähnlich) die Aussage ist falsch. Tiefer beinvenenthrombus geht ins rechte Herz. Nur bei offenem foramen ovale kann es in den großen Kreislauf gehen und in die mesenterica superior. Offenes foramen ovale ist bei paradoxer embolie.',
            'nach OP Fettembolie nicht möglich',
            'eine Pulmonalarterienembolie ist eine seltene venöse Embolie',
            'arterielle Embolie ist eine häufige Komplikation einer Endokarditis',
            'Luftembolie ist eine Großstadtlegende und kann bei schlecht entlüfteten Injektionsbesteck nicht vorkommen'
        ],
        correct: [3]
    }),
    new Question({
        text: 'alt-Frage zu Tumornamensgebung',
        answers: [
            'maligne Neoplasie von Lymphozyten ausgehend nennt man Lymphom',
            'benigne mesenchymale Tumore nennt man Sarkome',
            'Karzinom und Neoplasie sind Synonyme',
            'maligne Neoplasie epithelialer Herkunft nennt man Papillom',
            'Dysplasie ist das gleiche wie Atypie'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was stimmt zu Plattenepithelkarzinom',
        answers: [
            'intrazelluläre Brückenbildung und Verhornung',
            'Ein Fund außerhalb des Respirationstraktes und oberen Gastrointestinaltraktes ist eine Rarität',
            'wachsen nahezu nie als solide Zapfen',
            'ein durch Anpassung entstandenes Plattenepithel kann nie maligne mutieren oder so?? → aus plattenepithelmetaplasie kann nichts malignes werden',
            'es sich oft Drüsen zu finden'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Was ist laut Terminologie richtig? (ist das hier nicht Frage 36? Leiomyosarkom gabs doch nirgendwo zur Auswahl oder hab ich was verpasst?, dafür haben die doch jetzt Uterus Myo… eingeführt)',
        answers: [
            'Maligne Tumore der glatten muskulatur nennt mein Leiomyosarkom',
            'Niwas mit osteosarkom',
            'benigne mesenchymale Tumore nennt man Sarkome',
            'iwas mitknorpel',
            'maligne Neoplasie von quergestreifter Muskulatur ist Rhabdomyom'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Kaposi-Sarkom-Erreger',
        answers: [
            'Herpes Virus 8',
            'CMV',
            'EBV',
            'HIV',
            'Humanes Papillomavirus Typ 16'
        ],
        correct: [0]
    }),
    new Question({
        text: 'Bei dem vorliegenden Bild eines malignen Tumors spricht am ehesten welches Merkmal für Malignität',
        answers: [
            'invasives Tumorwachstum',
            'Isoforme Zellen',
            'homogene Chromatisierung',
            'da war Mönch irgendwas mit organaufbau',
            'organoide Anordnung'
        ],
        correct: [0]
    })
]
