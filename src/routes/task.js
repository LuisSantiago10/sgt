const { Router }  = require('express');
const { check } = require('express-validator');
const { getTasks,createTask,getTaskById,updateTask,deleteTask } = require('../controllers/task');
const { validatorfields } = require('../middlewares/validator-fields');
const { validatorJWT } = require('../middlewares/validator-token');
const router = Router();

router.get('/',[validatorJWT],getTasks);
router.get('/:id',[validatorJWT],getTaskById);
router.post('/',
    [ 
        validatorJWT,
        check('title','the title it is not string').isString(),
        check('title','the title is required').not().isEmpty(),
        check('description','the description it is not string').isString(),
        check('description','the description is required').not().isEmpty(),
        check('id_status_completion','the id_status_completion it is not number').isNumeric(),
        check('id_status_completion','the status completion is required').not().isEmpty(),
        check('date_delivery','the date_delivery it is not string').isString(),
        check('date_delivery','the date delivery is required').not().isEmpty(),
        validatorfields
    ]
    ,createTask);
router.put('/:id',
    [
        validatorJWT,
        check('title','the title it is not string').isString(),
        check('title','the title is required').not().isEmpty(),
        check('description','the description it is not string').isString(),
        check('description','the description is required').not().isEmpty(),
        check('id_status_completion','the id_status_completion it is not number').isNumeric(),
        check('id_status_completion','the status completion is required').not().isEmpty(),
        check('date_delivery','the date_delivery it is not string').isString(),
        check('date_delivery','the date delivery is required').not().isEmpty(),
        validatorfields
    ] ,updateTask);
router.delete('/:id',[validatorJWT] , deleteTask);

module.exports = router;