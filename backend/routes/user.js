const express= require('express')
const router = express.Router()
const User = require('../models/users')

//getting all data 
router.get('/',(req,res)=>{
  User.find()
  .then(users => res.status(200).json(users))
  .catch(err=> res.status(404).json({nojobsentry:"no jobs enlisted"}))
})

//getting data from id
router.get('/:id',(req,res)=>{
  User.findById(req.params.id)
  .then(users => res.status(200).json(users))
  .catch(err=> res.status(404).json({nojobsentry:"no jobs enlisted"}))
})

//creating job entries
router.post('/',(req,res)=>{
  console.log(req.body)
  User.create(req.body)
  .then(users => res.json({message:"entry posted"}))
  .catch(err=> res.status(404).json(err))

})

//updating job entries
router.put('/:id',(req,res)=>{
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(users=> res.json({message:"updated succesfully"}))
  .catch(err=> res.status(404).json(err))
})

//deleting job entries
router.delete('/:id',(req,res)=>{
  User.findByIdAndRemove(req.params.id, req.body)
  .then(users=> res.json({message:"deleted"}))
  .catch(err=> res.status(404).json(err))
})

module.exports = router