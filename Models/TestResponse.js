const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testResponseSchema = new Schema({
    response: [{
        questionNumber: Number,
        category: String,
        question: { type: String, required: true },
        answer: { type: String, required: true }
    }],
    respondedBy: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TestResponse', testResponseSchema);
