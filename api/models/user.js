const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userName:
        {   type: String,
            unique: true 
        },
        password:String,
    }, { timestamps : true }
);

const userModel = mongoose.model("User", userSchema )

module.exports = userModel;
