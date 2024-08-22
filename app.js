
import express from "express";
import { getNotes, getNote, createNote } from './database.js';

const app = express();
app.use(express.json());

app.get("/data", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
});

app.get("/data/:id", async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.send(note);
});

app.post("/data", async (req, res) => {
    const { name, email } = req.body;
    const note = await createNote(name, email);
    res.status(201).send(note);
});

app.use((err, req, res, next) => {
    res.status(404).send("Not found ");
});

app.listen(3500, () => {
    console.log("Port 3500 is running");
}); 