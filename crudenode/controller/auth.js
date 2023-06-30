import User from "../model/auth.js";

export const authRegister = async (req, res) => {

    const user = new User(req.body);

    try {
       const savedUser = await user.save()
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err)
    }
}

export const authEdit = async (req, res) => {

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser);
    } catch (err) {
        console.log(err)
    }
}

export const authDelete = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.");
    } catch (err) {
        console.log(err)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err)
    }
}