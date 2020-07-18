'use strict'
const fs = require('fs');

const debug = false;

class Question {
    constructor(data = {}) {
        this.text = data.text || '';
        this.answers = data.answers || [];
        this.correct = data.correct || [];
    }
}

function findAnswers(rawQuestion, question) {
    let answerId = 0;
    for (let i = 2; i < 7; i++) {
        let questionText = rawQuestion[i]

        if (questionText) {
            questionText.split(/\n/g).forEach((line) => {
                if (/^[Xx]$/g.test(line))
                    question.correct.push(answerId);
            });
            question.answers.push(questionText.replace(/\n+[xX]*\n*$/, ''))
            answerId++;
        }
    }
}

function findQuestions(text) {
    text = text.replace(/\r/g, '');
    let rawQuestion;
    const regex = new RegExp('\\d+\\.([\\s\\S]*?)(?:A\\n)([\\s\\S]*?)(?:B\\n)([\\s\\S]*?)(?:C\\n)([\\s\\S]*?)(?:D\\n)([\\s\\S]*?)(?:E\\n)(\\D[\\s\\S]+?\\n([xX]\\n)?)?', 'g');
    const rawQuestions = text.matchAll(regex);
    const questions = [];

    for (rawQuestion of rawQuestions) {
        let question = new Question();
        question.text = rawQuestion[1].replace(/^\n/, '').replace(/\n$/, '');
        findAnswers(rawQuestion, question);

        questions.push(question);
    }
    return questions;
}

function createOutputString(questions) {
    let outString = '';

    questions.forEach((question) => {
        outString += question.text + '\n\n';
        for (let i = 0; i < question.answers.length; i++) {
            if (question.answers[i]) {
                outString += `* ${question.answers[i]} `
                if (question.correct.includes(i)) {
                    outString += 'x'
                }
                outString += '\n';
            }
        }
        outString += '\n\n'
    });
    return outString;
}

function prepareFile(text) {
    // Remove tabs
    text = text.replace(/\t/g, '');
    // Remove [a] google comment annotations
    text = text.replace(/(\[\S{1,2}])/g, '')
    // Remove more than 1 newline - also convert from crlf to lf
    text = text.replace(/(\r*\n){2,}/g, '\n');

    return text;
}

function readFile(entry) {
    fs.readFile('in/' + entry, {encoding: "utf8"}, (err, content) => {
        const prepared = prepareFile(content);
        if (debug) {
            fs.writeFile('out/Prepared-' + entry, prepared, (err) => {
            })
        }
        const questions = findQuestions(prepared);
        const outString = createOutputString(questions);
        if (debug) {
            console.log(questions);
        }
        fs.writeFile('out/Formatted-' + entry, outString, (err) => {
        })
    });
}

if (!fs.existsSync('out')) {
    fs.mkdirSync('out');
}

if (!fs.existsSync('in')) {
    fs.mkdirSync('in');
}

fs.readdir('in', (err, list) => {
    list.forEach((entry) => {
        readFile(entry);
    })
})

module.exports = {
    findAnswers,
    findQuestions,
    createOutputString,
    prepareFile,
    readFile,
    Question
}
