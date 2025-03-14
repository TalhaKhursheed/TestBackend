const Job = require('../models/job');

module.exports = {
  jobs: async () => {
    try {
      const jobs = await Job.find();
      return jobs;
    } catch (err) {
      throw err;
    }
  },
  job: async ({ id }) => {
    try {
      const job = await Job.findById(id);
      if (!job) {
        throw new Error('Job not found');
      }
      return job;
    } catch (err) {
      throw err;
    }
  },
  createJob: async (args) => {
    try {
        const existingJob = await Job.findOne({ 
            title: args.jobInput.title, 
            company: args.jobInput.company 
          });
    
          if (existingJob) {
            throw new Error('Job with this title and company already exists.');
          }
      const job = new Job({
        title: args.jobInput.title,
        description: args.jobInput.description,
        company: args.jobInput.company,
        location: args.jobInput.location,
      });

      const result = await job.save();
      return result;
    } catch (err) {
      throw err;
    }
  },
};
