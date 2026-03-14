import express from "express";
import path from "path";
import { v4 as uuid } from "uuid";
import methodOverride from "method-override";

const app = express();

// parsing The Request Body (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up Method Override for PATCH and DELETE
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mock data
let projects = [
    { id: uuid(), name: 'Shiplio', status: 'Active' },
    { id: uuid(), name: 'VibeCheck', status: 'In-Progress' }
];

// GET /projects 
app.get('/projects', (req, res) => {
    res.render('projects/index', { projects });
});

// GET /projects/new 
app.get('/projects/new', (req, res) => {
    res.render('projects/new');
});

// POST /projects
app.post('/projects', (req, res) => {
    const { name, status } = req.body;
    projects.push({ id: uuid(), name, status });
    res.redirect('/projects');
});

// GET /projects/:id 
app.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(p => p.id === id);
    res.render('projects/show', { project });
});

// GET /projects/:id/edit
app.get('/projects/:id/edit', (req, res) => {
    const { id } = req.params;
    const project = projects.find(p => p.id === id);
    res.render('projects/edit', { project });
});

// PATCH /projects/:id 
app.patch('/projects/:id', (req, res) => {
    const { id } = req.params;
    const newName = req.body.name;
    const foundProject = projects.find(p => p.id === id);
    foundProject.name = newName;
    res.redirect('/projects');
});

// DELETE /projects/:id 
app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    projects = projects.filter(p => p.id !== id);
    res.redirect('/projects');
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});