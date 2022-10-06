const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    putUpdateThought,
    deleteandRemoveThought,


} = require('../../controllers/thoughtControllers');


router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thought_id').get(getSingleThought).put(putUpdateThought).delete(deleteandRemoveThought);





module.exports = router;