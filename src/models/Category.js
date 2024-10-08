import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
});

export default mongoose.model('Category', CategorySchema);
