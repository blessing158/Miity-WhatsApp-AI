const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Miity AI is online 🚀");
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  const replies = {
    hello: "Hello 👋 I'm Miity AI",
    hi: "Hi there 🔥",
    who: "I'm your AI assistant",
  };

  const reply =
    replies[message?.toLowerCase()] ||
    "I received: " + message;

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Miity AI running");
});
