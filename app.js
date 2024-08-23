
import express from "express";
import { getNotes, getNote, createNote} from './database.js';
import { taskquery,insertid,insertintovalue,getTaskWithUser} from "./task.js";

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




// left join


app.get("/beta",async(req,res)=>{
    const beta=await taskquery();
    res.send(beta)
})


app.get("/beta/:id",async(req,res)=>{
    const id=req.params.id
    const notes=await insertid(id)
    res.json(notes)
})

app.post("/post",async(req,res)=>{
    const launchfunction = await insertintovalue(req.body.tasks,req.body.description, req.body.userid)
    res.send(launchfunction)
    })



app.get("/taskWithUser",async (req, res)=>{
    const include = await getTaskWithUser()
    return res.status(200).send(include)
})







app.listen(3500, () => {
    console.log("Port 3500 is running");
}); 