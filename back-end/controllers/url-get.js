import Url from "../models/url.js";
const getUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlID: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlID: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.originalUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
};

export default getUrl;
