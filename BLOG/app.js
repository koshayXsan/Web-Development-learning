const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Placeholder for posts
let posts = [];

// Routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Home route
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// New post form route
app.get('/new', (req, res) => {
    res.render('new');
});

// Handle new post submission
app.post('/new', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

// Edit post form route
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.render('edit', { post: posts[id], id });
});

// Handle post edit
app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    posts[id] = { title: req.body.title, content: req.body.content };
    res.redirect('/');
});

// Handle post deletion
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    posts.splice(id, 1);
    res.redirect('/');
});



