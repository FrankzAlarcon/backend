const express = require('express');
const {getData, getOwnerData} = require('./src/getTwitterData');
const cors = require('cors');
const app = express();
const port = 3100;

app.use(express.json())
app.use(cors());


app.use('/get/:username', async (req, res) => {
  const data = await getData(req.params.username)
  res.send({
    body: data
  })
});
app.get('/get-owner/:username', async (req, res) => {
  const data = await getOwnerData(req.params.username);
  res.send({
    body: data
  });
});

app.listen(port, () => {
  console.log('Server running on port:' + port)
});