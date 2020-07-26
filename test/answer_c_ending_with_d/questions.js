const {Question} = require('../../index');

module.exports = [
    new Question({
        text: 'Was macht ein akuter MI nicht?',
        answers: [
            'Perikardtamponade',
            'VSD',
            'ASD',
            'kardiogener Schock',
            'Herzinsuffizienz'
        ],
        correct: [ 2 ]
    })
]

