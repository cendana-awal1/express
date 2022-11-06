import Nilai from "../models/nilai.js";

export const getNilai = async (req, res) => {
  try {
    const nilai = await Nilai.find();
    res.status(200).json(nilai);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getNilaiById = async (req, res) => {
  try {
    const nilai = await Nilai.findById(req.params.id);
    res.status(200).json(nilai);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNilai = async (req, res) => {
  const nilai = req.body;
  const newNilai = new Nilai(nilai);
  try {
    await newNilai.save();
    res.status(201).json(newNilai);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateNilai = async (req, res) => {
    const cekid = await Nilai.findById(req.params.id);
    if (!cekid) {
        return res.status(404).json({ message: "DATA tidak ditemukan" });
    }

  try {
    const ubahNilai = await Nilai.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json(ubahNilai);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteNilai = async (req, res) => {
    const cekid = await Nilai.findById(req.params.id);
    if (!cekid) {
        return res.status(404).json({ message: "DATA tidak ditemukan" });
    }
  try {
    const deletedNilai = await Nilai.deleteOne({ _id: req.params.id });
    res.status(201).json(deletedNilai);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
