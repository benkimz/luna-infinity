import monoogse from "mongoose";
const UrlSchema = new monoogse.Schema({
  urlID: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default monoogse.model("Url", UrlSchema);
