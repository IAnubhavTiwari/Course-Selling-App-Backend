const mongoose = require('mongoose');
console.log("connected to db");
mongoose.connect('mongodb+srv://LUFFY:LUFFY@cluster0.nv3oh.mongodb.net/coursera-app');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,

});


const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});


const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId,
});


const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
   
});

const adminModel = mongoose.model('admin', adminSchema);
const userModel = mongoose.model('user', userSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    adminModel,
    userModel,
    courseModel,
    purchaseModel,
}