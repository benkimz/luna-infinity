import express from "express";
import getUrl from "../controllers/url-get.js";

const getrouter = express.Router();

getrouter.get("/:urlId", getUrl);

export default getrouter;
