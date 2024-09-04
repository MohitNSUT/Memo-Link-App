import mongoose from "mongoose";

const DbCon=async()=>{
        await mongoose.connect("your URL")
        console.log('Mongodb is connected');
}
export default DbCon
