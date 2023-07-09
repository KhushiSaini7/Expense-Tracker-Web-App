const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb Connected!')
    } catch (error) {
        console.log('Mongodb Connection Error!!!');
    }
}  

module.exports = {db};