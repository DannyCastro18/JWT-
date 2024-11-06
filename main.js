require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const PORT = process.env.PORT||3000;

const users = [];
app.post('/register', async(req,res) =>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = {username, password: hashedPassword};
    users.push(newUser);
    
    res.status(201).json({message: 'Usuario registrado exitosamente'});
});





