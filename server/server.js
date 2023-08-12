const express = require('express');
const PORT = process.env.PORT || 3001
const cors = require('cors');

const api_routes = require('./routes/api_routes');

const app = express();

// Then pass these options to cors:
//app.use(cors(options));


app.use(cors({
  //methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  origin: ['http://localhost:3000/','http://localhost:3001/', 'https://localhost:3000/','https://localhost:3001/']
  //methods: ['POST']
}));

app.use(express.json())

app.use(express.static('../client/build'));


app.use('/api', api_routes)

app.all('*', function(req, res) {
  res.redirect("https://localhost:3000/");
});

app.listen(PORT, () => console.log('server started on port %s', PORT))