const express = require('express');

const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/AllData");
}

const userSchema = new mongoose.Schema({
name: {type: String, required: true},
email: {type: String, required: true},
password: {type: Number, required: true},
profile_photo_url: {type: String, required: true},
roles: {type: String, required: true}
});

const movieSchema1 = new mongoose.Schema({
name: {type: String, required: true},
actor: {type: Array, required: true},
languages: {type: Array, required: true},
directors: {type: Array, required: true},
poster_url: {type: String, required: true}

});

const User = mongoose.model("user", userSchema);

const User1 = mongoose.model("user1", movieSchema1);

const app = express();

app.use(express.json());

app.post("/users", async (req, res)=>{
    const user = await User.create(req.body);
    res.status(201).send(user);

});

app.post("/users1", async (req, res)=>{
    const user = await User1.create(req.body);
    res.status(201).send(user);

});



app.listen(5000, async function(){
    await connect();
    console.log("listen on port 5000");
})