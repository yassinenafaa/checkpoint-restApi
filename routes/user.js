// require express
const express = require("express");
const User = require("../models/User");

//express router 
const router = express.Router()

//test
router.get("/test", (req, res) => {
    res.send("hello world");
});
//add 
router.post("/add", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newUser = new User({ name, email, phone });
        await newUser.save();
        res.status(200).send({ msg: "user added succesfuly", newUser });
    } catch (error) {
        res.status(400).send({ msg: "can not add user " }, error);

    }
})
//get all
router.get("/getAll", async (req, res) => {
    try {
        const listUser = await User.find();
        res.status(200).send({ msg: "the list of users", listUser })
    } catch (error) {
        res.status(400).send({ msg: "can not get the list of users", error })
    }
})
//get one
router.get("/:id", async (req, res) => {
    try {
        const getOneUser = await User.findOne({ _id: req.params.id });
        res.status(200).send({ msg: "this is the user ", getOneUser })
    } catch (error) {
        res.status(400).send({ msg: "can not get the user ", error })
    }
})
//delete
router.delete("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await User.findByIdAndDelete({ _id });
        res.status(200).send({ msg: "user deleted succesfuly" })
    } catch (error) {
        res.status(400).send({ msg: "can not delete user ", error })
    }
})
//update
router.put("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await User.updateOne({ _id }, { $set: { ...req.body } })
        res.status(200).send({ msg: "user updated succesfuly" });

    } catch (error) {
        res.status(400).send({ msg: "con not update user", error })
    }

})


// export 
module.exports = router;
