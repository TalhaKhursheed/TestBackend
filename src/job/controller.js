const pool = require('../../db')
const queries = require('./queries')

const getAllJobs = (req, res ) => {
pool.query(queries.getJobs, (error,results) => {
    if(error) throw error;
    res.status(200).json(results.rows)
})
}

const getJobById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getJobById,[id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addJob = (req,res) => {
    try {
        const {title, description,company,location} = req.body;
        pool.query(queries.checkjobExists, [title], (error,results)=> {
            if(results.rows.length){
                return res.status(400).send("Job alredy created! ")
            }
            pool.query(queries.addJob, [title, description,company,location], (error,results)=> {
                if(error) throw error
                res.status(201).send('Job Added Successfully')
            })
        })
    } catch {
        console.error("Database error:", error);
        res.status(500).send("Internal Server Error");
    }

}
module.exports = {
    getAllJobs,
    getJobById,
    addJob
}