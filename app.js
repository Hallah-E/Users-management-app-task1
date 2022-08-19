const express= require('express')
const userRouter= require('./router/user')
const db= require('./db/database')


const app= express();
const port= process.env.PORT || 3000

app.use(express.json());
app.use(userRouter);

app.get('/', (req, res)=>{
    res.send('Hello world')
});

(async()=>{
    await db.sequelize.sync();
})();

//try to insert a user
(async()=>{
<<<<<<< HEAD
//         "address": "Khartoum, sudan",
//         "gender": 1,
>>>>>>> a8362e68f66da4918b69a09ebd6fdc3d5de61820
//         "job": "Backend",
//         "salary": 5687
//  })
})();


app.listen(port, ()=>{
    console.log('server is up and running on port ', port)
})