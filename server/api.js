import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/", async (req, res) => {
	logger.debug("Welcoming everyone...");
	try {
	  let query = "SELECT * FROM videos";
	  const allVideos = await db.query(query);
	  res.status(200).json(allVideos.rows);
	} catch (error) {
	  console.log(error);
	  res.status(500).send(error.message);
	}
});

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hi Hello, world!" });
});

// router.get("/test", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

export default router;
