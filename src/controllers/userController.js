const User = require('../models/User');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { id, name, email, password, notification, daily_notification, review_quality, user_type, image } = req.body;

  const newUser = new User({ id, name, email, password, notification, daily_notification, review_quality, user_type, image });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
      const { _id } = req.params;
      const updatedData = req.body;

      const user = await User.findOneAndUpdate({ id: _id }, updatedData, { new: true });

      if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
      const { _id } = req.params;

      const user = await User.findOneAndDelete({ id: _id });

      if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};
