import mongoose from 'mongoose'
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://notice:lmo1123@btrmserver.jz9kdr4.mongodb.net/BTRM?retryWrites=true&w=majority')
        console.log('MongoDB connected');
    }catch(err){
        console.error(err);
    }
}

export default connectDB