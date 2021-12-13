import express from "express";
import { postUser } from "../controllers/postUser";
import { getUser } from "../controllers/getUser";
import { deleteUser } from "../controllers/deleteUser";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The books managing API
 */

/**
 * @swagger
 * /commands:
 *   get:
 *     summary: get User
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: get User
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */

router.route("/pushCommand").post(postUser);

router.route("/commands").get(getUser);
router.route("/delete").delete(deleteUser);
export default router;
