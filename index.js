'use strict'
const fs = require('fs');

class Question {
    constructor(data = {}) {
        this.text = data.text || '';
        this.answers = data.answers || [];
        this.correct = data.correct || [];
    }
}

function findQuestions(text) {
    text = text.replace(/\r/g, '');
    let rawQuestion;
    const regex = new RegExp('\\d+\\.([\\s\\S]*?)(?:A\\n)([\\s\\S]*?)(?:B\\n)([\\s\\S]*?)(?:C\\n)([\\s\\S]*?)(?:D\\n)([\\s\\S]*?)(?:E\\n)([\\s\\S]*?)(?:\\n[xX]\\n)?', 'g');
    const rawQuestions = text.matchAll(regex);
    const questions = [];

    for (rawQuestion of rawQuestions) {
        let question = new Question();
        question.text = rawQuestion[1].replace(/^\n/,'').replace(/\n$/,'')
        for (let i = 2; i < 7; i++) {
            let questionText = rawQuestion[i]
            questionText.split(/\n/g).forEach((line) => {
                if (/[xX]$/g.test(line))
                    question.correct.push(i - 2);
            });
            question.answers.push(questionText.replace(/\n+[xX]*\n*$/, ''))
        }
        questions.push(question);
    }
    return questions;
}

function writeOutputFile(questions, fileName) {
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

    fs.writeFile('out/Formatted-' + fileName, outString, (err) => {
    })
}

function prepareFile(text){
    // Remove tabs
    text = text.replace(/\t/g,'');
    // Remove [a] google comment annotations
    text = text.replace(/(\[\S{1,2}])/g,'')
    // Remove more than 1 newline - also convert from crlf to lf
    text = text.replace(/(\r*\n){2,}/g,'\n');
    return text;
}

function readFile(entry) {
    fs.readFile('in/' + entry, {encoding: "utf8"}, (err, content) => {
        const prepared = prepareFile(content);
        const questions = findQuestions(prepared);
        writeOutputFile(questions, entry);
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
