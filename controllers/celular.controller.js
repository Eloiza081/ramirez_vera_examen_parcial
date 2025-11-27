import Celular from "../models/celular.model.js";

export const getAll = async (req, res) => {
  const data = await Celular.find();
  res.status(200).json(data);
};

export const getById = async (req, res) => {
  const item = await Celular.findById(req.params.id);
  if (!item) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json(item);
};

export const create = async (req, res) => {
  const nuevo = new Celular(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

export const update = async (req, res) => {
  const actualizado = await Celular.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(actualizado);
};

export const remove = async (req, res) => {
  await Celular.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "Eliminado" });
};
