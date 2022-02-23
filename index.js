const express = require('express');
const {getData} = require('./src/getTwitterData');
const cors = require('cors');
const app = express();
const port = 3100;

app.use(express.json())
app.use(cors());


app.use('/get/:id', async (req, res) => {
  const data = await getData(req.params.id)
  res.send({
    body: data
  })
});
app.get('/get-owner/:id', async (req, res) => {
  const data = await getOwnerData(req.params.id);
  res.send({
    body: data
  });
});

app.listen(port, () => {
  console.log('Server running on port:' + port)
});