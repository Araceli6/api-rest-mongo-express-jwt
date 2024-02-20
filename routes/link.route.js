import { Router } from "express";
import { createLink, getLink, getLinks, removeLink, } from "../controllers/link.controller.js";
import {requireToken} from "../middlewares/requireToken.js"
import { bodyLinkValidator, paramLinkValidator } from "../middlewares/validatorManager.js";

const router = Router();

//GET               /api/v1/Links           all Links
//GET               /api/v1/Links/:id       single Link
//POST              /api/v1/Links           create Link
//PATCH/PUT         /api/v1/Links/:id       update Link
//DELETE            /api/v1Links/:id        remove Link

router.get("/", requireToken, getLinks);
router.get("/:id", requireToken, getLink);
router.post("/", requireToken, bodyLinkValidator, createLink);
router.delete("/:id", requireToken, paramLinkValidator, removeLink);


export default router;