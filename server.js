const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, download_link TEXT)");
    db.run("INSERT INTO posts (title, content, download_link) VALUES ('First Blog Post', 'This is the content of the first blog post.', 'downloads/sample1.pdf')");
    db.run("INSERT INTO posts (title, content, download_link) VALUES ('Second Blog Post', 'This is the content of the second blog post.', 'downloads/sample2.pdf')");
    db.run("INSERT INTO posts (title, content, download_link) VALUES ('Third Blog Post', 'This is the content of the third blog post.', 'downloads/sample3.pdf')");
});

app.get('/posts', (req, res) => {
    db.all("SELECT * FROM posts", (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

app.use('/downloads', express.static('downloads'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
