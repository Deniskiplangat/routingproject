const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This is the post route')
});

router.post('/',async(req,res) => {
     const {title, description, username} = req.body;
      const newPost = new Post({title, description, username}) ;
       try { await newPost.save(); res.json(newPost);
     } catch (err) { console.log(err);
         res.status(500).send(); } })
module.exports = router;