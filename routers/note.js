const router = require('express').Router();
const { validate, existId } = require('../middlewares/required');
const { check } = require('express-validator');
const { show, showById, create, update, destroy } = require('../controllers/note');


router.get('/', show);
router.get('/:id', [
    check('id', 'Esto no es una nota!').isMongoId(),
    check('id').custom(existId),
    validate
], showById);

router.post('/', [
    check('user', 'Las notas no se crean solas!').not().isEmpty(),
    check('title', 'Una nota sin titulo no es una nota!').not().isEmpty(),
    check('content', 'Las notas necesitan palabras!').not().isEmpty(),
    check('date', 'Las notas necesitan fechas!').not().isEmpty(),
    validate
], create);

router.put('/:id', [
    check('id', 'Esto no es una nota!').isMongoId(),
    check('id').custom(existId),
    validate
], update);

router.delete('/:id', [
    check('id', 'Esto no es una nota!').isMongoId(),
    check('id').custom(existId),
    validate
], destroy);

module.exports = router;