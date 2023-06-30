import express  from "express";

import {  authRegister, authEdit, authDelete, getUsers } from "../controller/auth.js";

const router = express.Router();

//create user
router.post("/create", authRegister);
router.put("/edit/:id", authEdit);
router.get("/users", getUsers);
router.delete("/delete/:id", authDelete);


export default router;
