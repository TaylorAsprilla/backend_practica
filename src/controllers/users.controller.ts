import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const getAllUsers = await UserModel.find({}).populate('store');

    res.json({ ok: true, users: getAllUsers });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

export const getUserByDocumentoNumber = async (req: Request, res: Response) => {
  const documentNumber = req.params.document;

  try {
    const getUserByDocumentNumber = await UserModel.findOne({ documentNumber });

    res.json({ ok: true, user: getUserByDocumentNumber });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const getUserById = await UserModel.findById(id);
    res.json({ ok: true, user: getUserById });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    const updateUserById = await UserModel.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (updateUserById) {
      res.json({ ok: true, user: updateUserById });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to update user" });
    }
    
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteUser = await UserModel.findByIdAndDelete(id);
    if(deleteUser) {
      res.json({ ok: true, msg: "User deleted" });
    }else{
      res.status(500).json({ ok: false, msg: "Error occurred to delete user" });
    }
   
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
}

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const newUser = new UserModel({
      ...body,
    });

    const saveUser = await newUser.save();

    res.status(201).json({
      ok: true,
      msg: "user Created",
      user: saveUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error occurred",
      error,
    });
  }
};
