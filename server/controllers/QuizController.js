const Quiz = require('../models/Quiz.js');

const getQuiz = async (req, res, next) => {
    try {
        Quiz.find().then((Quiz) => res.json(Quiz));

    } catch (error) {
        res.status(404).json(error);
    }}
const addQuiz = async (req, res) => {
   const newQuiz = new Quiz(req.body)
   try{
    const savedQuiz = await newQuiz.save();
    res.status(200).json(savedQuiz);
   }catch(err){
    res.status(404).json(err)
   }
}
const deleteQuiz = async (req, res) =>{
    try{
        await Quiz.findByIdAndDelete(req.params.id);
        res.status(200).json("Quiz deleted")
    }catch(err){
        res.status(500).json(err)
    }
}
const updateQuiz = async (req, res) =>{
    try{
    const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedQuiz);
    }catch(err){
        res.status(500).json(err);
    }

}