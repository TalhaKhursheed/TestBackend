const getApplicationsById = "SELECT * FROM application where job_id = $1";
const checkApplicationExists = "SELECT * FROM application WHERE applicant_email = $1";
const addApplication = "INSERT INTO application (job_id,applicant_name, applicant_email,cover_letter) VALUES ($1, $2, $3, $4)";

module.exports = {
getApplicationsById,
checkApplicationExists,
addApplication
}