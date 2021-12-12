import express from "express";
import { postUser } from "../controllers/postUser";
import { getUser } from "../controllers/getUser";
import { deleteUser } from "../controllers/deleteUser";

const router = express.Router();
router.route("/pushCommand").post(postUser);
router.route("/commands").get(getUser);
router.route("/delete").delete(deleteUser);
export default router;
