const Application = require('../models/application');
const Job = require('../models/job');


module.exports = {
    applicationsByJob: async ({ jobId }) => {
        try {
          const applications = await Application.find({ job: jobId }).populate("job"); // Populate job details
          return applications;
        } catch (err) {
          throw err;
        }
      },      
    createApplication: async (args) => {
      try {
        const { jobId, applicantName, applicantEmail, coverLetter } = args.applicationInput;

        const jobExists = await Job.findById(jobId);
        if (!jobExists) {
          throw new Error('Job not found.');
        }
    
        const existingApplication = await Application.findOne({ job: jobId, applicantEmail });
        if (existingApplication) {
          throw new Error('You have already applied for this job.');
        }
    
        const application = new Application({
          job: jobId, 
          applicantName,
          applicantEmail,
          coverLetter
        });
    
        return await application.save();
      } catch (err) {
        throw err;
      }
    },
  };
  