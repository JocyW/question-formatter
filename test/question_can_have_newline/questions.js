const {Question} = require('../../index');

module.exports = [
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
    })
]
