const { Router } = require('express');
const { afiliadosGet, unicoAfiliadoGet, afiliadoDetete, afiliadoPost, afiliadoUpdate } = require('../controller/afiliado.controller');



const router = Router();

router.get('/',afiliadosGet);
router.get('/:id',unicoAfiliadoGet);
router.delete('/:id', afiliadoDetete);
router.post('/',afiliadoPost);
router.put('/:id',afiliadoUpdate);

module.exports = router;