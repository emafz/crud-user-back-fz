import {
  createUserSchema,
  updateUserSchema
} from '../dto/user.dto.js'

import {
  getUsersService,
  createUserService,
  updateUserService,
  deleteUserService
} from '../services/user.service.js'
const getUsers = async (req, res) => {
  try {
    console.log('🎮 CONTROLLER → getUsers')
    const users = await getUsersService()
    return res.json(users)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const createUser = async (req, res) => {
  try {
    console.log('🎮 CONTROLLER → createUser')
    const { error } = createUserSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      })
    }
    const user = await createUserService(req.body)
    return res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const updateUser = async (req, res) => {
  try {
    console.log('🎮 CONTROLLER → updateUser')
    const { error } = updateUserSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      })
    }
    const user = await updateUserService(req.params.id, req.body)
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
    return res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const deleteUser = async (req, res) => {
  try {
    console.log('🎮 CONTROLLER → deleteUser')
    const user = await deleteUserService(req.params.id)
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
    return res.json({ message: 'Usuario eliminado correctamente', id: req.params.id })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}