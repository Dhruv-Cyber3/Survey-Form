const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    role: String,
    recommend: String,
    front: String,
    back: String,
    datav: String,
    challenges: String,
    openSource: String,
    gitter: String,
    videos: String,
    city: String,
    wiki: String,
    forum: String,
    additional: String
})

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;