import mongoose from "mongoose";
const Schema = mongoose.Schema;
const nilaiSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    kelas:{
        type: String,
        required: true
    },
    nh1: {
        type: Number,
        required: true
    },
    nh2: {
        type: Number,
        required: true
    },
    nh3: {
        type: Number,
        required: true
    },
    uts: {
        type: Number,
        required: true
    },
    uas: {
        type: Number,
        required: true
    },
    nilai_akhir: {
        type: Number,
        required: true
    },
});

export default mongoose.model("Nilai", nilaiSchema);

