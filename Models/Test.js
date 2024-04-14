const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    questions: [{
        questionNumber: Number,
        category: String,
        question: { type: String, required: true },
        answer: { type: String, required: true }
    }]
});

module.exports = mongoose.model('Test', testSchema);
