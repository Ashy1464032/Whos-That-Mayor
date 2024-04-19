const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;
const cors = require('cors');


require('dotenv').config();

app.use(cors())

const headers = new Headers();
headers.append('API-Key', `${process.env.HYPIXEL_API_KEY}`);

const init = {
  method: 'GET',
  headers
};


app.get("/api/getMayor", async (req, res) => {
  try{
    const response = await axios.get('https://api.hypixel.net/v2/resources/skyblock/election', headers);
    res.json(response.data);
  } catch(e) {
    console.log(e.message)
    res.status(500).json({message: e.message});
  }
});

app.listen(port, () => {
  console.log(`Server is running`)
})