const Cat = require('../models/Cat');

const getCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los gatos' });
  }
};

const createCat = async (req, res) => {
  try {
    console.log(req.body);
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : '';
    const newCat = new Cat({ name, description, image });
    await newCat.save();
    res.json(newCat);
  } catch (error) {
    console.error('Error al crear el gato:', error);
    res.status(500).json({ message: 'Error al crear el gato' });
  }
};

const deleteCat = async (req, res) => {
  try {
    await Cat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gato eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el gato' });
  }
};

module.exports = { getCats, createCat, deleteCat };
