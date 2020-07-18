const {Question: Questions} = require('../../index');

module.exports = [new Questions({
    text: 'Im Folgenden Bild kann man eine Blickdiagnose stellen, nämlich…?',
    answers: [
        'die Luft unter der Zwerchfellkuppel spricht für eine Perforation eines Hohlorgans',
        'Koprostase',
        'Darmschlingen aufgebläht mit Flüssigkeitsspiegel = v.a. Ileus'
    ],
    correct: [2]
})];
