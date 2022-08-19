const express= require('express')
const {model: { User }}= require('../db/database')
const router= new express.Router()
const multer= require('multer')


//create a user
router.post('/users', async(req, res)=>{

    const user= await User.create(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.send(e)
    }
})

//read all users
router.get('/users', async(req, res)=>{
    try{
        const users= await User.findAll()
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }
})

//read user by its id
router.get('/users/:id', async(req, res)=>{
     
    const user= await User.findByPk(req.params.id)
    try{
        if(user === null){
            return res.status(404).send('user not exist')
        }
        res.status(201).send(user)
 
    }catch(e){
        res.status(500).send(e)
    }
})

//Update a user by id
router.patch('/users/:id', async(req, res)=>{
    const updates= Object.keys(req.body)
    console.log('id=', req.params.id)
    const user= await User.findOne({where: {id:req.params.id}})
    try{
        if(!user){
            return res.status(404).send()
        }
        await user.update(req.body)
       // updates.forEach((update)=> req.user[update]= req.body[update])
        await req.user.save()
        res.status(201).send()
    }catch(e){
        res.status(500).send(e)
    }

})

//delete a user by id
router.delete('/users/:id', async(req, res)=>{
    try{
        const user= await User.findByPK(req.params.id)
        await user.destroy()
        res.send(user)
    }catch(e){
        res.send()
    }

})


////-----------Using multer library----------
// endpoints for profile image upload
const upload= multer({
    dest: 'profiles',
    limits:{
        fileSize: 1000000
    },fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
}) 

//create a profile image
router.post('/users/:id/profileImage', upload.single('profileImage'),async(req, res)=>{
    const user= User.findByPK(req.params.id)
    // user.profileImage= req.file.buffer
    // await user.save()
    res.send()
},(error, req, res, next)=>{
    res.status(400).send({error: error.message})
})

module.exports= router