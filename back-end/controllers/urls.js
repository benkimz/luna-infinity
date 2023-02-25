import { nanoid } from "nanoid";
import Url from "../models/url.js";
import validateUrl from "../utils/utils.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });

const generateShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  const base = process.env.BASE_URL;

  const urlId = nanoid();
  if (validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          originalUrl: originalUrl,
          shortUrl: shortUrl,
          urlID: urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
};

export default generateShortUrl;
