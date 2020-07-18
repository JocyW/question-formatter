const {Question} = require('../../index');

module.exports = [
    new Question({
        text: 'Was hat für den Patienten die höchste Strahlenbelastung?',
        answers: [
            'CT Thorax',
            'CT Abdomen',
            'Mammographie',
            'Röntgen Thorax',
            'Röntgen Abdomen'
        ],
        correct: [1]
    })
]
