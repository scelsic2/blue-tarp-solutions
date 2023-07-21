const express = require('express');
const PORT = process.env.PORT || 3001
const cors = require('cors');

const api_routes = require('./routes/api_routes');

const app = express();
app.use(express.json())

app.use(express.static('../client/build'));

app.use('/api', api_routes)

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}

app.listen(PORT, () => console.log('server started on port %s', PORT))