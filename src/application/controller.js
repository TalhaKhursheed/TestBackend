const pool = require('../../db')
const queries = require('./queries')

const getApplicationsById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getApplicationsById,[id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addApplication = (req,res) => {
    try{
        const {job_id,applicant_name, applicant_email,cover_letter} = req.body;
        console.log("Received body:", req.body);

        pool.query(queries.checkApplicationExists, [applicant_email], (error,results)=> {
            if(results.rows.length){
                return res.status(400).send("You have already applied for this job!");
            }
            pool.query(queries.addApplication, [job_id,applicant_name, applicant_email,cover_letter], (error,results)=> {
                if(error) throw error
                res.status(201).send('Applied Successfully')
            })
        })
    } catch{
        console.error("Database error:", error);
        res.status(500).send("Internal Server Error");
    }

}
module.exports = {
    getApplicationsById,
    addApplication
}