const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
    console.log("API is successfully hit from Unity");

    // Access data from the request body or provide default values if not present
    const { ac = 1, people = 1, light = 1, door = 0 } = req.body;

    // Send the data back in the response
    res.status(200).json({
        people: people,
        ac: ac,
        light: light,
        door: door
    });
    console.log({ ac });
});

app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
