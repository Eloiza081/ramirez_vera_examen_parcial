import mongoose from "mongoose";

const celularSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  precio: { type: Number, required: true },
  almacenamiento: Number,
  ram: Number
}, { timestamps: true });

export default mongoose.model("Celular", celularSchema);


