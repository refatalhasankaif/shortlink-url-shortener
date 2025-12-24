import express from 'express'
import { nanoid } from "nanoid";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/api/create", (req, res) => {
  const {url} = req.body;
  console.log(url);
  res.send(nanoid(4));
});

export default app;