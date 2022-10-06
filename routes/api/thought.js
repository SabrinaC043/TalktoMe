const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    putUpdateThought,
    deleteandRemoveThought,
    // post add new reaction 
    // delete reaction


} = require('../../controllers/thoughtControllers');


router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thought_id').get(getSingleThought).put(putUpdateThought).delete(deleteandRemoveThought);

router.route('/:thought_id/reactions')
router.route('/:thought_id/reactions/:reaction_id')





module.exports = router;