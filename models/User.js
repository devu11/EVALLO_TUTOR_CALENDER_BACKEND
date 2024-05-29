import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    googleAccessToken: String,
    googleRefreshToken: String,
    googleCalendarId: String
});


const User = mongoose.model('User', userSchema);

export default User;