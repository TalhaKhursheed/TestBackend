const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  job: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  applicantName: {  
    type: String,
    required: true
  },
  applicantEmail: {  
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email']
  },
  coverLetter: {  
    type: String,
    required: true
  },
  submittedAt: {  
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.model('Application', applicationSchema);
