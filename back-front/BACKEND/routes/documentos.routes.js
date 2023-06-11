const { Router } = require('express');
const { documentosGet } = require('../controller/documento.controller');




const router = Router();


router.get('/',documentosGet);



module.exports = router;