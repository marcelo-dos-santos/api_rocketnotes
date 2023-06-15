const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const upload = multer(uploadConfig.MULTER)

const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UsersAvatarController")

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const usersRoutes = Router()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");




usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);

module.exports = usersRoutes;