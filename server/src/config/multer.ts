import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "web_market",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    format: "jpg",
  } as any,
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
