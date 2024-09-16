import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userschema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

const user = mongoose.model('user', userschema);

export default user;