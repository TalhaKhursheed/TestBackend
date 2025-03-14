const {Router} = require('express');
const controller = require('./controller')
const router = Router();

router.post('/',controller.addApplication)
router.get("/:id",controller.getApplicationsById)

module.exports = router;