import express from "express";

const urlrouter = express.Router();

import generateShortUrl from "../controllers/urls.js";
// Short URL Generator
urlrouter.post("/short", generateShortUrl);

export default urlrouter;
