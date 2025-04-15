import mongoose from "mongoose";

mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },

})

export default mongoose.model("User", userSchema);
