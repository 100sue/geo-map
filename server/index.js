const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// Routes :
app.get('/api/search', (req, res) => {
    res.json({ succes: "true"});
});


app.listen(PORT, () => console.log(`app has started on port: ${PORT}`));
