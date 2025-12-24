import express from 'express'
import { nanoid } from "nanoid";
import ShortUrl from './models/shorturl.config.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server running");
});

app.post("/api/create", (req, res) => {
    const { url } = req.body;
    const shortUrl = nanoid(4);
    const newUrl = new ShortUrl({
        originalUrl: url,
        shortUrl: shortUrl
    });
    newUrl.save();
    console.log(url);
    res.send(nanoid(4));
});


app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const shortUrlData = await ShortUrl.findOne({ shortUrl: id });
    if (shortUrlData == null) return res.sendStatus(404);
    shortUrlData.clicks++;
    shortUrlData.save();
    res.redirect(shortUrlData.originalUrl);
});

export default app;