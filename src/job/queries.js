const getJobs = "SELECT * FROM job";
const getJobById = "SELECT * FROM job where id = $1";
const checkjobExists = "SELECT * FROM job WHERE title = $1";
const addJob = "INSERT INTO job (title, description,company,location) VALUES ($1, $2, $3, $4)";

module.exports = {
    getJobs,
    getJobById,
    checkjobExists,
    addJob
}