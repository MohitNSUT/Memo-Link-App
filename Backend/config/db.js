import mongoose from "mongoose";

const DbCon=async()=>{
        await mongoose.connect("mongodb+srv://mohitgk7185:0Rar2uIbiblDtXv0@cluster0.dlf4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Mongodb is connected');
}
export default DbCon
