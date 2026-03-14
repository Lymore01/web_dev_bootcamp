import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");

// views
app.set("views", path.join(process.cwd(), "views"));

// static assets
app.set(express.static(path.join(process.cwd(), "public")));

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    
    const data = {
        name: subreddit,
        subscribers: 150000,
        description: "A community for building awesome things.",
        posts: [
            { title: "First deployment successful", author: "Lymore" },
            { title: "How to use EJS partials?", author: "DevGuru" },
            { title: "VibeCheck v2 Roadmap", author: "Founder" }
        ]
    };
    
    //passing the data object to the template
    res.render('subreddit', { ...data });
});


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
