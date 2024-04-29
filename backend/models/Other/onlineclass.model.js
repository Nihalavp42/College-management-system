const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  link: String,
});


module.exports = mongoose.model('Onlineclass', resourceSchema);

