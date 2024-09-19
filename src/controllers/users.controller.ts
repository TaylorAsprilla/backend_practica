import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "Request Exitosoioioioooiio",
  });
};

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
        msg: "Error occurred"
    })
  }
};
