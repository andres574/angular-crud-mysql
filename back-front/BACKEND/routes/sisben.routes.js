const { Router } = require('express');
const { sisbenNivelGet } = require('../controller/Sisben.controller');

const router = Router();


router.get('/',sisbenNivelGet);



module.exports = router;