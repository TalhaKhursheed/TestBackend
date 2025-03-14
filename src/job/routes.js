const {Router} = require('express');
const controller = require('./controller')
const router = Router();

router.get('/',controller.getAllJobs)
router.post('/',controller.addJob)
router.get("/:id",controller.getJobById)

module.exports = router;