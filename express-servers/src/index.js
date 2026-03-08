import express from "express";

const app = express();

// app.use runs for every single incoming request
/*
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!");
    res.send("<h1>This is a generic response!</h1>");
});
*/

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Using ":" defines a pattern (variable) in the URL
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params; //
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

// Access data after the "?" in a URL (e.g., /search?q=puppies)
app.get("/search", (req, res) => {
  const { q } = req.query; 
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED!");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

// This MUST be the last route. It handles any URL that doesn't match above.
// app.get("*", (req, res) => {
//   res.send("I don't know that path!");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
