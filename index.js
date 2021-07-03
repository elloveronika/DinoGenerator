const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  app.get('/dinoname', async(request, response) => {
    const  fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=30&words=30&format=html", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f8ae41cca8msha1ed2cff5b880d3p128fb8jsnc2759f6c410c",
        "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
      }
    })
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
  })