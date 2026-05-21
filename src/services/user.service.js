import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

const getUsersService = async () => {
  try {
    console.log('SERVICE -> getUsersService')
    return await User.find().select('-password')
  } catch (error) {
    throw error
  }
}


const createUserService = async (data) => {
  try {
    console.log('SERVICE -> createUserService')
    console.log(Data)
    const existUser = await User.findOne({
        email: data.email
    })

    if (existUser) {
        throw new Error('El usuario ya existe')
    }

    const hashPassword = await bcrypt.hash
        (data.password, 10)

    const user =new User({
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        password: hashPassword,
        edad: data.edad,
        sexo: data.sexo,
        telefono: data.telefono,
        direccion: data.direccion
    })

    await user.save()
    return {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        edad: user.edad,
        sexo: user.sexo,
        telefono: user.telefono,
        direccion: user.direccion
    }

}catch (error) {
    throw error
    }
}




const updateUserService = async (id, data) => {
  try {
    console.log('SERVICE -> updateUserService')
    if (data.password) {
      const salt = await bcrypt.genSalt(10)
      data.password = await bcrypt.hash(data.password, salt)
    }
    return await User.findByIdAndUpdate(id, data, { new: true }).select('-password')
  } catch (error) {
    throw error
  }
}

export {
  getUsersService,
  createUserService,
  updateUserService,
  deleteUserService
}