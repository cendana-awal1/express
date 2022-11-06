import Nilai from "../models/nilai.js";

export const getNilai = async (req, res) => {
    try {
        const nilai = await Nilai.find();
        res.status(200).json(nilai);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }
export const createNilai = async (req, res) => {
    const nilai = req.body;
    const newNilai = new Nilai(nilai);
    try {
        await newNilai.save();
        res.status(201).json(newNilai);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    }

