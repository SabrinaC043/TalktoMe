const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    putUpdateThought,
    deleteandRemoveThought,
    newReaction,
    deleteAndRemoveReaction


} = require('../../controllers/thoughtControllers');


router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thought_id').get(getSingleThought).put(putUpdateThought).delete(deleteandRemoveThought);

router.route('/:thought_id/reactions').post(newReaction);
router.route('/:thought_id/reactions/:reaction_id').delete(deleteAndRemoveReaction);





module.exports = router;