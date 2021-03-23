const router = require('express').Router();
const { validate, existUserId } = require('../middlewares/required');
const { check } = require('express-validator');
const { show, showById, create, update, destroy } = require('../controllers/user');


router.get('/', show);
router.get('/:id', [
    check('id', 'Esto no es una persona!').isMongoId(),
    check('id').custom(existUserId),
    validate
], showById);

router.post('/', [
    check('name', 'Las notas no se escriben solas!').not().isEmpty(),
    validate
], create);

router.put('/:id', [
    check('id', 'Esto no es una persona!').isMongoId(),
    check('id').custom(existUserId),
    validate
], update);

router.delete('/:id', [
    check('id', 'Esto no es una persona!').isMongoId(),
    check('id').custom(existUserId),
    validate
], destroy);

module.exports = router;