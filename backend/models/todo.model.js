import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{type:String}
});

export default mongoose.model.Todos||mongoose.model.apply("Todo",todoSchema);