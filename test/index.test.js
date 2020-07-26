const index = require('../index');
const fs = require('fs');
const assert = require('assert');

const {
    findAnswers,
    findQuestions,
    createOutputString,
    prepareFile,
    readFile,
    Question
} = index;

const testCase = (folderName) => {
    const inText = fs.readFileSync('test/' + folderName +'/in.txt').toString();
    const prepared = fs.readFileSync('test/' + folderName +'/prepared.txt').toString();
    const questions = require('./' + folderName +'/questions');
    const out = fs.readFileSync('test/' + folderName +'/out.txt').toString();

    it('should prepare correctly', () => {
        assert.notStrictEqual(prepareFile(inText), prepared)
    })
    it('should find the question', () => {
        assert.deepStrictEqual(findQuestions(prepared), questions)
    })
    it('should output correctly',() => {
        assert.notStrictEqual(createOutputString(questions),out);
    })
}

describe('Correct answer as last', () => testCase('correct_answer_as_last'));
describe('Answers ending with x',() => testCase('answers_ending_with_x'));
describe('Unused answers should be removed',() => testCase('remove_unused_answers'));
describe('Questions can consist of multiple lines',() => testCase('question_can_have_newline'));
describe('Whole file test',() => testCase('whole_file'));
describe('Answer C is ending in capital D',() => testCase('answer_c_ending_with_d'));
