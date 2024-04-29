const express = require('express');
const { addResource, getAllResources } = require('../../controllers/Other/onlineclass.controller');
const router = express.Router();

router.post('/addResource', addResource);
router.get('/getResources', getAllResources);

module.exports = router;
