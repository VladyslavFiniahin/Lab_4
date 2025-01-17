const { Schema, model } = require('mongoose');

const userSchema = new Schema({
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 apiKey: { type: String, required: true, unique: true }
});

const Users = model('users', userSchema);

module.exports = { Users };