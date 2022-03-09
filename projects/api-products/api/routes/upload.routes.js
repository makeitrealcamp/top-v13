import express from "express";
import multer from "multer";

const uploader = multer({ dest: "upload/" });

const router = express.Router();

const uploadRoutes = {
  UPLOAD: "/upload",
};

router.post(uploadRoutes.UPLOAD, uploader.single("file"), async (req, res) => {
  console.log("******************");
  res.send("sent image");
});

export default router;
