const express  = require ('express');
const router = express.Router();

const {getQuiz,addQuiz,updateQuiz,deleteQuiz} = require ('../controllers/QuizController.js')


router.get('/',getQuiz);
router.post('/',addQuiz);
router.get('/',updateQuiz);
router.get('/',deleteQuiz);
 module.exports = router;