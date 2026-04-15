import connectDB from './src/config/database'
import express from 'express'
import app from './src/app'

import userRoutes from './src/routes/userRoutes'
import authRoutes from './src/routes/authRoutes'
import chatRoutes from './src/routes/chatRoutes'
import messageRoutes from './src/routes/messageRoutes'

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/health',(req,res) => {
    res.json({ status: 'ok', message:'success' })
})

app.use('/api/users', userRoutes)
app.use('/api/users', authRoutes)
app.use('/api/users', chatRoutes)
app.use('/api/users', messageRoutes)

connectDB().then(()=>{
    app.listen(PORT, () =>{
        console.log("Server is running on port: ", PORT);
    })
})